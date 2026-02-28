import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App"; 

describe("Filter Component", () => {

  test("the input field acts as a controlled input", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Search");

    fireEvent.change(input, { target: { value: "testing 123" } });
    expect(input.value).toBe("testing 123");
  });

  test("the shopping filters based on the search term to include full matches", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Search");

    // initial items
    expect(screen.getByText("Yogurt")).toBeInTheDocument();
    expect(screen.getByText("Lettuce")).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Yogurt" } });

    // filtered
    expect(screen.getByText("Yogurt")).toBeInTheDocument();
    expect(screen.queryByText("Lettuce")).not.toBeInTheDocument();
  });

  test("the shopping filters based on the search term to include partial matches", () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Search");

    fireEvent.change(input, { target: { value: "Cheese" } });

    expect(screen.getByText("Swiss Cheese")).toBeInTheDocument();
    expect(screen.getByText("String Cheese")).toBeInTheDocument();
    expect(screen.queryByText("Lettuce")).not.toBeInTheDocument();
    expect(screen.queryByText("Yogurt")).not.toBeInTheDocument();
  });
});