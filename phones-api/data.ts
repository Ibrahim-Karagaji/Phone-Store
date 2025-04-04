export type Phone = {
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  production: string;
  storage: string;
  ram: string;
};

export const phones: Phone[] = [
  // oneolus Phones
  {
    name: "OnePlus 13",
    description:
      "Flagship phone with Snapdragon 8 Elite, 6.82-inch AMOLED display, 50MP+50MP+50MP cameras, 6000mAh battery, 80W charging.",
    price: 899,
    brand: "OnePlus",
    category: "Flagship",
    production: "January 2025",
    storage: "128GB / 256GB",
    ram: "12GB / 16GB",
  },
  {
    name: "OnePlus 13R",
    description:
      "Affordable flagship variant with Snapdragon 8 Gen 3, 6.78-inch AMOLED, 50MP main camera, 6000mAh battery, 80W charging.",
    price: 600,
    brand: "OnePlus",
    category: "Flagship",
    production: "January 2025",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "OnePlus 12",
    description:
      "Snapdragon 8 Gen 2, 6.7-inch AMOLED, 120Hz, 50MP+48MP+48MP cameras, 5500mAh battery, 80W charging.",
    price: 700,
    brand: "OnePlus",
    category: "Flagship",
    production: "Late 2024",
    storage: "128GB / 256GB",
    ram: "12GB / 16GB",
  },
  {
    name: "OnePlus Open",
    description:
      "First foldable phone by OnePlus, 7.82-inch inner OLED, Snapdragon 8 Gen 2, 16GB RAM, triple-camera setup.",
    price: 1700,
    brand: "OnePlus",
    category: "Foldable",
    production: "October 2023",
    storage: "256GB / 512GB",
    ram: "16GB",
  },
  {
    name: "OnePlus Nord N30 5G",
    description:
      "Budget-friendly with Snapdragon 695, 6.72-inch AMOLED, 108MP camera, 5000mAh, 50W charging.",
    price: 300,
    brand: "OnePlus",
    category: "Mid-range",
    production: "April 2024",
    storage: "128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "OnePlus 11",
    description:
      "Snapdragon 8 Gen 2, 6.7-inch AMOLED, 120Hz, 50MP+48MP+32MP cameras, 5000mAh battery, 100W charging.",
    price: 749,
    brand: "OnePlus",
    category: "Flagship",
    production: "February 2023",
    storage: "128GB / 256GB",
    ram: "8GB / 16GB",
  },
  {
    name: "OnePlus 11R",
    description:
      "Mid-range with Snapdragon 8+ Gen 1, 6.74-inch AMOLED, 120Hz, 50MP main camera, 5000mAh battery.",
    price: 499,
    brand: "OnePlus",
    category: "Mid-range",
    production: "February 2023",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "OnePlus Nord 3",
    description:
      "MediaTek Dimensity 9000, 6.74-inch AMOLED, 120Hz, 50MP camera, 5000mAh, 80W charging.",
    price: 499,
    brand: "OnePlus",
    category: "Mid-range",
    production: "July 2023",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "OnePlus Nord CE 3 Lite",
    description:
      "Budget option with Snapdragon 695, 6.72-inch 120Hz LCD, 108MP camera, 5000mAh battery.",
    price: 250,
    brand: "OnePlus",
    category: "Mid-range",
    production: "April 2024",
    storage: "128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "OnePlus 10 Pro",
    description:
      "Snapdragon 8 Gen 1, 6.7-inch AMOLED, 120Hz, 48MP+50MP+8MP cameras, 5000mAh, 65W charging.",
    price: 899,
    brand: "OnePlus",
    category: "Flagship",
    production: "March 2022",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "OnePlus 9 Pro",
    description:
      "Snapdragon 888, 6.7-inch AMOLED, 120Hz, 48MP+50MP+8MP cameras, 4500mAh battery, 65W charging.",
    price: 969,
    brand: "OnePlus",
    category: "Flagship",
    production: "March 2021",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "OnePlus 8T",
    description:
      "Snapdragon 865, 6.55-inch AMOLED, 120Hz, 48MP+16MP+5MP+2MP cameras, 4500mAh, 65W fast charging.",
    price: 749,
    brand: "OnePlus",
    category: "Flagship",
    production: "October 2020",
    storage: "128GB / 256GB",
    ram: "12GB",
  },
  {
    name: "OnePlus Nord 2T",
    description:
      "MediaTek Dimensity 1300, 6.43-inch AMOLED, 90Hz, 50MP camera, 4500mAh battery.",
    price: 399,
    brand: "OnePlus",
    category: "Mid-range",
    production: "May 2022",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "OnePlus 9",
    description:
      "Snapdragon 888, 6.55-inch AMOLED, 120Hz, 48MP+50MP+2MP cameras, 4500mAh battery, 65W charging.",
    price: 729,
    brand: "OnePlus",
    category: "Flagship",
    production: "March 2021",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "OnePlus Nord N100",
    description:
      "Entry-level with Snapdragon 460, 6.52-inch LCD, 60Hz, 13MP camera, 5000mAh battery, 18W charging.",
    price: 179,
    brand: "OnePlus",
    category: "Budget",
    production: "October 2020",
    storage: "64GB",
    ram: "4GB",
  },
  {
    name: "OnePlus 8",
    description:
      "Snapdragon 865, 6.55-inch Fluid AMOLED, 90Hz, 48MP+16MP+2MP cameras, 4300mAh, Warp Charge 30T.",
    price: 699,
    brand: "OnePlus",
    category: "Flagship",
    production: "April 2020",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "OnePlus X",
    description:
      "Compact design with Snapdragon 801, 5.0-inch AMOLED, 1080p display, 13MP camera, 2525mAh battery.",
    price: 249,
    brand: "OnePlus",
    category: "Mid-range",
    production: "October 2015",
    storage: "16GB",
    ram: "3GB",
  },
  {
    name: "OnePlus 7T Pro",
    description:
      "Snapdragon 855+, 6.67-inch Fluid AMOLED, 90Hz, 48MP+8MP+16MP cameras, 4085mAh, 30W charging.",
    price: 699,
    brand: "OnePlus",
    category: "Flagship",
    production: "October 2019",
    storage: "256GB",
    ram: "8GB",
  },
  {
    name: "OnePlus 7 Pro",
    description:
      "Snapdragon 855, 6.67-inch Fluid AMOLED, 90Hz, 48MP+16MP+8MP cameras, 4000mAh, Warp Charge 30.",
    price: 749,
    brand: "OnePlus",
    category: "Flagship",
    production: "May 2019",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "OnePlus 6T",
    description:
      "Snapdragon 845, 6.41-inch AMOLED, 1080p display, 16MP+20MP cameras, 3700mAh, Fast Charge.",
    price: 549,
    brand: "OnePlus",
    category: "Flagship",
    production: "November 2018",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
];
