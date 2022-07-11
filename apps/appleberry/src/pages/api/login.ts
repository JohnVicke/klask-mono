import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "../../lib/middlewares/session";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession(req, res);
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400);
    }

    session.idToken = idToken;
    await session.commit();
    return res.status(200).json({ message: "ok" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
