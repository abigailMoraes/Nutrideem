import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
  mockImplementation,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this to use expect().toBeInTheDocument()
import DonateModal from "../DonateModal";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getItemsAsync, postItemsAsync } from "../../redux/thunks"; // Adjust the import path to the actual location of your thunks
import { useAppDispatch, useAppSelector } from "../../redux/redux-hooks";
import { testUseAppSelector } from "../../redux/test-app-selector";

jest.mock("../../redux/redux-hooks");

const mockStore = configureMockStore([thunk])({
  items: {
    list: [],
    currentPage: null,
    totalPages: null,
  },
});

describe("DonateModal Component", () => {
  it("renders correctly when show is true", () => {
    // Mocking useSelector to return a truthy value for `show` prop
    //jest.spyOn(require("react-redux"), "useSelector").mockReturnValue(true);

    render(
      <Provider store={mockStore}>
        <DonateModal onClose={() => {}} show={true} />
      </Provider>
    );

    // Verify that the modal is rendered when show is true
    const modalElement = screen.getByTestId("donate-modal");
    expect(modalElement).toBeInTheDocument();
  });

  it("does not render when show is false", () => {
    // Mocking useSelector to return a falsy value for `show` prop
    //jest.spyOn(require("react-redux"), "useSelector").mockReturnValue(false);

    render(
      <Provider store={mockStore}>
        <DonateModal onClose={() => {}} show={false} />
      </Provider>
    );

    // Verify that the modal is not rendered when show is false
    const modalElement = screen.queryByTestId("donate-modal");
    expect(modalElement).not.toBeInTheDocument();
  });

  describe("DonateModal Component", () => {
    let obj = {
      type: "items/postItemsAsync",
      payload: {
        name: "Test Name",
        description: "Test Description",
        brand: "",
        donor: "",
        weight: "",
        img: "",
        bestbefore: "",
        delivery: "",
      },
    };

    const dispatch = jest.fn();
    beforeEach(() => {
      useAppSelector.mockImplementation(testUseAppSelector);
      useAppDispatch.mockReturnValue(dispatch);
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("dispatches postItemsAsync with correct data on form submission", () => {
      render(
        <Provider store={mockStore}>
          <DonateModal show={true} onClose={() => {}} />
        </Provider>
      );

      // Fill the form with some data
      const nameInput = screen.getByTestId("name-label");
      const descriptionInput = screen.getByTestId("desc-label");
      const submitButton = screen.getByTestId("donate-label");

      fireEvent.change(nameInput, { target: { value: "Test Name" } });
      fireEvent.change(descriptionInput, {
        target: { value: "Test Description" },
      });

      // Submit the form
      console.log("Before fireEvent.click:", dispatch.mock.calls);
      fireEvent.click(submitButton);
      console.log(dispatch.mock.calls);
      console.log("After fireEvent.click:", dispatch.mock.calls);

      expect(useAppDispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });
});
