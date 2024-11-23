import Counter from "../../common/Counter/Counter";

const ItemDetail = ({ items, agregarAlCarrito, totalInCart }) => {
  return (
    <div>
      <h2>{items.title}</h2>{" "}
      <h3>
        {"$"}
        {items.price}
      </h3>{" "}
      <h3>{items.description}</h3>
      <img src={items.imageUrl} alt="" width={"300px"} />
      <Counter
        stock={items.stock}
        agregarAlCarrito={agregarAlCarrito}
        totalInCart={totalInCart}
      />
    </div>
  );
};

export default ItemDetail;
