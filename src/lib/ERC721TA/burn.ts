import { BigNumber, providers } from 'ethers';
import { ERC721TA } from '@/types';
import { inisrizeERC721TA } from '../contract';

export async function burn(tokenId: number) {
  const token: ERC721TA = await inisrizeERC721TA();
  const estimateGas: BigNumber = await token.estimateGas.burn(tokenId);
  const options: providers.TransactionRequest = {
    gasLimit: estimateGas,
  };
  const transaction: providers.TransactionResponse = await token.burn(
    tokenId,
    options
  );
  await transaction.wait();
  console.log(transaction);
  return transaction;
}
