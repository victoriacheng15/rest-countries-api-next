import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("home", () => {
	it("should render the heading", () => {
		render(<Home />);

		const heading = screen.getByRole("heading", {
			name: /tailwind css with nextjs/i,
		});
		expect(heading).toBeInTheDocument();
	});
});
