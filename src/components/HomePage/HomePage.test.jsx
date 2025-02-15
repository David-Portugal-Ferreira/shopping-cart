import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import HomePage from "./HomePage";

function useGetData() {
    let data = "Data";
    let loading = false;
    let error = false;
    return {data, loading, error}
}

describe("Homepage Component", () => {
  it("Renders Shop Button", () => {
    render(<HomePage />);
    const shopButton = screen.getByRole("link", { name: /shop now/i });
    expect(shopButton).toBeInTheDocument();
  });
});
