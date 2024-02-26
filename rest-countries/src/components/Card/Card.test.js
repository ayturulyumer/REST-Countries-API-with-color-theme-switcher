import { render } from "@testing-library/react"; // Import render function
import { MemoryRouter } from "react-router-dom";

import Card from "./Card";



describe("Card component", () => {
  const mockCountry = {
    name: { common: "Test Country" },
    population: 1000000,
    region: "Test Region",
    capital: ["Test Capital"],
    flags: { png: "test.png", alt: "Test Flag" },
  };

  test("renders card with correct data", () => {
    const { getByTestId, getByAltText, getByText } = render( // 
      <MemoryRouter>
        <Card country={mockCountry} />
      </MemoryRouter>
    );

    const cardElement = getByTestId(`card-${mockCountry.name.common}`);
    expect(cardElement).toBeInTheDocument();

    const imageElement = getByTestId(`card-${mockCountry.name.common}-image`);
    expect(imageElement).toBeInTheDocument();

    const linkElement = getByTestId(`card-${mockCountry.name.common}-link`);
    expect(linkElement).toHaveAttribute(
      "href",
      `/details/${mockCountry.name.common}`
    );

    const imgElement = getByAltText("Test Flag");
    expect(imgElement).toBeInTheDocument();

    const titleElement = getByText("Test Country");
    expect(titleElement).toBeInTheDocument();

    const populationElement = getByTestId("population");
    const populationText = populationElement.textContent;
    expect(populationText).toContain("1.00M");

    const regionElement = getByTestId("region");
    const regionText = regionElement.textContent;
    expect(regionText).toContain("Test Region");

    const capitalElement = getByTestId("capital");
    const capitalText = capitalElement.textContent;
    expect(capitalText).toContain("Test Capital");
  });
});
