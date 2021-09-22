import { NextApiRequest, NextApiResponse } from "next";
import { useContext } from 'react';
import { TextMessage } from '../decomposition';

export default function SendText(req: NextApiRequest, res: NextApiResponse) {
  const message = useContext(TextMessage);
  res.json(
    {
      name: "sendText",
      value: "dd"
    }
  );
}