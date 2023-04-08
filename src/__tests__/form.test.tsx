import { renderWithProviders as render } from "@/test-utils";
import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Form from "@/app/components/Form";

describe("Form component", () => {
	const mockSearchOnChange = jest.fn();
	const mockSelectOnChange = jest.fn();
	const mockOnClick = jest.fn();

	const form = {
		search: "",
		region: "",
	};

	it("should render the form with default values", () => {
		render(
			<Form
				onClick={mockOnClick}
				search={form.search}
				searchOnChange={mockSearchOnChange}
				region={form.region}
				selectOnChange={mockSelectOnChange}
			/>,
		);

		const searchBox = screen.getByRole("textbox");
		const selectInput = screen.getByRole("combobox");
		expect(searchBox).toHaveValue("");
		expect(selectInput).toHaveValue("");
	});

	it("should render the reset button", () => {
		render(
			<Form
				onClick={mockOnClick}
				search={form.search}
				searchOnChange={mockSearchOnChange}
				region={form.region}
				selectOnChange={mockSelectOnChange}
			/>,
		);

		const resetBtn = screen.getByRole("button");
		expect(resetBtn).toBeInTheDocument();
	});

	it("renders search box with Canada word after typed", () => {
		form.search = "Canada";

		render(
			<Form
				onClick={mockOnClick}
				search={form.search}
				searchOnChange={mockSelectOnChange}
				region=""
				selectOnChange={mockSelectOnChange}
			/>,
		);
		const searchBox = screen.getByRole("textbox");
		expect(searchBox).toHaveValue("Canada");
	});

	it("renders dropdown with Asia word after selected", () => {
		form.region = "Asia";

		render(
			<Form
				onClick={mockOnClick}
				search=""
				searchOnChange={mockSelectOnChange}
				region={form.region}
				selectOnChange={mockSelectOnChange}
			/>,
		);
		const dropdown = screen.getByRole("combobox");
		expect(dropdown).toHaveValue("Asia");
	});

	it("should stimulate reset button click twice", async () => {
		render(
			<Form
				onClick={mockOnClick}
				search=""
				searchOnChange={mockSelectOnChange}
				region=""
				selectOnChange={mockSelectOnChange}
			/>,
		);
		const resetBtn = screen.getByRole("button");
		await user.click(resetBtn);
		await user.click(resetBtn);
		expect(mockOnClick).toHaveBeenCalledTimes(2);
	});
});
