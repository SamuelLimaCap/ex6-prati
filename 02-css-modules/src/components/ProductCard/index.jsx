import StartFill from "../StartFill";
import StarEmpty from "../StarEmpty.jsx";
import styles from "./produtcard.module.css";
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
    <div className={styles["card"]}>
      <div className={styles["card-img"]}>
        <img src={`${loading ? loadingImg : img}`} alt="" width="240px" />
      </div>
      <div className={styles["tags"]}>
        <span className={styles["tag-novo"]}>{loading ? "---" : "NOVO"}</span>
        <span className={styles["tag-promo"]}>
          {loading ? "---" : "PROMOÇÃO"}
        </span>
      </div>
      <div className={styles["card-desc"]}>
        <div className={styles["card-title"]}>{loading ? "---" : title}</div>
        <div className={styles["card-price"]}>
          {loading ? "---" : "R$" + price}
        </div>
        <div className={styles["rating"]}>
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
        <div className={styles["card-buttons"]}>
          <button
            type="btn"
            className={styles["add-btn"]}
            btn-style={loading ? "disabled" : addBtnStyle}
          >
            {loading ? "carregando" : "adicionar"}
          </button>
        </div>
      </div>
    </div>
  );
}
