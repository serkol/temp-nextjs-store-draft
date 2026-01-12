import { Product } from "@/lib/generated/prisma/client";
import db from "@/utils/db";
import { redirect } from "next/navigation";

export async function fetchFeaturedProducts() {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
}

export function fetchAllProducts({ search = "" }: { search: string }) {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function fetchSingleProduct(id: string) {
  const prod = await db.product.findUnique({
    where: { id: id },
  });
  console.log(prod);
  if (!prod) {
    redirect("/products");
  }
  return prod;
}
