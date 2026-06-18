import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
 
const ResCategory = ({
  data,
  showItems,
  setShowItems,
}) => {


  const dispatch=useDispatch();
  const handleAddItem=(item)=>{
    dispatch(addItem(item.card.info));
  }

  
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
              data-testid="foodItems"
              key={item.card.info.id}
              className="menu-item"
            >
              <div className="menu-item-info">
                <p className="menu-item-name">
                  {item.card.info.name}
                </p>
              </div>
              <button
              onClick={()=>handleAddItem(item)}
               className="border border-black p-2 bg-gray-500
               text-white cursor-pointer shadow-lg mx-16">Add + </button>

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