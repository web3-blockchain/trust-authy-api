import { BigNumber, providers } from 'ethers';
import { ERC721TA } from '@/types';
import { inisrizeERC721TA } from '../contract';
import { JsonRpcProvider } from '../provider';

export async function mintTo(to: string, url: string) {
  const token: ERC721TA = await inisrizeERC721TA();
  const estimateGas: BigNumber = await token.estimateGas.mintTo(to, url);
  const options: providers.TransactionRequest = {
    gasLimit: estimateGas,
    gasPrice: (await JsonRpcProvider.getGasPrice()).mul(2),
  };
  const transaction: providers.TransactionResponse = await token.mintTo(
    to,
    url,
    options
  );
  await transaction.wait();

  console.log(transaction);
  return transaction;
}
