import ProductCard from "../ProductCard";
import "./skeleton.css";

export default function Skeleton(props) {
  const data = props.loading ? [0, 1, 2, 3, 4, 5] : props.data;

  return (
    <article className="grid gap-[20px] grid-cols-4">
      {data.map((product) => (
        <ProductCard loading={props.loading} product={product} />
      ))}
    </article>
  );
}
