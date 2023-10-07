import React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
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

  expect(getByTestId("vastus1")).toHaveTextContent("narva");
});

it("Muudame valik1 TALLINN", () => {
  const { getByTestId } = render(<Jaljendus />);

  fireEvent.change(getByTestId("valik1"), { target: { value: "tallinn" } });

  expect(getByTestId("vastus1")).toHaveTextContent("tallinn");
});

it("Muudame valik1 TARTU", () => {
    const { getByTestId } = render(<Jaljendus />);
    fireEvent.change(getByTestId("valik1"), { target: { value: "tartu" } });
    expect(getByTestId("vastus1")).toHaveTextContent("tartu");
});

it("Muudame valik1 TARTU ja saame vastuseks Ülikool Toomemägi", async () => {
    const { getByTestId } = render(<Jaljendus />);
    fireEvent.change(getByTestId("valik1"), { target: { value: "tartu" } });
    expect(getByTestId("vastus1")).toHaveTextContent("tartu");


    await waitFor(() => {
        expect(getByTestId("vastus2")).toHaveTextContent("Ülikool Toomemägi");
    },{timeout: 4000});
});
