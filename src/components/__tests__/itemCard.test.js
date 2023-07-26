import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ItemCard from "../ItemCard";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { testUseAppSelector } from "../../redux/test-app-selector";

jest.mock("../../redux/redux-hooks");

// Mock the Redux hooks implementation
const mockStore = configureMockStore([thunk])({
  items: {
    list: [],
    currentPage: null,
    totalPages: null,
  },
  nutrition: {
    nutrition: [], // Set the initial state for nutrition
  },
});

describe("ItemCard Component Tests", () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockReturnValue(dispatch);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  const item = {
    _id: "123",
    name: "Test Item",
    img: "test.jpg",
    weight: "100g",
    bestbefore: "2023-07-31",
  };

  it("renders ItemCard component correctly", () => {
    // Mock useSelector to return empty nutrition pictures
    useAppSelector.mockReturnValue([]);

    render(
      <Provider store={mockStore}>
        <ItemCard item={item} handleDelete={() => {}} />
      </Provider>
    );

    expect(screen.findByText("Test Item")).toBeTruthy();
    expect(screen.findByText("wt: 100g")).toBeTruthy();
    expect(screen.findByText("bb: 2023-07-31")).toBeTruthy();
    expect(screen.findByText("Edit")).toBeTruthy();
    expect(screen.findByText("Delete")).toBeTruthy();
    expect(screen.findByText("Nutrition")).toBeTruthy();
  });

  it("displays ItemModal when Edit button is clicked", () => {
    // Mock useSelector to return empty nutrition pictures
    useAppSelector.mockReturnValue([]);

    render(
      <Provider store={mockStore}>
        <ItemCard item={item} handleDelete={() => {}} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Edit"));

    expect(screen.findByText("item-modal")).toBeTruthy();
  });

  it("displays NutritionModal when Nutrition button is clicked", () => {
    // Mock useSelector to return nutrition pictures
    useAppSelector.mockReturnValue([
      {
        itemId: "123",
        image: "nutrition.jpg",
      },
    ]);

    render(
      <Provider store={mockStore}>
        <ItemCard item={item} handleDelete={() => {}} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Nutrition"));

    expect(screen.findByTestId("nutrition-modal")).toBeTruthy();
  });
});
