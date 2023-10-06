import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prisma from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { billbardId: string; storeId: string } }
) {
  try {
    const body = await req.json();
    const { label, imageUrl } = body;
    const storeId = params.storeId;
    const id = params.billbardId;
    const { userId } = auth();
    if (!label) {
      return new NextResponse("Label is required", { status: 400 });
    }
    if (!imageUrl) {
      return new NextResponse("Image URL is required", { status: 400 });
    }
    if (!userId) {
      return new NextResponse("Unauthenticate", { status: 403 });
    }
    const billboard = await prisma.billboard.update({
      where: { id },
      data: { label, imageUrl },
    });
    return NextResponse.json(billboard);
  } catch (error) {
    console.log("[BILLBOARD_PATCH] ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
