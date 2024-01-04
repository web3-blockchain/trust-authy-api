import { ERC721TA } from '@/types';
import { inisrizeERC721TA } from '../contract';

export async function tokenURI(tokenId: number) {
  const token: ERC721TA = await inisrizeERC721TA();
  const response: string = await token.tokenURI(tokenId);
  console.log(response);
}
