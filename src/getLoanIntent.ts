import fetchLoansApi from './fetchLoansApi';
import { Server } from './server';

/**
 * This fetch will return a loan intent transaction XDR
 * @param server `string` The Stellar server that the API will work with
 * @param borrower `string` For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
 * @param collateralAmount `string` For example: `150`
 * @returns {string} `string` XDR
 */
export async function getLoanIntent(
    server: Server,
    borrower: string,
    collateralAmount: string,
): Promise<string> {
    const result = await fetchLoansApi(server, 'loan/Intent', 'POST', {
        borrower,
        collateralAmount,
    });

    return result.json();
}
