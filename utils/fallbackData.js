// Fallback restaurant data used when the Swiggy API is unreachable / fails.
// Shape matches the `restaurants` array returned by the live API:
//   [{ info: { ... } }, ...]
// Images are served from Swiggy's public media CDN (still reachable even when
// the listing API/CORS proxy is down).

const FALLBACK_RES_DATA = [
  {
    info: {
      id: "762582",
      name: "Blue Tokai Coffee Roasters",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=660&q=80",
      locality: "L. B. S Marg",
      areaName: "Kurla",
      costForTwo: "60000",
      cuisines: ["Cafe", "Coffee", "Beverages"],
      avgRating: 4.6,
      sla: { deliveryTime: 28 },
    },
  },
  {
    info: {
      id: "100001",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=660&q=80",
      locality: "Sevoke Road",
      areaName: "Siliguri",
      costForTwo: "40000",
      cuisines: ["Pizzas", "Italian", "Fast Food"],
      avgRating: 4.3,
      sla: { deliveryTime: 32 },
    },
  },
  {
    info: {
      id: "100002",
      name: "Burger King",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=660&q=80",
      locality: "Hill Cart Road",
      areaName: "Siliguri",
      costForTwo: "35000",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.2,
      sla: { deliveryTime: 30 },
    },
  },
  {
    info: {
      id: "100003",
      name: "KFC",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=660&q=80",
      locality: "City Centre",
      areaName: "Matigara",
      costForTwo: "45000",
      cuisines: ["Fried Chicken", "Burgers", "Fast Food"],
      avgRating: 4.4,
      sla: { deliveryTime: 35 },
    },
  },
  {
    info: {
      id: "100004",
      name: "Pizza Hut",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=660&q=80",
      locality: "Sevoke Road",
      areaName: "Siliguri",
      costForTwo: "50000",
      cuisines: ["Pizzas", "Italian", "Pastas"],
      avgRating: 4.1,
      sla: { deliveryTime: 38 },
    },
  },
  {
    info: {
      id: "100005",
      name: "Wow! Momo",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=660&q=80",
      locality: "Bidhan Market",
      areaName: "Siliguri",
      costForTwo: "30000",
      cuisines: ["Momos", "Chinese", "Tibetan"],
      avgRating: 4.5,
      sla: { deliveryTime: 25 },
    },
  },
  {
    info: {
      id: "100006",
      name: "Haldiram's",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=660&q=80",
      locality: "Hakimpara",
      areaName: "Siliguri",
      costForTwo: "35000",
      cuisines: ["North Indian", "Sweets", "Snacks"],
      avgRating: 4.0,
      sla: { deliveryTime: 40 },
    },
  },
  {
    info: {
      id: "100007",
      name: "Subway",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=660&q=80",
      locality: "Pradhan Nagar",
      areaName: "Siliguri",
      costForTwo: "40000",
      cuisines: ["Healthy Food", "Salads", "Sandwiches"],
      avgRating: 4.2,
      sla: { deliveryTime: 27 },
    },
  },
  {
    info: {
      id: "100008",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=660&q=80",
      locality: "Sevoke Road",
      areaName: "Siliguri",
      costForTwo: "25000",
      cuisines: ["Waffles", "Desserts", "Ice Cream"],
      avgRating: 4.7,
      sla: { deliveryTime: 22 },
    },
  },
  {
    info: {
      id: "100009",
      name: "Biryani Blues",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=660&q=80",
      locality: "Khalpara",
      areaName: "Siliguri",
      costForTwo: "50000",
      cuisines: ["Biryani", "Mughlai", "North Indian"],
      avgRating: 4.4,
      sla: { deliveryTime: 36 },
    },
  },
  {
    info: {
      id: "100010",
      name: "Cafe Coffee Day",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=660&q=80",
      locality: "Hill Cart Road",
      areaName: "Siliguri",
      costForTwo: "35000",
      cuisines: ["Cafe", "Coffee", "Beverages"],
      avgRating: 4.1,
      sla: { deliveryTime: 29 },
    },
  },
  {
    info: {
      id: "100011",
      name: "Barbeque Nation",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=660&q=80",
      locality: "Sevoke Road",
      areaName: "Siliguri",
      costForTwo: "120000",
      cuisines: ["Barbecue", "North Indian", "Grill"],
      avgRating: 4.5,
      sla: { deliveryTime: 45 },
    },
  },
  {
    info: {
      id: "100012",
      name: "Baskin Robbins",
      cloudinaryImageId:
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=660&q=80",
      locality: "City Centre",
      areaName: "Matigara",
      costForTwo: "30000",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      sla: { deliveryTime: 24 },
    },
  },
];

export default FALLBACK_RES_DATA;
