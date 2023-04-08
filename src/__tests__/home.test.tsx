import { screen } from "@testing-library/react";
import { renderWithProviders as render } from "@/test-utils";
import Home from "../app/page";

describe("home", () => {
	it("should render card components", async () => {
		render(<Home />);

		const cards = await screen.findAllByRole("article");
		expect(cards).toHaveLength(12);
	});
});
