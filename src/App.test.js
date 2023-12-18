import { render, screen } from "@testing-library/react";
import App from "./App";

test("render without errors", () => {
  render(<App />);
});

test("On app mount, add new animal header exists on screen", () => {
  // ARRANGE
  render(<App />);

  // ACT
  const header = screen.getByText("Add New Animal");

  // ASSERT
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent(/add new animal/i);
});
