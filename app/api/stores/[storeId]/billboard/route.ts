import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const body = await req.json();
    const { imageUrl, label } = body;
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthenticated!", { status: 403 });
    }
    if (!imageUrl || !label) {
      return new NextResponse("Image and label is required!", { status: 400 });
    }
    const storeByUserId = await prisma.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }
    const billboard = await prisma.billboard.create({
      data: {
        imageUrl,
        label,
        storeId: params.storeId,
      },
    });
    return NextResponse.json(billboard);
  } catch (error) {
    console.log("[BILLBOARD_POST] ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
