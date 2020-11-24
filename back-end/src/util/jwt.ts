import jwt from 'jsonwebtoken';

const secret = String(process.env.JWT_SECRET);

export const sign = (payload: {}) => jwt.sign(payload, secret, { expiresIn: "2h" });
export const verify = (token: string) => jwt.verify(token, secret);