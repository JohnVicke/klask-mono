import nextSession, { Options } from "next-session";

export type KlaskSession = {
  idToken?: string;
};

const options: Options = {
  name: "__session",
  cookie: {
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7 * 2, // 14 days
    httpOnly: true,
  },
  touchAfter: 1 * 7 * 24 * 60 * 60, // 1 week
  autoCommit: false,
};

export const getSession = nextSession<KlaskSession>(options);
