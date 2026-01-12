import { FaStar } from "react-icons/fa";

function ProductRating({ id }: { id: string }) {
  // TEMP
  const rating = 4.2;
  const count = 42;

  return (
    <span className="flex items-center gap-1 text-md mt-1 mb-4">
      <FaStar className="w-3 h-3" />
      {rating}
      {`(${count}) reviews`}
    </span>
  );
}
export default ProductRating;
