import { Product } from "@/lib/generated/prisma/client";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "./FavoriteToggleButton";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="_prodGrid">
      {products.map(({ id, name, price, image }) => {
        const dollars = formatCurrency(price);
        return (
          <article key={id} className="group relative">
            <Link href={`/products/${id}`}>
              <Card className="py-0 transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-4">
                  <div className="relative h-64 md:h-48 rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="rounded w-full object-cover group-hover:scale-110 transition-transform duration-500"
                      priority
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="text-lg capitalize">{name}</h2>
                    <p className="text-muted-foreground mt-2">{dollars}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute top-7 right-7 z-5">
              <FavoriteToggleButton id={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
