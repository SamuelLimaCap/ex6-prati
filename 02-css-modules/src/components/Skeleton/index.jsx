import ProductCard from "../ProductCard";
import styles from "./skeleton.module.css";

export default function Skeleton(props) {
  const data = props.loading ? [0, 1, 2, 3, 4, 5] : props.data;

  return (
    <article className={styles.article}>
      {data.map((product) => (
        <ProductCard loading={props.loading} product={product} />
      ))}
    </article>
  );
}
