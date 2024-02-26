import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
import { ThemeProvider } from '../../contexts/ThemeContext';
import { MemoryRouter } from "react-router-dom";

describe("Navbar component", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      </MemoryRouter>
    );

    const navbarElement = getByTestId("navbar");

    expect(navbarElement).toBeInTheDocument();
  });

  test("switches theme on click", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ThemeProvider>
          <Navbar />
        </ThemeProvider>
      </MemoryRouter>
    );

    const switchButton = getByText("Dark Mode"); // Assuming "Dark Mode" is displayed initially
    fireEvent.click(switchButton);

    expect(getByText("Light Mode")).toBeInTheDocument(); // Assert that the theme switched to Light Mode
  });
});