import { renderWithProviders as render } from "@/test-utils";
import { screen } from "@testing-library/react";
import Country from "@/components/Country";

const country = [
	{
		cca3: "CAN",
		flags: {
			svg: "https://restcountries.com/data/can.svg",
			png: "https://restcountries.com/data/can.png",
		},
		alt: "CA",
		name: { common: "Canada", official: "Canada" },
		population: "38246108",
		region: "Americas",
		capital: "Ottawa",
		subregion: "Northern America",
		tld: [".ca"],
		currencies: {
			CAD: {
				name: "Canadian dollar",
			},
		},
		languages: {
			eng: {
				name: "English",
				nativeName: "English",
			},
			fra: {
				name: "French",
				nativeName: "français",
			},
		},
		borders: ["USA"],
	},
];

describe("CountryPage", () => {
	it("should render title as country official name", () => {
		render(<Country {...country[0]} />);
		const title = screen.getByRole("heading", {level: 2});
		expect(title).toBeInTheDocument();
	});

  it("should render population", () => {
		render(<Country {...country[0]} />);
		const population = screen.getByText(/population/i);
		expect(population).toBeInTheDocument();
	});

  it("should render region", () => {
		render(<Country {...country[0]} />);
		const regions = screen.getAllByText(/region/i);
		expect(regions).toHaveLength(2);
	});


  it("should render capital", () => {
		render(<Country {...country[0]} />);
		const capital = screen.getByText(/capital/i);
		expect(capital).toBeInTheDocument();
	});

  it("should render top level domain", () => {
		render(<Country {...country[0]} />);
		const tld = screen.getByText(/top level domain/i);
		expect(tld).toBeInTheDocument();
	});

  it("should render currencies", () => {
		render(<Country {...country[0]} />);
		const currencies = screen.getByText(/currencies/i);
		expect(currencies).toBeInTheDocument();
	});

  it("should render languages", () => {
		render(<Country {...country[0]} />);
		const languages = screen.getByText(/languages/i);
		expect(languages).toBeInTheDocument();
	});

  it("should render borders title", () => {
		render(<Country {...country[0]} />);
		const bordersTitle = screen.getByRole("heading", {level: 3});
		expect(bordersTitle).toBeInTheDocument();
	});

  
});
