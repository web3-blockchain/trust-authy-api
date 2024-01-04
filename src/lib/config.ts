import dotenv from 'dotenv';
dotenv.config({ path: '.env', debug: false });

const defultAddress = '0x810edd9c003cd2fbc2bdb0c32df70af8eaea40d6';
const defultPrvKey =
  'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

export const env = {
  NODE_URL: process.env.NODE_URL ?? '',
  PRIVATE_KEY: process.env.PRIVATE_KEY ?? defultPrvKey,
  DEPLOYER_ADDRESS: process.env.DEPLOYER_ADDRESS ?? defultAddress,

  ERC1967PROXY_CONTRACT_ADDRESS:
    process.env.ERC1967PROXY_CONTRACT_ADDRESS ?? '0x1Eb006DEf0A4DAdEDf7d7c308E6A677becF1eb30',
  SBT_METADATA_URI: process.env.SBT_METADATA_URI ?? 'https://ipfs.io/ipfs/Qmdb3eUWuubWSisbHwvgEc4PJSiJCfX78G6bqKy7chbz1N/1',
};
