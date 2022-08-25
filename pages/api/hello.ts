// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
export const api = () =>
  axios.create({
    baseURL: "http://localhost:4000",
  });

export const loginMember = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const resp = await api().post("/singIn", { email, password });
  return resp.data;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
