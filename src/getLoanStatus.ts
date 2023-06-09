import fetchLoansApi from './fetchLoansApi';
import ILoanStatusResponse from './types/ILoanStatusResponse';
import { Server } from './server';

/**
 * This fetch will return the loan status
 * @param server `string` The Stellar server that the API will work with
 * @param borrower `string` For example: `GDGQVOKHW4VEJRU2TETD6DBRKEO5ERCNF353LW5WBFW3JJWQ2BRQ6KDD`
 * @returns {ILoanStatusResponse} `ILoanStatusResponse` The status of the loan
 */
export async function getLoanStatus(
    server: Server,
    borrower: string,
): Promise<ILoanStatusResponse> {
    const result = await fetchLoansApi(server, `loan/${borrower}`, 'GET');

    return result.json();
}
