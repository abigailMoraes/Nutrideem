"use strict";

const request = require("supertest");
const app = require("../app"); // Assuming your Express app is exported as 'app'
import { Item } from "../databases/model";

const mongoose = require("mongoose");

describe("Backend API Tests", () => {
  // Test case for GET /api/items
  beforeAll(async () => {
    const url = process.env.REACT_APP_MONGO_DB_URL;
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should get a list of items", async () => {
    const response = await request(app).get("/items");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Test case for POST /api/items
  it("should create a new item", async () => {
    const newItem = {
      name: "Test Item",
      description: "This is a test item",
    };

    const response = await request(app).post("/items").send(newItem);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("_id");
    expect(response.body.name).toBe(newItem.name);
    expect(response.body.description).toBe(newItem.description);
  });

  // Test case for PUT /api/items/:id
  it("should update an existing item", async () => {
    const updatedItem = {
      name: "Updated Item",
      description: "This is an updated item",
    };
    const randomItem = await Item.aggregate([{ $sample: { size: 1 } }]);
    const randomItemId = randomItem[0]._id.toString();

    // Replace 'ITEM_ID' with a valid item ID that exists in your database
    const itemId = randomItemId;

    const response = await request(app)
      .put(`/items/${itemId}`)
      .send(updatedItem);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(updatedItem.name);
    expect(response.body.description).toBe(updatedItem.description);
  });

  // Test case for DELETE /api/items/:id
  it("should delete an item", async () => {
    // Replace 'ITEM_ID' with a valid item ID that exists in your database

    const randomItem = await Item.aggregate([{ $sample: { size: 1 } }]);
    const randomItemId = randomItem[0]._id.toString();
    const itemId = randomItemId;

    const response = await request(app).delete(`/items/${itemId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Item deleted successfully");
  });
});
