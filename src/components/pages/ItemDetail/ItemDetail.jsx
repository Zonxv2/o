const ItemDetail = ({ items }) => {
  return (
    <div>
      <h2>{items.title}</h2> <h3>{items.price}</h3>{" "}
      <img src={items.imageUrl} alt="" />
    </div>
  );
};

export default ItemDetail;
