import { getCurrentUser } from "@/app/actions/getCurrentUser";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return NextResponse.error();
  }

  const body = await request.json();
  const { name, description, price, image, brand, category, inStock } = body;

  const product = await prisma.product.create({
    data: {
      name,
      description,
      price: parseFloat(price),
      image,
      brand,
      category,
      inStock,
    },
  });

  return NextResponse.json(product);
}
