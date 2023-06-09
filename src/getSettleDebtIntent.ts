import fetchLoansApi from './fetchLoansApi';
import { IAsset } from './types/IAsset';
import { Server } from './server';

/**
 * This fetch will return a repay withdraw collateral intent transaction XDR to be signed by the borrower to cancel the remaining debt
 * @param server `string` The Stellar server that the API will work with
 * @param borrower `string` For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
 * @param debtCancellationAsset Asset
 * @returns {boolean} `string` XDR
 */
export async function getSettleDebtIntent(
    server: Server,
    borrower: string,
    debtCancellationAsset: IAsset,
): Promise<string> {
    const result = await fetchLoansApi(
        server,
        'loan/RepayWithdrawCollateral/Intent',
        'POST',
        {
            borrower,
            debtCancellationAsset,
        },
    );

    return result.json();
}
