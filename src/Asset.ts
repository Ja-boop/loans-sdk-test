import { IAsset } from './types/IAsset';

export class Asset implements IAsset {
    public code: string;
    public issuer: string;
    public isNative: boolean;
    constructor(assetCode: string, assetIssuer: string, isNative: boolean) {
        this.code = assetCode;
        this.issuer = assetIssuer;
        this.isNative = isNative;
    }
}
