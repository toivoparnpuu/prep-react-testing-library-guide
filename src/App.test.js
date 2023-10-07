import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
//it("should take a snapshot", () => {
//  const { asFragment } = render(<App />);
//  expect(asFragment(<App />)).toMatchSnapshot();
//});

it("peab sisaldama: abc", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("kiht1")).toHaveTextContent("abc");
});

