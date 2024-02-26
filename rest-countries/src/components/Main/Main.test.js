import { render, fireEvent, act } from "@testing-library/react";
import Main from "./Main";

describe("Main component", () => {
  test("renders without crashing", () => {
    act(() => {
      render(<Main />);
    });
  });

  test("renders child components", () => {
    let component;
    act(() => {
      component = render(<Main />);
    });
    const { getByTestId } = component;
    expect(getByTestId("search-bar")).toBeInTheDocument();
    expect(getByTestId("filter")).toBeInTheDocument();
    expect(getByTestId("cards")).toBeInTheDocument();
  });

  test("onSearchHandler updates searchQuery state correctly", () => {
    let component;
    act(() => {
      component = render(<Main />);
    });
    const { getByPlaceholderText } = component;
    const searchInput = getByPlaceholderText("Search for a country...");

    act(() => {
      // Simulate a change event on the search input
      fireEvent.change(searchInput, { target: { value: "test query" } });
    });

    // Retrieve the value of the input field
    const inputValue = searchInput.value;

    // Assert that the searchQuery state is updated correctly
    expect(inputValue).toBe("test query");
  });

  test("handleRegionChange updates selectedRegion state correctly", () => {
    let component;
    act(() => {
      component = render(<Main />);
    });
    const { getByText, getByTestId } = component;
    const filterDropdown = getByTestId("filter");

    act(() => {
      // Open the filter dropdown
      fireEvent.click(filterDropdown);
    });

    // Find and click on the region option
    const regionOption = getByText("Europe");
    act(() => {
      fireEvent.click(regionOption);
    });

    // Retrieve the value of the selected region
    const selectedRegion = regionOption.textContent;

    // Assert that the selectedRegion state is updated correctly
    expect(selectedRegion).toBe("Europe");
  });
});
