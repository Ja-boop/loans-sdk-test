/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import config from "../config";
import { getLoanIntent } from "../getLoanIntent";

describe("Get loan intent", () => {
  afterEach(() => {
    global.fetch = vi.fn();
  });

  it("should fetch with server url", async () => {
    const BORROWER = "1234";
    const COLLATERAL_AMOUNT = "150";
    const XDR = "1234";

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(XDR),
      })
    ) as never;

    const xdr = await getLoanIntent(BORROWER, COLLATERAL_AMOUNT);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      `${config.serverUrl}/loan/Intent`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          borrower: BORROWER,
          collateralAmount: COLLATERAL_AMOUNT,
        }),
      }
    );

    expect(xdr).toEqual("1234");
  });
});
