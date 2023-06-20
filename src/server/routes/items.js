var express = require("express");
var router = express.Router();

const { v4: uuid } = require("uuid");

var items = [
  {
    id: "1",
    name: "Gala Apples",
    description:
      "Gala apples are a popular variety of apple known for their sweet and crisp flavor. They are medium-sized with a round shape and a distinctive yellow-orange skin, often covered in red stripes or blushes. The skin is thin and tender, making it easy to bite into and enjoy.",
    brand: "Okanagan Specialty Fruits",
    donor: "Safeway",
    weight: "100lbs",
    img: "https://assets.shop.loblaws.ca/products/20083526001/b1/en/front/20083526001_front_a01_@2.png",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
  {
    id: "2",
    name: "Chicken Breasts",
    brand: "Kirkland Signature",
    description:
      "Reserve chicken breasts. They will be transported to your facility in a refrigerated vehicle.",
    donor: "Costco",
    weight: "500lbs",
    img: "https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&itemId=47735&recipeName=680",
    bestbefore: "11/06/2023",
    delivery: "True",
  },
  {
    id: "3",
    name: "Mangoes",
    brand: "Ataulfo",
    description:
      "Ataulfo mangoes are small to medium-sized mangoes with a vibrant yellow skin.",
    donor: "Safeway",
    weight: "22lbs",
    img: "https://www.marcheliantai.ca/image/cache/catalog/products/0323/mang-guo-800x800.jpg",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
  {
    id: "4",
    name: "Ambrosia Apples",
    description:
      "Ambrosia apples are a popular variety of apple known for their sweet and crisp flavor. They are medium-sized with a round shape and a distinctive yellow-orange skin, often covered in red stripes or blushes. The skin is thin and tender, making it easy to bite into and enjoy.",
    brand: "Okanagan Specialty Fruits",
    donor: "Safeway",
    weight: "100lbs",
    img: "https://assets.shop.loblaws.ca/products/20092614001/b2/en/front/20092614001_front_a06_@2.png",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
  {
    id: "5",
    name: "Ramen",
    brand: "Kirkland Signature",
    description:
      "Instant ramen. It will be transported to your facility free of charge.",
    donor: "Costco",
    weight: "500lbs",
    img: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/5e29cee662f416535401c294_00767335011179-glamor-frontpackageglamor-2020-01-14t18-28-50-pixel-3a-quality-90-1-20-1-user-5984ad42a967f880524de2c4-0lie-371808.jpg",
    bestbefore: "11/06/2023",
    delivery: "True",
  },
  {
    id: "6",
    name: "Bananas",
    brand: "Chiquita",
    description:
      "Chiquita bananas are small to medium-sized mangoes with a vibrant yellow skin.",
    donor: "Safeway",
    weight: "22lbs",
    img: "https://www.kroger.com/product/images/large/front/0007490404011",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
  {
    id: "7",
    name: "Super Green Pasta",
    description: "Catelli super greens pasta",
    brand: "Catelli",
    donor: "Safeway",
    weight: "100lbs",
    img: "https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/43d6fd1f-d0c9-4b94-bb81-d6be284bc415/300x300.jpg",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
  {
    id: "8",
    name: "Pumpkin Pie",
    brand: "Kirkland Signature",
    description:
      "Frozen Pumpkin Pie. Will be delivered in a refrigerated vehicle free of cost.",
    donor: "Costco",
    weight: "500lbs",
    img: "https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&itemId=47735&recipeName=680",
    bestbefore: "11/06/2023",
    delivery: "True",
  },
  {
    id: "9",
    name: "Candy Canes",
    brand: "Kirkland Signature",
    description: "Candy canes for pickup",
    donor: "Safeway",
    weight: "22lbs",
    img: "https://cdn.shopify.com/s/files/1/1358/6777/products/1571_300x300.png?v=1635974727",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
  {
    id: "10",
    name: "Gala Apples",
    description: "Red peaches from the Okanagan Valley.",
    brand: "Okanagan Specialty Fruits",
    donor: "Safeway",
    weight: "100lbs",
    img: "https://canigivemydog.com/wp-content/uploads/2011/10/can-i-give-my-dog-peaches-300x300.jpg",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
  {
    id: "11",
    name: "Spring Onions",
    brand: "Walmart",
    description:
      "Spring Onions. They will be transported to your facility in a refrigerated vehicle.",
    donor: "Costco",
    weight: "500lbs",
    img: "https://cdn.shopify.com/s/files/1/0375/3308/9836/products/a790f19e4fb6ed5140ac7954f8a29429_300x300.jpg?v=1611586817",
    bestbefore: "11/06/2023",
    delivery: "True",
  },
  {
    id: "12",
    name: "Dried Seaweed Snacks",
    brand: "HoSan",
    description:
      "Ataulfo mangoes are small to medium-sized mangoes with a vibrant yellow skin.",
    donor: "Safeway",
    weight: "22lbs",
    img: "https://www.salamat.gr/image/cache/catalog/00newsite/09357-b-300x300.png",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
  {
    id: "13",
    name: "Gala Apples",
    description:
      "Gala apples are a popular variety of apple known for their sweet and crisp flavor. They are medium-sized with a round shape and a distinctive yellow-orange skin, often covered in red stripes or blushes. The skin is thin and tender, making it easy to bite into and enjoy.",
    brand: "Okanagan Specialty Fruits",
    donor: "Safeway",
    weight: "100lbs",
    img: "https://assets.shop.loblaws.ca/products/20083526001/b1/en/front/20083526001_front_a01_@2.png",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
  {
    id: "14",
    name: "Chicken Breasts",
    brand: "Kirkland Signature",
    description:
      "Reserve chicken breasts. They will be transported to your facility in a refrigerated vehicle.",
    donor: "Costco",
    weight: "500lbs",
    img: "https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&itemId=47735&recipeName=680",
    bestbefore: "11/06/2023",
    delivery: "True",
  },
  {
    id: "15",
    name: "Mangoes",
    brand: "Ataulfo",
    description:
      "Ataulfo mangoes are small to medium-sized mangoes with a vibrant yellow skin.",
    donor: "Safeway",
    weight: "22lbs",
    img: "https://www.marcheliantai.ca/image/cache/catalog/products/0323/mang-guo-800x800.jpg",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
  {
    id: "16",
    name: "Gala Apples",
    description:
      "Gala apples are a popular variety of apple known for their sweet and crisp flavor. They are medium-sized with a round shape and a distinctive yellow-orange skin, often covered in red stripes or blushes. The skin is thin and tender, making it easy to bite into and enjoy.",
    brand: "Okanagan Specialty Fruits",
    donor: "Safeway",
    weight: "100lbs",
    img: "https://assets.shop.loblaws.ca/products/20083526001/b1/en/front/20083526001_front_a01_@2.png",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
  {
    id: "17",
    name: "Chicken Breasts",
    brand: "Kirkland Signature",
    description:
      "Reserve chicken breasts. They will be transported to your facility in a refrigerated vehicle.",
    donor: "Costco",
    weight: "500lbs",
    img: "https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&itemId=47735&recipeName=680",
    bestbefore: "11/06/2023",
    delivery: "True",
  },
  {
    id: "18",
    name: "Mangoes",
    brand: "Ataulfo",
    description:
      "Ataulfo mangoes are small to medium-sized mangoes with a vibrant yellow skin.",
    donor: "Safeway",
    weight: "22lbs",
    img: "https://www.marcheliantai.ca/image/cache/catalog/products/0323/mang-guo-800x800.jpg",
    bestbefore: "10/06/2023",
    delivery: "false",
  },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  const { page, limit, search } = req.query; // Get pagination parameters from query string

  const currentPage = parseInt(page) || 1; // Current page number (default: 1)
  const itemsPerPage = parseInt(limit) || 6; // Number of items per page (default: 9)

  const startIndex = (currentPage - 1) * itemsPerPage; // Calculate the starting index of the subset
  const endIndex = startIndex + itemsPerPage; // Calculate the ending index of the subset

  console.log(search);

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

router.get("/");

router.put("/:id", function (req, res, next) {
  const itemId = req.params.id;
  console.log(itemId);
  const foundItem = items.find((item) => item.id === itemId);
  console.log(req);
  console.log(foundItem);
  foundItem.name = req.body.name;
  foundItem.brand = req.body.brand;
  foundItem.description = req.body.description;
  foundItem.donor = req.body.donor;
  foundItem.weight = req.body.weight;
  foundItem.img = req.body.img;
  foundItem.bestbefore = req.body.bestbefore;
  foundItem.delivery = req.body.delivery;
  console.log(foundItem);
  res.status(200);
  return res.send(foundItem);
});

router.post("/", function (req, res, next) {
  const item = {
    id: uuid(),
    name: req.body.name,
    brand: req.body.brand,
    description: req.body.description,
    donor: req.body.donor,
    weight: req.body.weight,
    img: req.body.img,
    bestbefore: req.body.bestbefore,
    delivery: req.body.delivery,
  };
  items.push(item);
  res.status(200);
  return res.send(item);
});

router.delete("/:id", function (req, res, next) {
  console.log("heya");
  const itemId = req.params.id;
  console.log(itemId);
  console.log("filtering items");
  items = items.filter((item) => item.id !== itemId);
  console.log(items);
  res.status(204);
  return res.send();
});

module.exports = router;
