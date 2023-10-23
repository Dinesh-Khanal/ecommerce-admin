import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prisma from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { billbardId: string; storeId: string } }
) {
  try {
    const body = await req.json();
    const { name, billboardId } = body;
    const storeId = params.storeId;
    const id = params.billbardId;
    const { userId } = auth();
    if (!name) {
      return new NextResponse("Label is required", { status: 400 });
    }
    if (!billboardId) {
      return new NextResponse("Image URL is required", { status: 400 });
    }
    if (!userId) {
      return new NextResponse("Unauthenticate", { status: 403 });
    }
    const category = await prisma.category.update({
      where: { id },
      data: { name, billboardId },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY_PATCH] ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { categoryId: string; storeId: string } }
) {
  try {
    const storeId = params.storeId;
    const id = params.categoryId;
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }
    const storeByUserId = await prisma.store.findFirst({
      where: {
        id: storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }
    const category = await prisma.category.delete({
      where: { id },
    });
    return NextResponse.json(category);
  } catch (error) {
    console.log("[BILLBOARD_DELETE] ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
