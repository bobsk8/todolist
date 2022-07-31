import { createHmac } from "crypto";

export const generateHashToken = (username: string) => {
    return createHmac('sha256', username ).digest('hex');
}