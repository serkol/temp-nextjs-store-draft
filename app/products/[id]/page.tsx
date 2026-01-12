import Breadcrumbs from "@/components/single-product/Breadcrumbs";
import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";

async function ProductDetails({ params }: { params: { id: string } }) {
  const id = (await params).id;

  const p = await fetchSingleProduct(id);
  const dollars = formatCurrency(p.price);
  return (
    <section>
      <Breadcrumbs name={p.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* COL 1 - IMAGE */}
        <div className="relative h-full">
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>
        {/* COL 2 - INFO */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{p.name}</h1>
            <FavoriteToggleButton id={id} />
          </div>
          <ProductRating id={id} />
          <h4 className="text-xl mt-2 ">{p.company}</h4>
          <p className="mt-3 bg-muted inline-block p-2 rounded">{dollars}</p>
          <p className="mt-6 leading-8 text-muted-foreground">
            {p.description}
          </p>
          <AddToCart id={id} />
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;
