export function formatCurrency(x: number | null): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    trailingZeroDisplay: "stripIfInteger",
    maximumFractionDigits: 2,
  }).format(x || 0);
}
