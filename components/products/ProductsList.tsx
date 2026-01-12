import { Product } from "@/lib/generated/prisma/client";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "./FavoriteToggleButton";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="pt-12 grid gap-y-8">
      {products.map(({ id, name, price, image, company }) => {
        const dollars = formatCurrency(price);
        return (
          <article key={id} className="group relative">
            <Link href={`/products/${id}`}>
              <Card className="py-0 transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-8 grid gap-y-4 md:grid-cols-3">
                  <div className="relative h-64 md:h-48 md:w-48 rounded overflow-hidden">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                      className="rounded w-full object-cover group-hover:scale-110 transition-transform duration-500"
                      priority
                    />
                  </div>
                  <div>
                    <h2 className="tex-xl font-semibold capitalize ">{name}</h2>
                    <h4 className="text-muted-foreground">{company}</h4>
                  </div>
                  <p className="text-muted-foreground text-lg md:ml-auto">
                    {dollars}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute bottom-8 right-8 z-5">
              <FavoriteToggleButton id={id} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsList;
