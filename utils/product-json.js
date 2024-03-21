import Jersey from "@/assets/images/products/jersey.jpg";
import Cap from "@/assets/images/products/cap.jpg";
import Pants from "@/assets/images/products/pant.jpg";
import Bat from "@/assets/images/products/bat.jpg";
import Gloves from "@/assets/images/products/gloves.jpeg";
import Shoes from "@/assets/images/products/shoes.png";
import KitBag from "@/assets/images/products/Cricket-Kit-Bag.jpeg";
import ThighGuard from "@/assets/images/products/Cricket-Thigh-Guard.jpg";
import Helmet from "@/assets/images/products/Cricket-Helmet.jpg";
import PracticeNet from "@/assets/images/products/Cricket-Practice-Net.jpg";

// Product JSON data containing information about different products
const products = [
  {
    id: 1,
    name: "Cricket Jersey",
    imageURL: Jersey,
    price: 29.99,
    shortDescription:
      "High-quality cricket jersey for comfort and performance.",
    description:
      "Made from breathable fabric, our cricket jersey ensures comfort and performance on the field. Its moisture-wicking properties keep you dry and focused during intense matches.",
    availableSizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Cricket Cap",
    imageURL: Cap,
    price: 14.99,
    shortDescription: "Stylish cricket cap for sun protection and ventilation.",
    description:
      "Our cricket cap features a sleek design with a wide brim to shield your eyes from the sun. The mesh panels provide excellent ventilation, keeping you cool during long matches.",
    availableSizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Cricket Pants",
    imageURL: Pants,
    price: 34.99,
    shortDescription: "Durable cricket pants with reinforced knees.",
    description:
      "Crafted from high-quality materials, our cricket pants offer durability and flexibility on the pitch. The reinforced knees provide added protection during slides and dives.",
    availableSizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Cricket Bat",
    imageURL: Bat,
    price: 79.99,
    shortDescription: "Premium cricket bat crafted from English willow.",
    description:
      "Our premium cricket bat is handcrafted from the finest English willow, ensuring optimal power and control. Its balanced design and thick edges make it perfect for aggressive strokes.",
    availableSizes: ["Small", "Medium", "Large"],
  },
  {
    id: 5,
    name: "Cricket Gloves",
    imageURL: Gloves,
    price: 24.99,
    shortDescription: "Protective cricket gloves with padded palms.",
    description:
      "Protect your hands during intense matches with our cricket gloves. The padded palms offer enhanced grip and impact resistance, allowing you to bat with confidence.",
    availableSizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Cricket Shoes",
    imageURL: Shoes,
    price: 54.99,
    shortDescription: "Lightweight cricket shoes with spiked soles.",
    description:
      "Our lightweight cricket shoes provide excellent traction on the pitch, thanks to their spiked soles. The cushioned insoles ensure comfort and support during long matches.",
    availableSizes: ["40", "40.5", "41", "41.5"],
  },
  {
    id: 7,
    name: "Cricket Kit Bag",
    imageURL: KitBag,
    price: 49.99,
    shortDescription: "Spacious cricket kit bag with multiple compartments.",
    description:
      "Carry all your cricket gear in our spacious kit bag. With multiple compartments and pockets, it offers ample storage space for bats, pads, gloves, and more.",
  },
  {
    id: 8,
    name: "Cricket Thigh Guard",
    imageURL: ThighGuard,
    price: 19.99,
    shortDescription: "Comfortable cricket thigh guard for protection.",
    description:
      "Stay protected during batting with our cricket thigh guard. Its comfortable design ensures freedom of movement, while the padding provides impact resistance.",
    availableSizes: ["S", "M", "L", "XL"],
  },
  {
    id: 9,
    name: "Cricket Helmet",
    imageURL: Helmet,
    price: 39.99,
    shortDescription: "Sturdy cricket helmet for maximum protection.",
    description:
      "Ensure your safety on the field with our sturdy cricket helmet. Featuring an adjustable strap and ventilation holes, it offers a secure fit and breathability.",
    availableSizes: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    name: "Cricket Practice Net",
    imageURL: PracticeNet,
    price: 129.99,
    shortDescription: "Portable cricket practice net for skill development.",
    description:
      "Improve your batting and bowling skills with our portable practice net. Easy to set up and dismantle, it allows you to practice anywhere, anytime.",
    availableSizes: ["100", "200", "300"],
  },
];

export default products;
