import { expect, it, describe, vi, afterEach, beforeEach } from "vitest";
import Datatable from "react-datatable-light/Datatable";
import { getFakeEmployees } from "./mock/fakeEmployees.js";
import { cleanup, render, screen } from "@testing-library/react";

describe("Datatable Related tests", () => {
  // We get mock
  const mock = vi.fn().mockImplementation(getFakeEmployees);

  describe("Datatable Default behavior", () => {
    beforeEach(() => {
      render(<Datatable data={mock()} />);
    });
    afterEach(() => {
      cleanup();
    });

    it("Should render mock data", () => {
      expect(screen.getByText(/Aurélien/i)).toBeDefined();
    });

    it("Should have filters", () => {
      expect(screen.getByTestId("datatable-entries-filter")).toBeDefined();
      expect(screen.getByTestId("datatable-search-filter")).toBeDefined();
    });

    it("Should have pagination", () => {
      expect(screen.getByTestId("datatable-pagination-previous")).toBeDefined();
      expect(screen.getByTestId("datatable-pagination-next")).toBeDefined();
    });

    it("Should render 10 rows", () => {
      const content = screen.getByTestId("datatable-body");
      const rows = content.querySelectorAll("tr");
      expect(rows.length).toBe(10);
    });
  });

  describe("Options Testing", () => {
    afterEach(() => {
      cleanup();
    });
    it("Should not contain search filter", () => {
      const search = false;
      render(
        <Datatable
          data={mock()}
          options={{ perPage: 10, entries: true, search: false, sort: true }}
        />,
      );
      expect(screen.queryByTestId("datatable-search-filter")).toBeNull();
    });

    it("Should not contain entries filter", () => {
      const search = false;
      render(
        <Datatable
          data={mock()}
          options={{ perPage: 10, entries: false, search: true, sort: true }}
        />,
      );
      expect(screen.queryByTestId("datatable-entries-filter")).toBeNull();
    });

    it("Should contain 12 rows per page", () => {
      const search = false;
      render(
        <Datatable
          data={mock()}
          options={{ perPage: 12, entries: true, search: true, sort: true }}
        />,
      );
      const content = screen.getByTestId("datatable-body");
      const rows = content.querySelectorAll("tr");
      expect(rows.length).toBe(12);
    });
  });
});
