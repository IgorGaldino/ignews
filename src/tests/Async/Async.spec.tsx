import { render, screen, waitFor } from "@testing-library/react";
import { Async } from ".";

describe("Async test render", () => {
  it("renders button visible with findBy", async () => {
    render(<Async />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(await screen.findByText("Button visible")).toBeInTheDocument();
  });

  it("renders button visible with waitFor", async () => {
    render(<Async />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();

    await waitFor(() => {
      return expect(screen.getByText("Button visible")).toBeInTheDocument();
    })
  });

  it("Remove button invisible with waitFor", async () => {
    render(<Async />);

    expect(screen.getByText("Hello World")).toBeInTheDocument();

    await waitFor(() => {
      return expect(screen.queryByText("Button invisible")).toBeInTheDocument();
    })
  });
});
