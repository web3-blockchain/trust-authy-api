import { mintTo } from '@/lib/ERC721TA/mintTo';
import { env } from '@/lib/config';
import { utils } from 'ethers';

function isValidEthereumAddress(address: string) {
  return utils.isAddress(address);
}

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    console.log(req.body);
    const toAddress = req.body.to;
    if (!toAddress || !isValidEthereumAddress(toAddress)) {
      return res.status(400).json({ error: 'Invalid Ethereum address' });
    }

    const tx = await mintTo(toAddress, env.SBT_METADATA_URI);

    res.status(200).json({ transaction: tx });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
