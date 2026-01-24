// --- 1. DATA (Simulates products.js) ---
export const initialProducts = [
  // Realistic Image URLs for Phone (Dark)
  {
    id: 101,
    name: "MackBook Air - M4 Black",
    price: 119990,
    image: "https://m.media-amazon.com/images/I/71CjP9jmqZL._SL1500_.jpg",
    description:
      "The ultimate smartphone experience with a 108MP camera and all-day battery life.",
    category: "Laptop",
  },
  // Realistic Image URLs for Laptop (Silver)
  {
    id: 102,
    name: "MackBook Air - M4 Golden",
    price: 119990,
    image: "https://m.media-amazon.com/images/I/71XIkqkx+KL._SL1500_.jpg",
    description:
      "Powerful and portable, featuring a 14-inch edge-to-edge display and latest CPU.",
    category: "Laptop",
  },
  // Realistic Image URLs for Tablet (with stylus)
  {
    id: 103,
    name: "iphone 17 pro max",
    price: 79990,
    image: "https://m.media-amazon.com/images/I/618vU2qKXQL._SL1500_.jpg",
    description:
      "Vibrant 10-inch display for media consumption and light productivity tasks.",
    category: "Phone",
  },
  // Realistic Image URLs for Camera (Mirrorless)
  {
    id: 401,
    name: "iphone 17 air Silver",
    price: 95490,
    image: "https://m.media-amazon.com/images/I/61SKi94cImL._SL1500_.jpg",
    description:
      "Capture stunning photos and 4K videos with professional-grade performance.",
    category: "Phone",
  },
  // Realistic Image URLs for Phone (Light/Older Model)
  {
    id: 501,
    name: "iphone 17 pro max Gold",
    price: 79990,
    image: "https://m.media-amazon.com/images/I/71JGCn1z1TL._SL1500_.jpg",
    description:
      "An affordable, feature-packed phone with a secure biometric sensor.",
    category: "Phone",
  },
  // Realistic Image URLs for Laptop (Chromebook)
  {
  id: 609,
  name: "HP Pavilion Plus, Intel Core i5-1335U-13th Gen Laptop, (16GB LPDDR5x,512GB SSD),IPS",
  price: 69990,
  image: "https://m.media-amazon.com/images/I/61s8J1vGi0L._SL1500_.jpg",
  description:
    "The ultimate smartphone experience with a 108MP camera and all-day battery life.",
  category: "Laptop",
},
  {
    id: 601,
    name: "iphone 17 air White",
    price: 95490,
    image: "https://m.media-amazon.com/images/I/61Ce-6B6x+L._SL1500_.jpg",
    description:
      "Lightweight and fast, perfect for students and cloud-based work.",
    category: "Phone",
  },
    {
    id: 609,
    name: "Sony Alpha ILCE-7RM3A Full-Frame 42.4MP Mirrorless",
    price: 120990,
    image: "https://m.media-amazon.com/images/I/71VnF6UiESL._SL1500_.jpg",
    description:
      "Lightweight and fast, perfect for students and cloud-based work.",
    category: "Camera",
  },
  {
    id: 602,
    name: "ipad M4 white",
    price: 54990,
    image: "https://m.media-amazon.com/images/I/719uQ7BLfrL._SX679_.jpg",
    description:
      "Lightweight and fast, perfect for students and cloud-based work.",
    category: "Tablet",
  },
  {
    id: 603,
    name: "ipad M4 gold",
    price: 54990,
    image: "https://m.media-amazon.com/images/I/719oEHipgqL._SL1500_.jpg",
    description:
      "Lightweight and fast, perfect for students and cloud-based work.",
    category: "Tablet",
  },
  {
    id: 604,
    name: "Lenovo Tab 9",
    price: 35990,
    image: "https://m.media-amazon.com/images/I/71PwporL-mL._SL1500_.jpg",
    description:
      "Lightweight and fast, perfect for students and cloud-based work.",
    category: "Tablet",
  },
   {
    id: 610,
    name: "Sony Alpha ILCE-7M3K Full-Frame 24.2MP Mirrorless Digital SLR Camera",
    price: 120990,
    image: "https://m.media-amazon.com/images/I/71j3bPnm+UL._SL1500_.jpg",
    description:
      "Lightweight and fast, perfect for students and cloud-based work.",
    category: "Camera",
  },
  {
    id: 605,
    name: "Apple ipad Go Lite",
    price: 35990,
    image:
      "https://m.media-amazon.com/images/I/61kV643xjIL._SL1500_.jpghttps://m.media-amazon.com/images/I/81LskAU5h1L._SX679_.jpg",
    description:
      "Lightweight and fast, perfect for students and cloud-based work.",
    category: "Tablet",
  },
  {
    id: 606,
    name: "Canon E0S - 200",
    price: 60990,
    image: "https://m.media-amazon.com/images/I/81LskAU5h1L._SX679_.jpg",
    description:
      "Lightweight and fast, perfect for students and cloud-based work.",
    category: "Camera",
  },
  {
    id: 607,
    name: "Nikon Mirroless",
    price: 90990,
    image: "https://m.media-amazon.com/images/I/51AbWisvJfL._SX679_.jpg",
    description:
      "Lightweight and fast, perfect for students and cloud-based work.",
    category: "Camera",
  },
    {
    id: 608,
    name: "HP Pavilion x360, 13th Gen Intel Core i5-1335U (16GB DDR4, 512GB SSD) Black",
    price: 69990,
    image: "https://m.media-amazon.com/images/I/618zAXbM4uL._SL1500_.jpg",
    description:
      "The ultimate smartphone experience with a 108MP camera and all-day battery life.",
    category: "Laptop",
  }, 
  {
    id: 611,
    name: "Samsung Galaxy S25 Ultra",
    price: 124990,
    image: "https://m.media-amazon.com/images/I/71P85R392uL._SL1500_.jpg",
    description: "Flagship Android phone with 200MP AI camera and S-Pen support.",
    category: "Phone",
  },
  
  {
    id: 612,
    name: "Google Pixel 9 Pro",
    price: 99990,
    image: "https://m.media-amazon.com/images/I/41-eyvGzycL.jpg",
    description: "Pure Android experience with industry-leading AI camera.",
    category: "Phone",
  },
  
  {
    id: 613,
    name: "OnePlus 13 Pro",
    price: 74990,
    image: "https://m.media-amazon.com/images/I/71N4hshhfNL._SX569_.jpg",
    description: "Fast performance with Hasselblad tuned camera system.",
    category: "Phone",
  },
  
  {
    id: 614,
    name: "Dell XPS 15 OLED",
    price: 189990,
    image: "https://m.media-amazon.com/images/I/611DLBKu8JL._SX679_.jpg",
    description: "Premium OLED laptop with Intel i7 performance.",
    category: "Laptop",
  },
  
  {
    id: 615,
    name: "ASUS ROG Zephyrus G16",
    price: 199990,
    image: "https://m.media-amazon.com/images/I/71ocHj2Sq6L._SX679_.jpg",
    description: "High-performance gaming laptop with RTX graphics.",
    category: "Laptop",
  },
  
  {
    id: 616,
    name: "MacBook Pro M4 14-inch",
    price: 199990,
    image: "https://m.media-amazon.com/images/I/615tKndaduL._SX679_.jpg",
    description: "Powerful Apple Silicon laptop for creators.",
    category: "Laptop",
  },
  
  {
    id: 617,
    name: "iPad Pro M4 Space Black",
    price: 99990,
    image: "https://m.media-amazon.com/images/I/81gC7frRJyL._SL1500_.jpg",
    description: "Ultra-thin iPad with M4 chip and Liquid Retina display.",
    category: "Tablet",
  },
  
  {
    id: 618,
    name: "Samsung Galaxy Tab S9 Ultra",
    price: 108990,
    image: "https://m.media-amazon.com/images/I/61l5a94VKkL._SX450_.jpg",
    description: "Large AMOLED tablet with S-Pen support.",
    category: "Tablet",
  },
  
  {
    id: 619,
    name: "Xiaomi Pad 7 Pro",
    price: 44990,
    image: "https://m.media-amazon.com/images/I/71yZPdov-SL._SY450_.jpg",
    description: "Affordable tablet with flagship-level performance.",
    category: "Tablet",
  },
  
  {
    id: 620,
    name: "Sony FX30 Cinema Line Camera",
    price: 179990,
    image: "https://m.media-amazon.com/images/I/71GnJmvKhZL._SX679_.jpg",
    description: "Professional cinema camera for filmmakers.",
    category: "Camera",
  },
  
  {
    id: 621,
    name: "Canon EOS R8 Mirrorless",
    price: 149990,
    image: "https://m.media-amazon.com/images/I/61bpFmbi99L._SX679_.jpg",
    description: "Full-frame mirrorless camera with 4K video.",
    category: "Camera",
  },
  
  {
    id: 622,
    name: "Nikon Z6 II",
    price: 159990,
    image: "https://m.media-amazon.com/images/I/31j1IKkNAFL.jpg",
    description: "Versatile camera for photo & video.",
    category: "Camera",
  },

];
