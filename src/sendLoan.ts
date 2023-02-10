import fetchLoansApi from './fetchLoansApi';
import { Server } from './server';

/**
 * This fetch will submit a signed loan intent transaction XDR to get a loan
 * @param server `string` The Stellar server that the API will work with
 * @param borrower `string` For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
 * @param loanSignedTransaction `string` XDR
 * @returns {boolean} `Boolean` Result of the submit
 */
export async function sendLoan(
    server: Server,
    borrower: string,
    loanSignedTransaction: string,
): Promise<boolean> {
    const result = await fetchLoansApi(server, 'loan', 'POST', {
        borrower,
        loanSignedTransaction,
    });

    return result.ok;
}
