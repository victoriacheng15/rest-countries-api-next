import { rest } from "msw";
import {countries} from "./mockedData";

function getCountries() {
  return rest.get("https://restcountries.com/v3.1/all", (req, res, ctx) => {
    return res(ctx.json(countries));
  })
}

export const handlers = [
  getCountries()
]