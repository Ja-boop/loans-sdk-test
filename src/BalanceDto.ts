import { Asset } from './Asset';
import type IBalanceDto from './types/IBalanceDto';

export class BalanceDto implements IBalanceDto {
    public asset: Asset;
    public amount: string;

    constructor(asset: Asset, amount: string) {
        this.asset = asset;
        this.amount = amount;
    }
}
