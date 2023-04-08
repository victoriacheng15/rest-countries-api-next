import { screen } from "@testing-library/react";
import { renderWithProviders as render } from "@/test-utils";
import CountryCard from "@/app/components/CountryCard";

describe("Country Card", () => {
	const country = [
		{
			cca3: "CAN",
			flags: {
				svg: "https://restcountries.com/data/can.svg",
				alt: "Canada",
			},
			name: { common: "Canada", official: "Canada" },
			population: "38246108",
			region: "Americas",
			capital: "Ottawa",
		},
	];
	it("should render card title", () => {
		render(<CountryCard {...country[0]} />);
    const cardTitle = screen.getByRole("heading");
    expect(cardTitle).toBeInTheDocument();
	});

  it("should render population", () => {
		render(<CountryCard {...country[0]} />);
    const population = screen.getByText(/population/i);
    expect(population).toBeInTheDocument();
	});

  it("should render region", () => {
		render(<CountryCard {...country[0]} />);
    const region = screen.getByText(/region/i);
    expect(region).toBeInTheDocument();
	});

  it("should render capital", () => {
		render(<CountryCard {...country[0]} />);
    const capital = screen.getByText(/capital/i);
    expect(capital).toBeInTheDocument();
	});
});
