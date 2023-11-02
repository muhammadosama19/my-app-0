import prisma from "@/app/libs/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  name: string;
  username: string;
  bio: string;
  wallpaper: string;
  avatar: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      username: body.username,
      wallpaper: body.wallpaper,
      avatar: body.avatar,
      bio: body.bio,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}