import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders as render } from "@/test-utils";
import { server } from "../mocks/server";
import { rest } from "msw";
import Home from "../app/page";

describe("home", () => {
	it("render loading status", async () => {
		render(<Home />);
		const loadingText = await screen.findByText(/Loading/i);
		expect(loadingText).toBeInTheDocument();
	});

	it("remder componet without countries", async () => {
		server.use(
			rest.get("https://restcountries.com/v3.1/all", (req, res, ctx) => {
				return res(ctx.status(500), ctx.json([]));
			}),
		);
		render(<Home />);
		const heading = await screen.findByRole("heading", {
			level: 1,
		});
		expect(heading).toBeInTheDocument();
	});

	it("render countries", async () => {
		render(<Home />);
		const heading = await screen.findAllByRole("heading", { level: 2 });
		await waitFor(async () => {
			expect(heading).toHaveLength(3);
		});
	});
});
