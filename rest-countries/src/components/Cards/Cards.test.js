import { render, waitFor, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import Cards from "./Cards";
import * as countriesApi from "../../api/countriesApi";

jest.mock("../../api/countriesApi");

describe("Cards component", () => {
  beforeEach(() => {
    // Mock the API functions
    countriesApi.getAllCountries.mockResolvedValue([
      {
        name: "Country 1",
        population: 100,
        region: "Europe",
        capital: ["Capital"],
        flags: {
          png: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
          alt: "Bulgarian Flag",
        },
      },
      {
        name: "Country 2",
        population: 300,
        region: "Africa",
        capital: ["Capital2"],
        flags: {
          png: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
          alt: "German Flag",
        },
      },
    ]);
  });

  test("sets loading to true during data fetching", async () => {
    // Mock asynchronous behavior that triggers loading
    countriesApi.getAllCountries.mockReturnValue(new Promise(() => {}));

    // Render the component
    let component;
    await act(async () => {
      component = render(
        <MemoryRouter>
          <Cards selectedRegion="Filter by Region" searchQuery="" />
        </MemoryRouter>
      );
    });

    // Wait for the loading state to change from false to true
    await waitFor(() => {
      expect(component.getByTestId("loading-spinner")).toBeInTheDocument();
    });
  });

  test("renders error message when error occurs", async () => {
    jest
      .spyOn(countriesApi, "getAllCountries")
      .mockRejectedValue(new Error("Failed to fetch"));

    let component;
    await act(async () => {
      component = render(
        <MemoryRouter>
          <Cards selectedRegion="Filter by Region" searchQuery="" />
        </MemoryRouter>
      );
    });

    const errorMessage = await waitFor(() =>
      component.getByTestId("error-message")
    );

    expect(errorMessage).toBeInTheDocument();
  });

  test("renders correctly without loading spinner or error message", async () => {
    countriesApi.getAllCountries.mockResolvedValue([
      {  name: { common: "Country 1" }, population: 100, region: "Europe", capital: ["Capital"], flags: { png: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg", alt: "Bulgarian Flag" } },
      {  name: { common: "Country 2" }, population: 300, region: "Africa", capital: ["Capital2"], flags: { png: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png", alt: "German Flag" } },
    ]);

    const { findByTestId } = render(
      <MemoryRouter>
        <Cards selectedRegion="Filter by Region" searchQuery="" />
      </MemoryRouter>
    );

    const countryCard1 = await findByTestId("card-Country 1");
    const countryCard2 = await findByTestId("card-Country 2");

    expect(countryCard1).toBeInTheDocument();
    expect(countryCard2).toBeInTheDocument();
  });
});
