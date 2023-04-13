import { renderWithProviders as render } from "@/test-utils";
import { screen } from "@testing-library/react";
import Country from "@/components/Country";
import { country } from "@/mocks/mockedData";

describe("CountryPage", () => {
	beforeEach(() => {
		render(<Country {...country[0]} />);
	});
	it("should render title as country official name", () => {
		const title = screen.getByRole("heading", { level: 2 });
		expect(title).toBeInTheDocument();
	});

	it("should render population", () => {
		const population = screen.getByText(/population/i);
		expect(population).toBeInTheDocument();
	});

	it("should render region", () => {
		const regions = screen.getAllByText(/region/i);
		expect(regions).toHaveLength(2);
	});

	it("should render capital", () => {
		const capital = screen.getByText(/capital/i);
		expect(capital).toBeInTheDocument();
	});

	it("should render top level domain", () => {
		const tld = screen.getByText(/top level domain/i);
		expect(tld).toBeInTheDocument();
	});

	it("should render currencies", () => {
		const currencies = screen.getByText(/currencies/i);
		expect(currencies).toBeInTheDocument();
	});

	it("should render languages", () => {
		const languages = screen.getByText(/languages/i);
		expect(languages).toBeInTheDocument();
	});

	it("should render borders title", () => {
		const bordersTitle = screen.getByRole("heading", { level: 3 });
		expect(bordersTitle).toBeInTheDocument();
	});
});
