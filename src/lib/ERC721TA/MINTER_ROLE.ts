import { ERC721TA } from '@/types';
import { inisrizeERC721TA } from '../contract';

export async function MINTER_ROLE() {
  const token: ERC721TA = await inisrizeERC721TA();
  const response: string = await token.MINTER_ROLE();
  return response;
}
