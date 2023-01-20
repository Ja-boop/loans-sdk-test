import config from "./config";
import ILoanIntentRequest from "./types/ILoanIntentRequest";

export async function getLoanIntent(
  loanIntentRequest: ILoanIntentRequest
): Promise<string> {
  const result = await fetch(`${config.serverUrl}/loan/Intent`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loanIntentRequest),
  });

  return result.json();
}
