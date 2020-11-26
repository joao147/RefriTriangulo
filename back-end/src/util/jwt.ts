import jwt from 'jsonwebtoken';
import '../config/config'

const secret = String(process.env.JWT_SECRET);
const duration = String(process.env.JWT_DURATION);

export const sign = (payload: {}) => jwt.sign(payload, secret, { expiresIn: duration });
export const verify = (token: string) => jwt.verify(token, secret);