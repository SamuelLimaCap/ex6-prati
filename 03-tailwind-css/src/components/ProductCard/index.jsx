import StartFill from "../StartFill";
import StarEmpty from "../StarEmpty.jsx";
import "./produtcard.css";
import loadingImg from "../../assets/gray-square.png";

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
    <div className="card transition-transform duration transition-all duration p-0.5 p-5 rounded-[20px] hover:bg-[color:var(--card-focus-color)] hover:-translate-y-2.5">
      <div className="card-img flex items-center justify-center p-1">
        <img src={`${loading ? loadingImg : img}`} alt="" width="240px" />
      </div>
      <div className="tags text-center">
        <span className="tag-novo border border-[color:var(--tag-color)] text-[color:var(--tag-color)] rounded mx-1 my-0 p-0.5 border-solid">
          {loading ? "---" : "NOVO"}
        </span>
        <span className="tag-promo border border-[color:var(--tag-color)] text-[color:var(--tag-color)] rounded mx-1 my-0 p-0.5 border-solid">
          {loading ? "---" : "PROMOÇÃO"}
        </span>
      </div>
      <div className="card-desc pl-5">
        <div className="card-title ">{loading ? "---" : title}</div>
        <div className="card-price">{loading ? "---" : "R$" + price}</div>
        <div className="rating flex">
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
        <div className="card-buttons">
          <button
            type="btn"
            className="add-btn w-full cursor-pointer text-[0.9em] px-0 py-1 rounded-md"
            btn-style={loading ? "disabled" : addBtnStyle}
          >
            {loading ? "carregando" : "adicionar"}
          </button>
        </div>
      </div>
    </div>
  );
}
