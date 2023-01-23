import config from "./config";

/**
 * This fetch will return a loan intent transaction XDR
 * @param borrower For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
 * @param collateralAmount For example: `150`
 * @returns {number} XDR string
 */
export async function getLoanIntent(
  borrower: string,
  collateralAmount: string
): Promise<string> {
  const result = await fetch(`${config.serverUrl}/loan/Intent`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ borrower, collateralAmount }),
  });

  return result.json();
}
