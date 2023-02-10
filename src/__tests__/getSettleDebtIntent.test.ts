/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Asset } from '../Asset';
import config from '../config';
import { getSettleDebtIntent } from '../getSettleDebtIntent';

describe('Get repay withdraw collateral intent XDR', () => {
    afterEach(() => {
        global.fetch = vi.fn();
    });

    it('Should get an XDR to repay the remaining debt', async () => {
        const BORROWER = '1234';
        const XDR = '1234';
        const asset = new Asset('1234', '1234', false);

        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(XDR),
            }),
        ) as never;

        const settleDebtXDR = await getSettleDebtIntent(
            'testnet',
            BORROWER,
            asset,
        );

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(
            `${config.testnetServerUrl}/loan/RepayWithdrawCollateral/Intent`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    borrower: BORROWER,
                    debtCancellationAsset: asset,
                }),
            },
        );

        expect(settleDebtXDR).toEqual(XDR);
    });
});
