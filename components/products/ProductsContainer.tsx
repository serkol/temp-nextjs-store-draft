import { fetchAllProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Separator } from "../ui/separator";

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTearm = search ? `&search=${search}` : "";
  if (totalProducts == 0) {
    return <EmptyList heading="No products were found" />;
  }
  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-medium">
            {totalProducts} product{totalProducts && "s"}
          </h4>
          <div className="flex gap-4">
            <Button
              variant={layout == "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchTearm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout == "grid" ? "ghost" : "default"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchTearm}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      {/* PRODUCT */}
      <div>
        {totalProducts == 0 ? (
          <EmptyList
            heading="Sorry, no products matched your search..."
            className="mt-16"
          />
        ) : layout == "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}
export default ProductsContainer;
