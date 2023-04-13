import { screen } from "@testing-library/react";
import { renderWithProviders as render } from "@/test-utils";
import CountryCard from "@/components/CountryCard";
import { country } from "@/mocks/mockedData";

describe("Country Card", () => {
	beforeEach(() => {
		render(<CountryCard {...country[0]} />);
	})	
	
	it("should render card title", () => {
		const cardTitle = screen.getByRole("heading");
		expect(cardTitle).toBeInTheDocument();
	});

	it("should render population", () => {
		const population = screen.getByText(/population/i);
		expect(population).toBeInTheDocument();
	});

	it("should render region", () => {
		const region = screen.getByText(/region/i);
		expect(region).toBeInTheDocument();
	});

	it("should render capital", () => {
		const capital = screen.getByText(/capital/i);
		expect(capital).toBeInTheDocument();
	});
});
