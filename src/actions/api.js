import crypto from 'crypto-js';

export const API_URL = 'https://gateway.marvel.com/v1/public/characters';

export const publicKey = '7c56612209b7a28ed900cb8e063af327';

export const privateKey = 'ede6e88cc7de7c95c10156e284eef870bee2a470';

export const hash = crypto.MD5(1+privateKey+publicKey);
