const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { Item, Nutrition } = require("../databases/model");

(async () => {
  try {
    const defaultItemData = [
      {
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
    const defaultNutritionData = [
      {
        itemId: "",
        nutrition: "https://www.fda.gov/files/nfl-howtounderstand-honey.png",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition: "https://www.fda.gov/files/nfl-howtounderstand-honey.png",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition: "https://www.fda.gov/files/nfl-howtounderstand-honey.png",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition: "https://www.fda.gov/files/nfl-howtounderstand-honey.png",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition: "https://www.fda.gov/files/nfl-howtounderstand-honey.png",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition: "https://www.fda.gov/files/nfl-howtounderstand-honey.png",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition: "https://www.fda.gov/files/nfl-howtounderstand-honey.png",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition: "https://www.fda.gov/files/nfl-howtounderstand-honey.png",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition: "https://www.fda.gov/files/nfl-howtounderstand-honey.png",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition: "https://www.fda.gov/files/nfl-howtounderstand-honey.png",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition: "https://www.fda.gov/files/nfl-howtounderstand-honey.png",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition:
          "https://assets.wakefern.com/is/image/wakefern/4119007528-577?$Mi9Product_detail$",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition:
          "https://assets.wakefern.com/is/image/wakefern/4119007528-577?$Mi9Product_detail$",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition:
          "https://assets.wakefern.com/is/image/wakefern/4119007528-577?$Mi9Product_detail$",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition:
          "https://assets.wakefern.com/is/image/wakefern/4119007528-577?$Mi9Product_detail$",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition:
          "https://assets.wakefern.com/is/image/wakefern/4119007528-577?$Mi9Product_detail$",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition:
          "https://assets.wakefern.com/is/image/wakefern/4119007528-577?$Mi9Product_detail$",
        dateUpdated: new Date(),
      },
      {
        itemId: "",
        nutrition:
          "https://assets.wakefern.com/is/image/wakefern/4119007528-577?$Mi9Product_detail$",
        dateUpdated: new Date(),
      },
    ];
    console.log("setting up database");
    const url = process.env.REACT_APP_MONGO_DB_URL;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    const db = mongoose.connection;
    const collection = db.collection("items");
    //await Item.deleteMany();
    //await Nutrition.deleteMany();
    //const insertedItems = await Item.insertMany(defaultItemData);
    //console.log(`${insertedItems.length} items inserted.`);
    //const itemIds = insertedItems.map((item) => item._id);
    // var i = 0;
    //const nutritionDataWithItemIds = defaultNutritionData.map(
    //   (nutrition, index) => ({
    //     ...nutrition,
    //     itemId: itemIds[index], // Assign the item ID to the corresponding nutrition fact
    //   })
    // );
    // const insertedNutrition = await Nutrition.insertMany(
    //   nutritionDataWithItemIds
    // );
    // console.log(`${insertedNutrition.length} nutrition facts inserted.`);

    //console.log(`${result.insertedCount} items inserted.`);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
})();
