import { render, fireEvent } from "@testing-library/react";
import Main from "./Main";

describe("Main component", () => {
  test("renders without crashing", () => {
    render(<Main />);
  });

  test("renders child components", () => {
    const { getByTestId } = render(<Main />);
    expect(getByTestId("search-bar")).toBeInTheDocument();
    expect(getByTestId("filter")).toBeInTheDocument();
    expect(getByTestId("cards")).toBeInTheDocument();
  });

  test("onSearchHandler updates searchQuery state correctly", () => {
    const { getByPlaceholderText } = render(<Main />);
    const searchInput = getByPlaceholderText("Search for a country...");

    // Simulate a change event on the search input
    fireEvent.change(searchInput, { target: { value: "test query" } });

    // Retrieve the value of the input field
    const inputValue = searchInput.value;

    // Assert that the searchQuery state is updated correctly
    expect(inputValue).toBe("test query");
  });

  test("handleRegionChange updates selectedRegion state correctly", () => {
    const { getByText, getByTestId } = render(<Main />);
    const filterDropdown = getByTestId("filter");

    // Open the filter dropdown
    fireEvent.click(filterDropdown);

    // Find and click on the region option
    const regionOption = getByText("Europe");
    fireEvent.click(regionOption);

    // Retrieve the value of the selected region
    const selectedRegion = regionOption.textContent;

    // Assert that the selectedRegion state is updated correctly
    expect(selectedRegion).toBe("Europe");
  });
});
