const ResCategory = ({
  data,
  showItems,
  setShowItems,
}) => {
  return (
    <div className="category">
      <div
        className="category-header"
        onClick={setShowItems}
      >
        <h2 className="category-title">
          {data.title} ({data.itemCards?.length})
        </h2>

        <span className="category-arrow">
          {showItems ? "▲" : "▼"}
        </span>
      </div>

      {showItems && (
        <div className="category-items">
          {data.itemCards?.map((item) => (
            <div
              key={item.card.info.id}
              className="menu-item"
            >
              <div className="menu-item-info">
                <p className="menu-item-name">
                  {item.card.info.name}
                </p>
              </div>

              <div className="menu-item-price">
                ₹
                {(item.card.info.price ||
                  item.card.info.defaultPrice) / 100}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResCategory;