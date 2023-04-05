const Item = ({ shoe }) => {
  const { img, title, subtitle, description } = shoe;
  return (
    <div className="single-item">
      <img src={img} alt={title} />
      <h3> {title} </h3>
      <h4> {subtitle} </h4>
      <small> {description} </small>
    </div>
  );
};
export default Item;
