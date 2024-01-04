import { providers } from 'ethers';
import { env } from './config';

export const JsonRpcProvider = new providers.JsonRpcProvider(env.NODE_URL);
