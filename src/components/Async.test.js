import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    //
    window.fetch = jest.fn();
    // .mockResolvedValueOnce allows us to set a value the fetch func resolves to when being called from Async.js fetch
    window.fetch.mockResolvedValueOnce({
      // obj resolved by the promise fetch. Overriding built in fetch func with dummy fetch
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);
    // second obj can be used the set exact and third obj can be uses to setTimeout
    //const listItemElements = await screen.findAllByRole("listitem", {},{});

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
