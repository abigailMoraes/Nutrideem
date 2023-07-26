import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import ItemModal from "../ItemModal";
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { testUseAppSelector } from "../../redux/test-app-selector";
import { updateItemsAsync } from "../../redux/thunks";

jest.mock("../../redux/redux-hooks");

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

jest.mock("../../redux/thunks", () => ({
  // Mock the updateItemsAsync function
  updateItemsAsync: jest.fn(),
}));

jest.mock("../../redux/service", () => ({
  // Mock the editItem function to return a desired value
  editItem: jest.fn().mockResolvedValue("Mocked response from editItem"),
}));

describe("ItemModal Component Tests", () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn();
    updateItemsAsync.mockReturnValue(jest.fn());
    useAppSelector.mockImplementation(testUseAppSelector);
    useAppDispatch.mockReturnValue(dispatch);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders ItemModal component correctly", () => {
    // Mock the item and show prop
    const item = {
      _id: "123",
      name: "Test Item",
      description: "Test Description",
      brand: "Test Brand",
      donor: "Test Donor",
      weight: "Test Weight",
      img: "Test Image Link",
      bestbefore: "Test Best Before",
      delivery: "Test Delivery",
    };
    const show = true;

    render(
      <Provider store={mockStore}>
        <ItemModal item={item} show={show} onClose={() => {}} />
      </Provider>
    );

    // Test if all input fields are rendered correctly
    expect(screen.queryByText("Name:")).toBeTruthy();
    expect(screen.getByText("Description:")).toBeTruthy();
    expect(screen.getByLabelText("Brand:")).toBeTruthy();
    expect(screen.getByLabelText("Donor:")).toBeTruthy();
    expect(screen.getByLabelText("Weight:")).toBeTruthy();
    expect(screen.getByLabelText("Image Link:")).toBeTruthy();
    expect(screen.getByLabelText("Best Before:")).toBeTruthy();
    expect(screen.getByLabelText("Delivery:")).toBeTruthy();

    // Test if the "Update Item" button is rendered
    expect(screen.getByText("Update Item")).toBeTruthy();

    // Test if the "Close" button is rendered
    expect(screen.getByText("Close")).toBeTruthy();
  });

  it("dispatches updateItemsAsync with correct data on form submission", () => {
    render(
      <Provider store={mockStore}>
        <ItemModal
          item={{
            _id: "123",
            name: "Test Item",
            description: "Test Description",
            brand: "",
            donor: "",
            weight: "",
            img: "",
            bestbefore: "",
            delivery: "",
          }}
          show={true}
          onClose={() => {}}
        />
      </Provider>
    );
    const submitButton = screen.getByTestId("item-modal-submit");

    // Test if the input fields are initially populated with the correct data
    expect(screen.getByLabelText("Name:").value).toBe("Test Item");
    expect(screen.getByLabelText("Description:").value).toBe(
      "Test Description"
    );
    // Add more assertions for other input fields as needed

    // Modify the input fields
    fireEvent.change(screen.getByLabelText("Name:"), {
      target: { value: "Updated Name" },
    });
    fireEvent.change(screen.getByLabelText("Description:"), {
      target: { value: "Updated Description" },
    });
    // Add more fireEvent.change calls to modify other input fields as needed

    // Submit the form
    console.log("Before fireEvent.click:", dispatch.mock.calls);
    fireEvent.click(submitButton);
    console.log(dispatch.mock.calls);
    console.log("After fireEvent.click:", dispatch.mock.calls);

    expect(useAppDispatch).toHaveBeenCalled();
    expect(updateItemsAsync).toHaveBeenCalledWith({
      _id: "123",
      name: "Updated Name",
      description: "Updated Description",
      brand: "",
      donor: "",
      weight: "",
      img: "",
      bestbefore: "",
      delivery: "",
    });
    // Verify that the dispatch function is called with the mocked return value of updateItemsAsync
    expect(dispatch).toHaveBeenCalledWith(updateItemsAsync());
  });
});
