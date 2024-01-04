import { env } from './config';
import {
  ExampleERC721Upgradeable,
  ExampleERC721UpgradeableProxy,
  ExampleERC721UpgradeableProxy__factory,
  ExampleERC721Upgradeable__factory,
  ERC721TA,
  ERC721TAProxy,
  ERC721TAProxy__factory,
  ERC721TA__factory,
} from '../types';
import { initWallet } from './wallet';

export async function inisrizeExampleERC721Upgradeable(): Promise<ExampleERC721Upgradeable> {
  return await ExampleERC721Upgradeable__factory.connect(
    env.ERC1967PROXY_CONTRACT_ADDRESS,
    await initWallet()
  );
}

export async function inisrizeExampleERC721UpgradeableProxy(): Promise<ExampleERC721UpgradeableProxy> {
  return await ExampleERC721UpgradeableProxy__factory.connect(
    env.ERC1967PROXY_CONTRACT_ADDRESS,
    await initWallet()
  );
}

export async function inisrizeERC721TA(): Promise<ERC721TA> {
  return await ERC721TA__factory.connect(
    env.ERC1967PROXY_CONTRACT_ADDRESS,
    await initWallet()
  );
}

export async function inisrizeERC721TAProxy(): Promise<ERC721TAProxy> {
  return await ERC721TAProxy__factory.connect(
    env.ERC1967PROXY_CONTRACT_ADDRESS,
    await initWallet()
  );
}
