## Get a loan

```javascript
// First we need to get the XDR that will be signed by the borrower

const server = 'testnet'; // 'testnet' | 'public'
const borrower 'GAIRISXKPLOWZBMFRPU5XRGUUX3VMA3ZEWKBM5MSNRU3CHV6P4PYZ74D';
const collateralAmount = '150';

const loanIntentXdr = await getLoanIntent(server, borrower, collateralAmount); 

// Then, after the borrower signs the transaction, we send the loan

const signedLoanIntentXdr = 'AAAAAgAAAACNv+HQvu9z8arYeDQYDO5KZoPZcjtWn3QWVHFVmFgtAgAAAGQAD2qUAAAAAQAAAAE...';

await sendLoan(server, borrower, signedLoanIntentXdr);
```
## Check loan status

```javascript
const server = 'testnet'; // 'testnet' | 'public'
const borrower 'GAIRISXKPLOWZBMFRPU5XRGUUX3VMA3ZEWKBM5MSNRU3CHV6P4PYZ74D';

const loanStatus = await getLoanStatus(server, borrower);

loanStatus = {
  percentagePaid: number,
  remainingDebt: number,
  userTotalYusdcInVault: number
}
```

## Withdraw collateral

There are two ways to let the borrower withdraw its collateral, by letting the loan paid itself or by settling the debt
```javascript
// Once the loand paid itself

const server = 'testnet'; // 'testnet' | 'public'
const borrower 'GAIRISXKPLOWZBMFRPU5XRGUUX3VMA3ZEWKBM5MSNRU3CHV6P4PYZ74D';

const withdrawCollateralIntentXDR = await getWithdrawCollateralIntent(server, borrower);

// Or if the borrower wants to settle the debt

const asset = new Asset('yUSDC', 'GDGTVWSM4MGS4T7Z6W4RPWOCHE2I6RDFCIFZGS3DOA63LWQTRNZNTTFF', false);

const settleDebtXDR = await getSettleDebtIntent(server, borrower, asset);

// Now when the borrower signs the XDR, we send it

const signedWithdrawCollateralXdr = 'AAAAAgAAAACNv+HQvu9z8arYeDQYDO5KZoPZcjtWn3QWVHFVmFgtAgAAAGQAD2qUAAAAAQAAAAE...';

await sendWithdrawCollateral(server, borrower, signedWithdrawCollateralXdr);
```
