import { Wallet } from 'ethers';
import { env } from './config';
import { JsonRpcProvider } from './provider';

export async function initWallet(): Promise<Wallet> {
  return new Wallet(env.PRIVATE_KEY, JsonRpcProvider);
}
