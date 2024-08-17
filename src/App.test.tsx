import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders friends section", () => {
  render(<App />);
  const friendsSection = screen.getByText(/Friends/i);
  expect(friendsSection).toBeInTheDocument();
});
