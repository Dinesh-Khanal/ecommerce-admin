import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const body = await req.json();
    const { billboardId, name } = body;
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthenticated!", { status: 403 });
    }
    if (!billboardId || !name) {
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
    const category = await prisma.category.create({
      data: {
        billboardId,
        name,
        storeId: params.storeId,
      },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_POST] ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
