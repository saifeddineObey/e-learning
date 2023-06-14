import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './index';

describe("Navigation", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const navigationElement = screen.getByTestId("navigation");
    expect(navigationElement).toBeInTheDocument();

    const titleElement = screen.getByRole("heading", { level: 4 });
    expect(titleElement).toHaveTextContent("Navigation");
  });

  it("displays the correct logo and title for each navigation item", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const navigationMock = [
      {
        logo: "fraud_prevention.png",
        title: "Money Laundering and Fraud Prevention",
      },
      {
        logo: "it_security.png",
        title: "IT Security and Information Security",
      },
      {
        logo: "data_protection.png",
        title: "Data Protection",
      },
      {
        logo: "wphg.png",
        title: "WPHG",
      },
    ];

    navigationMock.forEach((item) => {
      const logoElements = screen.getAllByAltText("logo", { src: item.logo });
      expect(logoElements).toHaveLength(4);
   

      const titleElement = screen.getByText(item.title);
      expect(titleElement).toBeInTheDocument();
    });
  });
});
