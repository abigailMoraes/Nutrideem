var express = require("express");
var router = express.Router();
const { Item, Nutrition } = require("../databases/model");

/* GET users listing. */
router.get("/", function (req, res) {
  const { page, limit, search } = req.query; // Get pagination parameters from query string

  const currentPage = parseInt(page) || 1; // Current page number (default: 1)
  const itemsPerPage = parseInt(limit) || 6; // Number of items per page (default: 9)

  const startIndex = (currentPage - 1) * itemsPerPage; // Calculate the starting index of the subset
  const endIndex = startIndex + itemsPerPage; // Calculate the ending index of the subset

  console.log(search);
  Item.find().then((items) => {
    let searchItems = items;
    if (search) {
      searchItems = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    const subsetItems = searchItems.slice(startIndex, endIndex); // Get the subset of items based on the indices
    const response = {
      data: subsetItems,
      currentPage: currentPage,
      totalPages: Math.ceil(items.length / itemsPerPage),
    };

    res.status(200);
    res.json(response);
  });
});

router.put("/:id", function (req, res) {
  const itemId = req.params.id;
  const itemData = req.body;
  console.log(itemId);
  Item.findOneAndUpdate({ _id: itemId }, itemData, { new: true })
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update item" });
    });
});

router.post("/", function (req, res, next) {
  const item = {
    name: req.body.name,
    brand: req.body.brand,
    description: req.body.description,
    donor: req.body.donor,
    weight: req.body.weight,
    img: req.body.img,
    bestbefore: req.body.bestbefore,
    delivery: req.body.delivery,
  };

  const newItem = new Item({ ...item });

  newItem
    .save()
    .then((savedItem) => {
      const nutrition = {
        itemId: savedItem._id,
        nutrition:
          "https://assets.wakefern.com/is/image/wakefern/4119007528-577?$Mi9Product_detail$",
      };
      const newNutrition = new Nutrition({ ...nutrition });
      return newNutrition.save();
    })
    .then(() => {
      console.log("added nutrition");
    })
    .then(() => {
      Item.find().then((items) => res.status(200).send(items));
    })
    .catch((error) => {
      res.status(401).json({ error: "failed to create new item" });
    });
});

router.delete("/:id", function (req, res, next) {
  const itemId = req.params.id;
  Item.findOneAndDelete({ _id: itemId })
    .then((item) => {
      if (item) {
        console.log("Item deleted:", item);
        res.status(200).json({ message: "Item deleted successfully" });
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    })
    .catch((error) => {
      console.error("Error deleting item:", error);
      res.status(500).json({ error: "Failed to delete item" });
    });
});

module.exports = router;
