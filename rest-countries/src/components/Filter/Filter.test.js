import { render, fireEvent } from "@testing-library/react";
import Filter from "./Filter";

describe("Filter component", () => {
  test("renders correctly with CSS classes", () => {
    const { getByTestId } = render(<Filter />);
    const filter = getByTestId("filter");

    expect(filter).toHaveClass("dropdown");
  });

  test('initial state', () => {
    const { getByTestId } = render(<Filter selectedRegion="Europe" />);
    const selectedRegion = getByTestId('selected-region');

    expect(selectedRegion).toHaveTextContent('Europe');
  });

  test("toggles dropdown", () => {
    const { getByTestId } = render(<Filter />);
    const filter = getByTestId("filter");

    fireEvent.click(filter);
    expect(filter).toHaveClass("active");

    fireEvent.click(filter);
    expect(filter).not.toHaveClass("active");
  });

  test("selects region", () => {
    const onRegionChange = jest.fn();
    const { getByText } = render(<Filter onRegionChange={onRegionChange} />);
    const regionOption = getByText("Europe");

    fireEvent.click(regionOption);
    expect(onRegionChange).toHaveBeenCalledWith("Europe");
  });

  // Add more tests for accessibility, such as checking labels, etc.
});
