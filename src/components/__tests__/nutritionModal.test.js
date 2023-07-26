import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NutritionModal from "../NutritionModal";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { updateNutritionAsync } from "../../redux/nutritionThunk";
import { useAppDispatch } from "../../redux/redux-hooks";

jest.mock("../../redux/redux-hooks");
jest.mock("../../redux/nutritionThunk");

const mockStore = configureMockStore([thunk])({
  nutrition: {
    _id: "123",
    nutrition: "https://example.com/nutrition.jpg",
    dateUpdated: "2023-07-31",
  },
});

describe("NutritionModal Component Tests", () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useAppDispatch.mockReturnValue(dispatch);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches updateNutritionAsync with correct data on form submission", () => {
    render(
      <Provider store={mockStore}>
        <NutritionModal
          nutrition={{
            _id: "123",
            nutrition: "https://example.com/nutrition.jpg",
            dateUpdated: "2023-07-31",
          }}
          show={true}
          onClose={() => {}}
        />
      </Provider>
    );

    const inputElement = screen.getByLabelText("Nutrition Image Link:");

    fireEvent.change(inputElement, {
      target: { value: "https://example.com/new-nutrition.jpg" },
    });

    const submitButton = screen.getByDisplayValue("Update Item");
    fireEvent.click(submitButton);

    expect(updateNutritionAsync).toHaveBeenCalledWith({
      nutritionId: "123",
      nutrition: {
        _id: "123",
        nutrition: "https://example.com/new-nutrition.jpg",
      },
    });

    expect(useAppDispatch).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalled();
  });
});
