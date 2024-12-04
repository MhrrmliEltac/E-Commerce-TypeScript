import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function DELETE(
  req: Request,
  context: { params: { id: string } }
) {
  const { params } = context; 

  if (!params?.id) {
    return NextResponse.error();
  }

  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }

  try {
    const product = await prisma.product.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Məhsul silinərkən xəta baş verdi:", error);
    return NextResponse.error();
  }
}
