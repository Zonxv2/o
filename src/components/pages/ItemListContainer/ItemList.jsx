import { Card } from "@mui/material";

const ItemList = ({ items }) => {
  console.log({ items });
  return (
    <div>
      <h2>Listado de Productos</h2>
      {items.map(({ id, tittle, price, stock }) => (
        <Card key={id} tittle={tittle} price={price} stock={stock} />
      ))}
    </div>
  );
};

export default ItemList;
