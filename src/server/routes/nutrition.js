var express = require("express");
var router = express.Router();
const { Nutrition } = require("../databases/model");

router.get("/", function (req, res) {
  Nutrition.find()
    .then((nutritions) => {
      console.log(nutritions);
      res.status(200).send(nutritions);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(404).json({ error: "Failed to retrieve events" });
    });
});

router.put("/:id", function (req, res) {
  const nutritionId = req.params.id;
  const nutritionData = req.body;

  console.log(nutritionId);
  Nutrition.findOneAndUpdate({ _id: nutritionId }, nutritionData, { new: true })
    .then((nutrition) => {
      res.status(200).send(nutrition);
    })
    .catch((error) => {
      res.status(404).json({ error: "Failed to update item" });
    });
});

module.exports = router;
