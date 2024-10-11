import { Card } from "../../common/Card";

export const ItemListContainer = (greeting) => {
  return (
    <div style={{ display: "grid", placeItems: "center", color: "gray" }}>
      <h2>{greeting.Bienvenida}</h2>
    </div>
  );
};
