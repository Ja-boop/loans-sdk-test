import fetchLoansApi from './fetchLoansApi';
import { Server } from './server';

/**
 * This fetch will return a withdraw collateral intent transaction XDR to be signed by the borrower once the loan has paid itself
 * @param server `string` The Stellar server that the API will work with
 * @param borrower `string` For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
 * @returns {string} `string` XDR
 */
export async function getWithdrawCollateralIntent(
    server: Server,
    borrower: string,
): Promise<string> {
    const result = await fetchLoansApi(
        server,
        'loan/WithdrawCollateral/Intent',
        'POST',
        {
            borrower,
        },
    );

    return result.json();
}
