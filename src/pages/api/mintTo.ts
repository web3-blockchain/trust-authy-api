import { mintTo } from "@/lib/ERC721TA/mintTo";
import { env } from "@/lib/config";

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    console.log(req.body);
    const toAddress = req.body.to
    const tx = await mintTo(toAddress, env.SBT_METADATA_URI);

    res.status(200).json({ transaction: tx });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
