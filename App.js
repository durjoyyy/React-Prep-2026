import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          style={{ height: "100px", width: "100px" }}
          src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "lightGray",
};

const resData = [
  {
    id: "res_101",
    name: "Spice Garden",
    cuisines: ["North Indian", "Chinese"],
    rating: 4.3,
    reviewsCount: 1287,
    costForTwo: 600,
    deliveryTime: 32,
    isOpen: true,
    location: "Indiranagar, Bangalore",
    distanceKm: 2.1,
    offers: ["20% OFF up to ₹100"],
    veg: false,
    imageUrl: "https://source.unsplash.com/400x300/?indian-food",
    lastMileTravel: 1.8,
    serviceable: true,
    hasOnlinePayment: true,
  },
  {
    id: "res_102",
    name: "Green Bowl",
    cuisines: ["Healthy Food", "Salads"],
    rating: 4.6,
    reviewsCount: 842,
    costForTwo: 500,
    deliveryTime: 25,
    isOpen: true,
    location: "Koramangala, Bangalore",
    distanceKm: 3.4,
    offers: ["Free Delivery"],
    veg: true,
    imageUrl: "https://source.unsplash.com/400x300/?salad",
    lastMileTravel: 2.9,
    serviceable: true,
    hasOnlinePayment: true,
  },
  {
    id: "res_103",
    name: "Burger Hub",
    cuisines: ["Fast Food", "Burgers"],
    rating: 4.1,
    reviewsCount: 2104,
    costForTwo: 400,
    deliveryTime: 28,
    isOpen: false,
    location: "BTM Layout, Bangalore",
    distanceKm: 4.2,
    offers: ["Buy 1 Get 1"],
    veg: false,
    imageUrl: "https://source.unsplash.com/400x300/?burger",
    lastMileTravel: 3.7,
    serviceable: true,
    hasOnlinePayment: false,
  },
  {
    id: "res_104",
    name: "Dosa Corner",
    cuisines: ["South Indian"],
    rating: 4.5,
    reviewsCount: 980,
    costForTwo: 250,
    deliveryTime: 20,
    isOpen: true,
    location: "Jayanagar, Bangalore",
    distanceKm: 1.5,
    offers: ["10% OFF"],
    veg: true,
    imageUrl: "https://source.unsplash.com/400x300/?dosa",
    lastMileTravel: 1.2,
    serviceable: true,
    hasOnlinePayment: true,
  },
  {
    id: "res_105",
    name: "Tandoori Nights",
    cuisines: ["North Indian", "Mughlai"],
    rating: 4.2,
    reviewsCount: 1560,
    costForTwo: 800,
    deliveryTime: 35,
    isOpen: true,
    location: "HSR Layout, Bangalore",
    distanceKm: 5.1,
    offers: ["Flat ₹150 OFF"],
    veg: false,
    imageUrl: "https://source.unsplash.com/400x300/?tandoori",
    lastMileTravel: 4.6,
    serviceable: true,
    hasOnlinePayment: true,
  },
];
const ResCard = ({name,costForTwo,rating,deliveryTime}) => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/e0vvulfbahjxjz6k4uwi"
      />
      <h4>{name} </h4>
      <h4>{costForTwo}</h4>
      <h4>{rating}</h4>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resData.map((res)=>{
            return <ResCard {...res} key={res.id}/>
          })
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
