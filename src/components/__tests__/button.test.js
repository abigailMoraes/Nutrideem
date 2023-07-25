import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "../Button";

test("should render button component", () => {
  render(<Button />);
  const buttonElement = screen.getByTestId("button-1");
  expect(buttonElement).toBeInTheDocument();
});

test("renders with children and correct styles", () => {
  render(
    <Button buttonStyle="btn--primary" buttonSize="btn--medium">
      Click Me
    </Button>
  );

  const buttonElement = screen.getByTestId("button-1");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass("btn");
  expect(buttonElement).toHaveClass("btn--primary");
  expect(buttonElement).toHaveClass("btn--medium");
  expect(buttonElement.textContent).toBe("Click Me");
});

test("executes onClick handler when clicked", () => {
  const onClickMock = jest.fn();
  render(
    <Button
      buttonStyle="btn--primary"
      buttonSize="btn--medium"
      onClick={onClickMock}
    >
      Click Me
    </Button>
  );

  const buttonElement = screen.getByTestId("button-1");
  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalled();
});
