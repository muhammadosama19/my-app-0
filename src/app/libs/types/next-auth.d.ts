import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
      username: string;
      bio: string;
      avatar: string;
      wallpaper: string;
      accessToken: string;
    };
  }
}