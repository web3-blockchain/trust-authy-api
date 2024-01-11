import { mintTo } from '@/lib/ERC721TA/mintTo';
import { env } from '@/lib/config';
import { utils } from 'ethers';

function isValidEthereumAddress(address: string) {
  return utils.isAddress(address);
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', 'https://trust-authy.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    console.log(req.body);
    const toAddress = req.body.to;
    if (!toAddress || !isValidEthereumAddress(toAddress)) {
      return res.status(400).json({ error: 'Invalid Ethereum address' });
    }

    const tx = await mintTo(toAddress, env.SBT_METADATA_URI);

    return res.status(200).json({ transaction: tx });
  }

  res.setHeader('Allow', 'POST');
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
