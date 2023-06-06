const initialState = {
  items: JSON.parse(localStorage.getItem("itemSet")) || [
    {
      id: 1,
      name: "Gala Apples",
      description:
        "Gala apples are a popular variety of apple known for their sweet and crisp flavor. They are medium-sized with a round shape and a distinctive yellow-orange skin, often covered in red stripes or blushes. The skin is thin and tender, making it easy to bite into and enjoy.",
      brand: "Okanagan Specialty Fruits",
      donor: "Safeway",
      weight: "100lbs",
      img: "https://i5.walmartimages.ca/images/Large/003/207/883391003207.jpg",
      bestbefore: "10/06/2023",
      delivery: "false",
    },
    {
      id: 2,
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
      id: 3,
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
  ],
};

const setPersist = (items) =>
  window.localStorage.setItem("itemSet", JSON.stringify(items));

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case "PERSIST_ITEMS": {
      const itemSetStored = JSON.parse(window.localStorage.getItem("itemSet"));
      setPersist(itemSetStored);
      return {
        ...state,
        items: itemSetStored ? itemSetStored : [],
      };
    }
    case "ADD_ITEM": {
      const itemSet = state.items.concat(action.payload);
      window.localStorage.setItem("itemSet", JSON.stringify(itemSet));
      return {
        ...state,
        items: itemSet,
      };
    }
    case "DELETE_ITEM": {
      console.log("in deleting items");
      const newItemSet = state.items.filter((item, i) => i !== action.payload);
      setPersist(newItemSet);
      console.log(newItemSet);
      return {
        ...state,
        items: newItemSet,
      };
    }
    default:
      return state;
  }
}
