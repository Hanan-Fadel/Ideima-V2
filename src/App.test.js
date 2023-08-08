import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the landing page", () => {
  render(<App />);
  expect(screen.getByRole("button")).not.toBeDisabled();
  expect(screen.getByRole("img")).toBeInTheDocument();
});
