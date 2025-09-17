import StartFill from "../StartFill";
import StarEmpty from "../StarEmpty.jsx";
import loadingImg from "../../assets/gray-square.png";
import styled from "styled-components";

const Card = styled.div`
  padding: 2px;
  transition: transform 150ms;
  border-radius: 20px;
  padding: 20px;
  transition: all 150ms;

  &:hover {
    background-color: var(--card-focus-color);
    transform: translateY(-10px);
  }

  &:hover span {
    border: 1px solid var(--navbar-color);
    color: var(--navbar-color);
  }
`;

const CardImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

const Tags = styled.div`
  text-align: center;
`;

const Span = styled.span`
  margin: 0 4px;
  border: 1px solid var(--tag-color);
  color: var(--tag-color);
  padding: 2px;
  border-radius: 4px;
`;

const CardDesc = styled.div`
  padding-left: 20px;

  & > * {
    padding-top: 0.4rem;
  }
`;

const CardButtons = styled.div`
  width: 100%;
  padding: 4px 0px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;

  & > * {
    padding-top: 0.4rem;
  }
`;

const AddBtn = styled.button`
  width: 100%;
  padding: 4px 0px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;

  &[btn-style="outline"] {
    background-color: transparent;
    color: var(--success-color-btn);
    border-color: var(--success-color-btn);
  }
  &[btn-style="solid"] {
    background-color: var(--success-color-btn);
    border-color: var(--success-color-btn);
  }
  &[btn-style="disabled"] {
    background-color: dimgray;
    color: lightcyan;
    border-color: transparent;
    cursor: not-allowed;
  }
`;

export default function ProductCard(props) {
  const loading = props.loading;

  props = props.product;
  const id = loading ? 0 : props.id;
  const img = loading ? "" : props.images[1];
  const title = loading ? "" : props.title;
  const price = loading ? "" : props.price;
  const rating = loading ? "" : props.rating;

  const addBtnTypes = ["solid", "outline", "disabled"];

  let addBtnStyle = id % 2 == 0 ? addBtnTypes[0] : addBtnTypes[1];
  if (id == 7) {
    addBtnStyle = "disabled";
  }

  return (
    <Card>
      <CardImg>
        <img src={`${loading ? loadingImg : img}`} alt="" width="240px" />
      </CardImg>
      <Tags>
        <Span className="tag-novo">{loading ? "---" : "NOVO"}</Span>
        <Span className="tag-promo">{loading ? "---" : "PROMOÇÃO"}</Span>
      </Tags>
      <CardDesc>
        <div className="card-title ">{loading ? "---" : title}</div>
        <div className="card-price">{loading ? "---" : "R$" + price}</div>
        <div className="rating">
          {loading
            ? "--"
            : Array.from({ length: rating }, (_, i) => (
                <StartFill key={i}></StartFill>
              ))}
          {loading
            ? "--"
            : Array.from({ length: 5 - rating }, (_, i) => (
                <StarEmpty key={i}></StarEmpty>
              ))}
        </div>
        <CardButtons>
          <AddBtn btn-style={loading ? "disabled" : addBtnStyle}>
            {loading ? "carregando" : "adicionar"}
          </AddBtn>
        </CardButtons>
      </CardDesc>
    </Card>
  );
}
