import { renderWithProviders as render } from "@/test-utils";
import { screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Header from "@/components/Header";

describe("header component", () => {
	const mockedToggleDark = jest.fn();

	beforeEach(() => {
		render(<Header mode={false} onClick={mockedToggleDark} />);
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
