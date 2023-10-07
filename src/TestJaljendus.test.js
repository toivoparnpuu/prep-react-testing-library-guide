import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Jaljendus from "./components/Jaljendus";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("kas on valik1 on haapsalu", () => {
  const { getByTestId } = render(<Jaljendus />);

  expect(getByTestId("valik1")).toHaveTextContent("Haapsalu");
});

it("Muudame valik1 NARVA", () => {
  const { getByTestId } = render(<Jaljendus />);

  fireEvent.change(getByTestId("valik1"), { target: { value: "narva" } });

  expect(getByTestId("vastus1")).toHaveTextContent("NARVA");
});

it("Muudame valik1 TALLINN", () => {
  const { getByTestId } = render(<Jaljendus />);

  fireEvent.change(getByTestId("valik1"), { target: { value: "tallinn" } });

  expect(getByTestId("vastus1")).toHaveTextContent("TALLINN");
});

it("Muudame valik1 TARTU", () => {
  const { getByTestId } = render(<Jaljendus />);
  fireEvent.change(getByTestId("valik1"), { target: { value: "tartu" } });
  expect(getByTestId("vastus1")).toHaveTextContent("TARTU");
});
