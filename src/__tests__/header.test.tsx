import { renderWithProviders as render } from "@/test-utils";
import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Header from "@/app/components/Header";

describe("header component", () => {
	const mode = false;
	const mockedMode = jest.fn((mode) => (mode === false ? false : true));

	beforeEach(() => {
		render(<Header mode={mode} toggleDark={() => mockedMode} />);
	});

	it("should renders the heading", () => {
		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toBeInTheDocument();
	});

	it("should renders the button", () => {
		const themeButton = screen.getByRole("button");
		expect(themeButton).toBeInTheDocument();
	});

	it("should show dark mode after click the button", async () => {
		const themeButton = screen.getByRole("button");
		await user.click(themeButton);
		expect(themeButton).toHaveAttribute("title", "dark mode");
	});
});
