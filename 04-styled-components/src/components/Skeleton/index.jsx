import styled from "styled-components";
import ProductCard from "../ProductCard";

const Article = styled.article`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  /* 481–768px: 2 cols */
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default function Skeleton(props) {
  const data = props.loading ? [0, 1, 2, 3, 4, 5] : props.data;

  return (
    <Article>
      {data.map((product) => (
        <ProductCard loading={props.loading} product={product} />
      ))}
    </Article>
  );
}
