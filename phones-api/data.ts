export type Phone = {
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  production: string;
  storage: string;
  ram: string;
  images: string[];
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12r-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12r-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12r-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12r-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-13r-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-13r-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-13r-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-13r-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-open-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-open-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-open-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-open-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n30-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n30-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n30-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n30-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11r-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11r-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11r-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11r-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-3-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-3-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-3-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-3-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-ce-3-lite-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-ce-3-lite-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-ce-3-lite-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-ce-3-lite-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-10-pro-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-10-pro-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-10-pro-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-10-pro-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-pro-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-pro-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-pro-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-pro-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8t-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8t-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8t-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8t-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-2t-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-2t-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-2t-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-2t-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n100-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n100-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n100-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-n100-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-x-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-x-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-x-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-x-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-7t-pro-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-7t-pro-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-7t-pro-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-7t-pro-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-7-pro-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-7-pro-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-7-pro-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-7-pro-4.jpg",
    ],
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
    images: [
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-6t-1.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-6t-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-6t-3.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-6t-4.jpg",
    ],
  },

  //   Samsung phones

  {
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Flagship phone with Snapdragon 8 Gen 2, 6.8-inch Dynamic AMOLED, 120Hz, 200MP+12MP+10MP+10MP cameras, 5000mAh battery, 45W charging.",
    price: 1199,
    brand: "Samsung",
    category: "Flagship",
    production: "February 2023",
    storage: "256GB / 512GB / 1TB",
    ram: "12GB",
  },
  {
    name: "Samsung Galaxy S23+",
    description:
      "Snapdragon 8 Gen 2, 6.6-inch Dynamic AMOLED, 120Hz, 50MP+12MP+10MP cameras, 4700mAh battery, 45W charging.",
    price: 999,
    brand: "Samsung",
    category: "Flagship",
    production: "February 2023",
    storage: "256GB / 512GB",
    ram: "8GB",
  },
  {
    name: "Samsung Galaxy S23",
    description:
      "Snapdragon 8 Gen 2, 6.1-inch Dynamic AMOLED, 120Hz, 50MP+12MP+10MP cameras, 3900mAh battery, 25W charging.",
    price: 799,
    brand: "Samsung",
    category: "Flagship",
    production: "February 2023",
    storage: "128GB / 256GB",
    ram: "8GB",
  },
  {
    name: "Samsung Galaxy Z Fold 5",
    description:
      "Foldable phone with Snapdragon 8 Gen 2, 7.6-inch Dynamic AMOLED 2X, 120Hz, 50MP+12MP+10MP cameras, 4400mAh battery, 25W charging.",
    price: 1799,
    brand: "Samsung",
    category: "Foldable",
    production: "July 2023",
    storage: "256GB / 512GB / 1TB",
    ram: "12GB",
  },
  {
    name: "Samsung Galaxy Z Flip 5",
    description:
      "Compact foldable with Snapdragon 8 Gen 2, 6.7-inch Dynamic AMOLED, 120Hz, 12MP+12MP cameras, 3700mAh battery, 25W charging.",
    price: 999,
    brand: "Samsung",
    category: "Foldable",
    production: "July 2023",
    storage: "256GB / 512GB",
    ram: "8GB",
  },
  {
    name: "Samsung Galaxy A54 5G",
    description:
      "Mid-range with Exynos 1380, 6.4-inch Super AMOLED, 120Hz, 50MP+12MP+5MP cameras, 5000mAh battery, 25W charging.",
    price: 449,
    brand: "Samsung",
    category: "Mid-range",
    production: "March 2023",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Samsung Galaxy A34 5G",
    description:
      "Mid-range with MediaTek Dimensity 1080, 6.6-inch Super AMOLED, 120Hz, 48MP+8MP+5MP cameras, 5000mAh battery, 25W charging.",
    price: 349,
    brand: "Samsung",
    category: "Mid-range",
    production: "March 2023",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Samsung Galaxy S22 Ultra",
    description:
      "Snapdragon 8 Gen 1, 6.8-inch Dynamic AMOLED, 120Hz, 108MP+12MP+10MP+10MP cameras, 5000mAh battery, 45W charging.",
    price: 1099,
    brand: "Samsung",
    category: "Flagship",
    production: "February 2022",
    storage: "128GB / 256GB / 512GB",
    ram: "12GB",
  },
  {
    name: "Samsung Galaxy S22+",
    description:
      "Snapdragon 8 Gen 1, 6.6-inch Dynamic AMOLED, 120Hz, 50MP+10MP+12MP cameras, 4500mAh battery, 25W charging.",
    price: 999,
    brand: "Samsung",
    category: "Flagship",
    production: "February 2022",
    storage: "128GB / 256GB",
    ram: "8GB",
  },
  {
    name: "Samsung Galaxy S22",
    description:
      "Snapdragon 8 Gen 1, 6.1-inch Dynamic AMOLED, 120Hz, 50MP+10MP+12MP cameras, 3700mAh battery, 25W charging.",
    price: 799,
    brand: "Samsung",
    category: "Flagship",
    production: "February 2022",
    storage: "128GB / 256GB",
    ram: "8GB",
  },
  {
    name: "Samsung Galaxy Note 20 Ultra",
    description:
      "Snapdragon 865+, 6.9-inch Dynamic AMOLED, 120Hz, 108MP+12MP+12MP cameras, 4500mAh battery, 25W charging.",
    price: 1299,
    brand: "Samsung",
    category: "Flagship",
    production: "August 2020",
    storage: "128GB / 256GB / 512GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Samsung Galaxy Note 20",
    description:
      "Snapdragon 865+, 6.7-inch Dynamic AMOLED, 60Hz, 108MP+12MP+64MP cameras, 4300mAh battery, 25W charging.",
    price: 999,
    brand: "Samsung",
    category: "Flagship",
    production: "August 2020",
    storage: "128GB / 256GB",
    ram: "8GB",
  },
  {
    name: "Samsung Galaxy A73 5G",
    description:
      "Mid-range with Snapdragon 778G, 6.7-inch Super AMOLED, 120Hz, 108MP+12MP+5MP+5MP cameras, 5000mAh battery, 25W charging.",
    price: 499,
    brand: "Samsung",
    category: "Mid-range",
    production: "March 2022",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Samsung Galaxy A72",
    description:
      "Mid-range with Snapdragon 720G, 6.7-inch Super AMOLED, 90Hz, 64MP+12MP+8MP+5MP cameras, 5000mAh battery, 25W charging.",
    price: 449,
    brand: "Samsung",
    category: "Mid-range",
    production: "March 2021",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Samsung Galaxy A52s 5G",
    description:
      "Mid-range with Snapdragon 778G, 6.5-inch Super AMOLED, 120Hz, 64MP+12MP+5MP+5MP cameras, 4500mAh battery, 25W charging.",
    price: 429,
    brand: "Samsung",
    category: "Mid-range",
    production: "August 2021",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Samsung Galaxy M54 5G",
    description:
      "Mid-range with Exynos 1380, 6.7-inch Super AMOLED, 120Hz, 108MP+8MP+2MP cameras, 6000mAh battery, 25W charging.",
    price: 399,
    brand: "Samsung",
    category: "Mid-range",
    production: "March 2023",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Samsung Galaxy M33 5G",
    description:
      "Mid-range with Exynos 1280, 6.6-inch PLS LCD, 120Hz, 50MP+5MP+2MP+2MP cameras, 6000mAh battery, 25W charging.",
    price: 299,
    brand: "Samsung",
    category: "Mid-range",
    production: "March 2022",
    storage: "128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Samsung Galaxy A32 5G",
    description:
      "Budget phone with MediaTek Dimensity 720, 6.5-inch PLS LCD, 90Hz, 48MP+8MP+5MP+2MP cameras, 5000mAh battery, 15W charging.",
    price: 279,
    brand: "Samsung",
    category: "Budget",
    production: "January 2021",
    storage: "64GB / 128GB",
    ram: "4GB / 6GB",
  },
  {
    name: "Samsung Galaxy A12",
    description:
      "Budget phone with MediaTek Helio P35, 6.5-inch PLS LCD, 60Hz, 48MP+5MP+2MP+2MP cameras, 5000mAh battery, 15W charging.",
    price: 199,
    brand: "Samsung",
    category: "Budget",
    production: "November 2020",
    storage: "64GB / 128GB",
    ram: "4GB / 6GB",
  },

  //   apple phones

  {
    name: "iPhone 15 Pro Max",
    description:
      "Flagship phone with A17 Pro chip, 6.7-inch Super Retina XDR OLED, 120Hz, 48MP+12MP+12MP cameras, 4422mAh battery, 20W charging.",
    price: 1599,
    brand: "Apple",
    category: "Flagship",
    production: "September 2023",
    storage: "256GB / 512GB / 1TB",
    ram: "8GB",
  },
  {
    name: "iPhone 15 Pro",
    description:
      "Flagship phone with A17 Pro chip, 6.1-inch Super Retina XDR OLED, 120Hz, 48MP+12MP+12MP cameras, 3200mAh battery, 20W charging.",
    price: 1299,
    brand: "Apple",
    category: "Flagship",
    production: "September 2023",
    storage: "256GB / 512GB / 1TB",
    ram: "8GB",
  },
  {
    name: "iPhone 15 Plus",
    description:
      "A16 Bionic chip, 6.7-inch Super Retina XDR OLED, 60Hz, 48MP+12MP+12MP cameras, 4383mAh battery, 20W charging.",
    price: 899,
    brand: "Apple",
    category: "Flagship",
    production: "September 2023",
    storage: "128GB / 256GB / 512GB",
    ram: "6GB",
  },
  {
    name: "iPhone 15",
    description:
      "A16 Bionic chip, 6.1-inch Super Retina XDR OLED, 60Hz, 48MP+12MP+12MP cameras, 3274mAh battery, 20W charging.",
    price: 799,
    brand: "Apple",
    category: "Flagship",
    production: "September 2023",
    storage: "128GB / 256GB / 512GB",
    ram: "6GB",
  },
  {
    name: "iPhone 14 Pro Max",
    description:
      "A16 Bionic chip, 6.7-inch Super Retina XDR OLED, 120Hz, 48MP+12MP+12MP cameras, 4323mAh battery, 20W charging.",
    price: 1099,
    brand: "Apple",
    category: "Flagship",
    production: "September 2022",
    storage: "128GB / 256GB / 512GB / 1TB",
    ram: "6GB",
  },
  {
    name: "iPhone 14 Pro",
    description:
      "A16 Bionic chip, 6.1-inch Super Retina XDR OLED, 120Hz, 48MP+12MP+12MP cameras, 3200mAh battery, 20W charging.",
    price: 999,
    brand: "Apple",
    category: "Flagship",
    production: "September 2022",
    storage: "128GB / 256GB / 512GB / 1TB",
    ram: "6GB",
  },
  {
    name: "iPhone 14 Plus",
    description:
      "A15 Bionic chip, 6.7-inch Super Retina XDR OLED, 60Hz, 12MP+12MP cameras, 4325mAh battery, 20W charging.",
    price: 899,
    brand: "Apple",
    category: "Flagship",
    production: "September 2022",
    storage: "128GB / 256GB / 512GB",
    ram: "6GB",
  },
  {
    name: "iPhone 14",
    description:
      "A15 Bionic chip, 6.1-inch Super Retina XDR OLED, 60Hz, 12MP+12MP cameras, 3279mAh battery, 20W charging.",
    price: 799,
    brand: "Apple",
    category: "Flagship",
    production: "September 2022",
    storage: "128GB / 256GB / 512GB",
    ram: "6GB",
  },
  {
    name: "iPhone 13 Pro Max",
    description:
      "A15 Bionic chip, 6.7-inch Super Retina XDR OLED, 120Hz, 12MP+12MP+12MP cameras, 4352mAh battery, 20W charging.",
    price: 1099,
    brand: "Apple",
    category: "Flagship",
    production: "September 2021",
    storage: "128GB / 256GB / 512GB / 1TB",
    ram: "6GB",
  },
  {
    name: "iPhone 13 Pro",
    description:
      "A15 Bionic chip, 6.1-inch Super Retina XDR OLED, 120Hz, 12MP+12MP+12MP cameras, 3095mAh battery, 20W charging.",
    price: 999,
    brand: "Apple",
    category: "Flagship",
    production: "September 2021",
    storage: "128GB / 256GB / 512GB / 1TB",
    ram: "6GB",
  },
  {
    name: "iPhone 13",
    description:
      "A15 Bionic chip, 6.1-inch Super Retina XDR OLED, 60Hz, 12MP+12MP cameras, 3240mAh battery, 20W charging.",
    price: 799,
    brand: "Apple",
    category: "Flagship",
    production: "September 2021",
    storage: "128GB / 256GB / 512GB",
    ram: "4GB",
  },
  {
    name: "iPhone 13 Mini",
    description:
      "A15 Bionic chip, 5.4-inch Super Retina XDR OLED, 60Hz, 12MP+12MP cameras, 2438mAh battery, 20W charging.",
    price: 699,
    brand: "Apple",
    category: "Flagship",
    production: "September 2021",
    storage: "128GB / 256GB / 512GB",
    ram: "4GB",
  },
  {
    name: "iPhone SE 3 (2022)",
    description:
      "A15 Bionic chip, 4.7-inch Retina HD display, 60Hz, 12MP camera, 2018mAh battery, 20W charging.",
    price: 429,
    brand: "Apple",
    category: "Budget",
    production: "March 2022",
    storage: "64GB / 128GB / 256GB",
    ram: "4GB",
  },
  {
    name: "iPhone 12 Pro Max",
    description:
      "A14 Bionic chip, 6.7-inch Super Retina XDR OLED, 60Hz, 12MP+12MP+12MP cameras, 3687mAh battery, 20W charging.",
    price: 1099,
    brand: "Apple",
    category: "Flagship",
    production: "October 2020",
    storage: "128GB / 256GB / 512GB",
    ram: "6GB",
  },
  {
    name: "iPhone 12 Pro",
    description:
      "A14 Bionic chip, 6.1-inch Super Retina XDR OLED, 60Hz, 12MP+12MP+12MP cameras, 2815mAh battery, 20W charging.",
    price: 999,
    brand: "Apple",
    category: "Flagship",
    production: "October 2020",
    storage: "128GB / 256GB / 512GB",
    ram: "6GB",
  },
  {
    name: "iPhone 12",
    description:
      "A14 Bionic chip, 6.1-inch Super Retina XDR OLED, 60Hz, 12MP+12MP cameras, 2815mAh battery, 20W charging.",
    price: 799,
    brand: "Apple",
    category: "Flagship",
    production: "October 2020",
    storage: "64GB / 128GB / 256GB",
    ram: "4GB",
  },
  {
    name: "iPhone 12 Mini",
    description:
      "A14 Bionic chip, 5.4-inch Super Retina XDR OLED, 60Hz, 12MP+12MP cameras, 2227mAh battery, 20W charging.",
    price: 699,
    brand: "Apple",
    category: "Flagship",
    production: "October 2020",
    storage: "64GB / 128GB / 256GB",
    ram: "4GB",
  },
  {
    name: "iPhone 11 Pro Max",
    description:
      "A13 Bionic chip, 6.5-inch Super Retina XDR OLED, 60Hz, 12MP+12MP+12MP cameras, 3969mAh battery, 18W charging.",
    price: 1099,
    brand: "Apple",
    category: "Flagship",
    production: "September 2019",
    storage: "64GB / 256GB / 512GB",
    ram: "4GB",
  },
  {
    name: "iPhone 11 Pro",
    description:
      "A13 Bionic chip, 5.8-inch Super Retina XDR OLED, 60Hz, 12MP+12MP+12MP cameras, 3046mAh battery, 18W charging.",
    price: 999,
    brand: "Apple",
    category: "Flagship",
    production: "September 2019",
    storage: "64GB / 256GB / 512GB",
    ram: "4GB",
  },

  //   Honor Phones

  {
    name: "Honor Magic5 Pro",
    description:
      "Flagship with Snapdragon 8 Gen 2, 6.81-inch OLED, 120Hz, 50MP+50MP+50MP cameras, 5100mAh battery, 66W charging.",
    price: 1099,
    brand: "Honor",
    category: "Flagship",
    production: "February 2023",
    storage: "256GB / 512GB",
    ram: "12GB",
  },
  {
    name: "Honor Magic5",
    description:
      "Snapdragon 8 Gen 2, 6.73-inch OLED, 120Hz, 54MP+50MP+50MP cameras, 4800mAh battery, 66W charging.",
    price: 999,
    brand: "Honor",
    category: "Flagship",
    production: "February 2023",
    storage: "256GB / 512GB",
    ram: "12GB",
  },
  {
    name: "Honor 90 5G",
    description:
      "Snapdragon 7 Gen 1, 6.7-inch OLED, 120Hz, 200MP+12MP+2MP cameras, 5000mAh battery, 66W charging.",
    price: 549,
    brand: "Honor",
    category: "Mid-range",
    production: "May 2023",
    storage: "256GB / 512GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Honor 70 5G",
    description:
      "Snapdragon 778G, 6.67-inch OLED, 120Hz, 54MP+50MP+2MP cameras, 4800mAh battery, 66W charging.",
    price: 499,
    brand: "Honor",
    category: "Mid-range",
    production: "May 2022",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Honor X9a 5G",
    description:
      "Snapdragon 695, 6.67-inch AMOLED, 120Hz, 48MP+2MP+2MP cameras, 5100mAh battery, 40W charging.",
    price: 299,
    brand: "Honor",
    category: "Mid-range",
    production: "January 2023",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Honor Magic4 Pro",
    description:
      "Snapdragon 8 Gen 1, 6.81-inch OLED, 120Hz, 50MP+64MP+50MP cameras, 4600mAh battery, 100W charging.",
    price: 1099,
    brand: "Honor",
    category: "Flagship",
    production: "March 2022",
    storage: "256GB / 512GB",
    ram: "12GB",
  },
  {
    name: "Honor Magic4",
    description:
      "Snapdragon 8 Gen 1, 6.81-inch OLED, 120Hz, 50MP+50MP+8MP cameras, 4600mAh battery, 66W charging.",
    price: 899,
    brand: "Honor",
    category: "Flagship",
    production: "March 2022",
    storage: "256GB / 512GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Honor 50",
    description:
      "Snapdragon 778G, 6.57-inch OLED, 120Hz, 108MP+8MP+2MP+2MP cameras, 4300mAh battery, 66W charging.",
    price: 499,
    brand: "Honor",
    category: "Mid-range",
    production: "June 2021",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Honor X8 5G",
    description:
      "Snapdragon 480 5G, 6.5-inch IPS LCD, 90Hz, 48MP+2MP+2MP cameras, 4000mAh battery, 22.5W charging.",
    price: 249,
    brand: "Honor",
    category: "Budget",
    production: "March 2022",
    storage: "128GB",
    ram: "6GB",
  },
  {
    name: "Honor X7 5G",
    description:
      "Snapdragon 695, 6.74-inch IPS LCD, 90Hz, 48MP+5MP+2MP cameras, 5000mAh battery, 22.5W charging.",
    price: 229,
    brand: "Honor",
    category: "Budget",
    production: "April 2022",
    storage: "128GB",
    ram: "4GB / 6GB",
  },
  {
    name: "Honor Magic5 Lite",
    description:
      "Snapdragon 695, 6.67-inch OLED, 120Hz, 64MP+5MP+2MP cameras, 5100mAh battery, 40W charging.",
    price: 299,
    brand: "Honor",
    category: "Mid-range",
    production: "February 2023",
    storage: "128GB",
    ram: "6GB",
  },
  {
    name: "Honor 10X Lite",
    description:
      "Kirin 710A, 6.67-inch IPS LCD, 60Hz, 48MP+8MP+2MP cameras, 5000mAh battery, 22.5W charging.",
    price: 199,
    brand: "Honor",
    category: "Budget",
    production: "November 2020",
    storage: "128GB",
    ram: "4GB",
  },
  {
    name: "Honor View 20",
    description:
      "Kirin 980, 6.4-inch IPS LCD, 60Hz, 48MP+3D camera, 4000mAh battery, 40W charging.",
    price: 499,
    brand: "Honor",
    category: "Flagship",
    production: "January 2019",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Honor 9X Pro",
    description:
      "Kirin 810, 6.59-inch IPS LCD, 60Hz, 48MP+2MP cameras, 4000mAh battery, 10W charging.",
    price: 399,
    brand: "Honor",
    category: "Mid-range",
    production: "January 2020",
    storage: "128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Honor 8X",
    description:
      "Kirin 710, 6.5-inch IPS LCD, 60Hz, 20MP+2MP cameras, 3750mAh battery, 10W charging.",
    price: 249,
    brand: "Honor",
    category: "Budget",
    production: "September 2018",
    storage: "64GB / 128GB",
    ram: "4GB / 6GB",
  },
  {
    name: "Honor 20 Pro",
    description:
      "Kirin 980, 6.26-inch IPS LCD, 60Hz, 48MP+16MP+2MP+2MP cameras, 4000mAh battery, 22.5W charging.",
    price: 399,
    brand: "Honor",
    category: "Flagship",
    production: "June 2019",
    storage: "128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Honor 8",
    description:
      "Kirin 950, 5.2-inch IPS LCD, 60Hz, 12MP+8MP cameras, 3000mAh battery, 9V/2A charging.",
    price: 299,
    brand: "Honor",
    category: "Mid-range",
    production: "May 2016",
    storage: "32GB / 64GB",
    ram: "3GB / 4GB",
  },
  {
    name: "Honor Play 4 Pro",
    description:
      "Kirin 990, 6.57-inch OLED, 60Hz, 48MP+8MP cameras, 4200mAh battery, 40W charging.",
    price: 549,
    brand: "Honor",
    category: "Mid-range",
    production: "July 2020",
    storage: "128GB",
    ram: "8GB",
  },
  {
    name: "Honor 7X",
    description:
      "Kirin 659, 5.93-inch IPS LCD, 60Hz, 16MP+2MP cameras, 3340mAh battery, 5V/2A charging.",
    price: 199,
    brand: "Honor",
    category: "Budget",
    production: "October 2017",
    storage: "32GB / 64GB",
    ram: "3GB / 4GB",
  },

  //   realme phones

  {
    name: "Realme GT 2 Pro",
    description:
      "Snapdragon 8 Gen 1, 6.7-inch AMOLED, 120Hz, 50MP+50MP+3MP cameras, 5000mAh battery, 65W charging.",
    price: 899,
    brand: "Realme",
    category: "Flagship",
    production: "January 2022",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Realme GT 2",
    description:
      "Snapdragon 870, 6.62-inch AMOLED, 120Hz, 50MP+8MP+2MP cameras, 5000mAh battery, 65W charging.",
    price: 499,
    brand: "Realme",
    category: "Flagship",
    production: "January 2022",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Realme 9 Pro+",
    description:
      "MediaTek Dimensity 920, 6.4-inch AMOLED, 90Hz, 50MP+8MP+2MP cameras, 4500mAh battery, 60W charging.",
    price: 319,
    brand: "Realme",
    category: "Mid-range",
    production: "February 2022",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Realme 9 Pro",
    description:
      "Snapdragon 695, 6.6-inch IPS LCD, 120Hz, 64MP+8MP+2MP cameras, 5000mAh battery, 33W charging.",
    price: 249,
    brand: "Realme",
    category: "Mid-range",
    production: "February 2022",
    storage: "128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Realme GT Master Edition",
    description:
      "Snapdragon 778G, 6.43-inch AMOLED, 120Hz, 64MP+8MP+2MP cameras, 4300mAh battery, 65W charging.",
    price: 399,
    brand: "Realme",
    category: "Mid-range",
    production: "July 2021",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Realme X7 Max 5G",
    description:
      "MediaTek Dimensity 1200, 6.43-inch Super AMOLED, 120Hz, 64MP+8MP+2MP cameras, 4500mAh battery, 50W charging.",
    price: 349,
    brand: "Realme",
    category: "Mid-range",
    production: "May 2021",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Realme Narzo 50 Pro 5G",
    description:
      "MediaTek Dimensity 920, 6.4-inch AMOLED, 90Hz, 48MP+8MP+2MP cameras, 5000mAh battery, 33W charging.",
    price: 249,
    brand: "Realme",
    category: "Mid-range",
    production: "May 2022",
    storage: "128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Realme 8 Pro",
    description:
      "Snapdragon 720G, 6.4-inch Super AMOLED, 60Hz, 108MP+8MP+2MP+2MP cameras, 4500mAh battery, 50W charging.",
    price: 279,
    brand: "Realme",
    category: "Mid-range",
    production: "March 2021",
    storage: "128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Realme 8 5G",
    description:
      "MediaTek Dimensity 700, 6.5-inch IPS LCD, 90Hz, 48MP+2MP+2MP cameras, 5000mAh battery, 18W charging.",
    price: 199,
    brand: "Realme",
    category: "Budget",
    production: "April 2021",
    storage: "128GB",
    ram: "4GB / 6GB",
  },
  {
    name: "Realme X50 Pro 5G",
    description:
      "Snapdragon 865, 6.44-inch Super AMOLED, 90Hz, 64MP+12MP+8MP+2MP cameras, 4200mAh battery, 65W charging.",
    price: 649,
    brand: "Realme",
    category: "Flagship",
    production: "February 2020",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Realme Narzo 30 Pro 5G",
    description:
      "MediaTek Dimensity 800U, 6.5-inch IPS LCD, 120Hz, 48MP+8MP+2MP cameras, 5000mAh battery, 30W charging.",
    price: 219,
    brand: "Realme",
    category: "Budget",
    production: "February 2021",
    storage: "64GB / 128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Realme C25Y",
    description:
      "Unisoc T610, 6.5-inch IPS LCD, 60Hz, 50MP+2MP+2MP cameras, 5000mAh battery, 18W charging.",
    price: 159,
    brand: "Realme",
    category: "Budget",
    production: "September 2021",
    storage: "64GB / 128GB",
    ram: "4GB",
  },
  {
    name: "Realme Narzo 30A",
    description:
      "MediaTek Helio G85, 6.5-inch IPS LCD, 60Hz, 13MP+2MP cameras, 6000mAh battery, 18W charging.",
    price: 139,
    brand: "Realme",
    category: "Budget",
    production: "February 2021",
    storage: "32GB / 64GB",
    ram: "3GB / 4GB",
  },
  {
    name: "Realme C12",
    description:
      "MediaTek Helio G35, 6.5-inch IPS LCD, 60Hz, 13MP+2MP+2MP cameras, 6000mAh battery, 10W charging.",
    price: 139,
    brand: "Realme",
    category: "Budget",
    production: "August 2020",
    storage: "32GB / 64GB",
    ram: "3GB / 4GB",
  },
  {
    name: "Realme C15",
    description:
      "MediaTek Helio G35, 6.5-inch IPS LCD, 60Hz, 13MP+8MP+2MP+2MP cameras, 6000mAh battery, 18W charging.",
    price: 149,
    brand: "Realme",
    category: "Budget",
    production: "August 2020",
    storage: "32GB / 64GB",
    ram: "3GB / 4GB",
  },
  {
    name: "Realme X2 Pro",
    description:
      "Snapdragon 855+, 6.5-inch Super AMOLED, 90Hz, 64MP+13MP+8MP+2MP cameras, 4000mAh battery, 50W charging.",
    price: 499,
    brand: "Realme",
    category: "Flagship",
    production: "October 2019",
    storage: "64GB / 128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Realme 6 Pro",
    description:
      "Snapdragon 720G, 6.6-inch IPS LCD, 90Hz, 64MP+8MP+12MP+2MP cameras, 4300mAh battery, 30W charging.",
    price: 249,
    brand: "Realme",
    category: "Mid-range",
    production: "March 2020",
    storage: "64GB / 128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Realme 6",
    description:
      "MediaTek Helio G90T, 6.5-inch IPS LCD, 90Hz, 64MP+8MP+2MP+2MP cameras, 4300mAh battery, 30W charging.",
    price: 199,
    brand: "Realme",
    category: "Mid-range",
    production: "March 2020",
    storage: "64GB / 128GB",
    ram: "4GB / 6GB",
  },
  {
    name: "Realme C3",
    description:
      "MediaTek Helio G70, 6.5-inch IPS LCD, 60Hz, 12MP+2MP+2MP cameras, 5000mAh battery, 10W charging.",
    price: 119,
    brand: "Realme",
    category: "Budget",
    production: "February 2020",
    storage: "32GB / 64GB",
    ram: "3GB / 4GB",
  },

  //   oppo phones

  {
    name: "Oppo Find X5 Pro",
    description:
      "Snapdragon 8 Gen 1, 6.7-inch AMOLED, 120Hz, 50MP+50MP+13MP cameras, 5000mAh battery, 80W charging.",
    price: 1199,
    brand: "Oppo",
    category: "Flagship",
    production: "February 2022",
    storage: "256GB",
    ram: "12GB",
  },
  {
    name: "Oppo Reno8 Pro 5G",
    description:
      "MediaTek Dimensity 8100-Max, 6.7-inch AMOLED, 120Hz, 50MP+8MP+2MP cameras, 4500mAh battery, 80W charging.",
    price: 599,
    brand: "Oppo",
    category: "Mid-range",
    production: "July 2022",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Oppo Find X3 Pro",
    description:
      "Snapdragon 888, 6.7-inch AMOLED, 120Hz, 50MP+50MP+13MP+3MP cameras, 4500mAh battery, 65W charging.",
    price: 999,
    brand: "Oppo",
    category: "Flagship",
    production: "March 2021",
    storage: "256GB",
    ram: "12GB",
  },
  {
    name: "Oppo Reno7 Pro 5G",
    description:
      "MediaTek Dimensity 1200, 6.55-inch AMOLED, 90Hz, 50MP+8MP+2MP cameras, 4500mAh battery, 65W charging.",
    price: 499,
    brand: "Oppo",
    category: "Mid-range",
    production: "December 2021",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Oppo A95 5G",
    description:
      "Snapdragon 480, 6.43-inch AMOLED, 60Hz, 48MP+8MP+2MP cameras, 5000mAh battery, 33W charging.",
    price: 299,
    brand: "Oppo",
    category: "Mid-range",
    production: "November 2021",
    storage: "128GB",
    ram: "8GB",
  },
  {
    name: "Oppo F19 Pro+ 5G",
    description:
      "MediaTek Dimensity 800U, 6.4-inch AMOLED, 60Hz, 48MP+8MP+2MP+2MP cameras, 4310mAh battery, 50W charging.",
    price: 399,
    brand: "Oppo",
    category: "Mid-range",
    production: "March 2021",
    storage: "128GB",
    ram: "8GB",
  },
  {
    name: "Oppo A74 5G",
    description:
      "Snapdragon 480, 6.5-inch IPS LCD, 90Hz, 48MP+8MP+2MP cameras, 5000mAh battery, 18W charging.",
    price: 249,
    brand: "Oppo",
    category: "Budget",
    production: "April 2021",
    storage: "128GB",
    ram: "6GB",
  },
  {
    name: "Oppo Reno6 5G",
    description:
      "MediaTek Dimensity 900, 6.43-inch AMOLED, 90Hz, 64MP+8MP+2MP cameras, 4300mAh battery, 65W charging.",
    price: 399,
    brand: "Oppo",
    category: "Mid-range",
    production: "June 2021",
    storage: "128GB",
    ram: "8GB",
  },

  //   vivo phones

  {
    name: "Vivo X90 Pro",
    description:
      "Snapdragon 8 Gen 2, 6.78-inch AMOLED, 120Hz, 50MP+50MP+12MP cameras, 4870mAh battery, 120W charging.",
    price: 999,
    brand: "Vivo",
    category: "Flagship",
    production: "December 2022",
    storage: "256GB / 512GB",
    ram: "12GB",
  },
  {
    name: "Vivo V23 Pro 5G",
    description:
      "MediaTek Dimensity 1200, 6.56-inch AMOLED, 90Hz, 108MP+8MP+2MP cameras, 4300mAh battery, 44W charging.",
    price: 499,
    brand: "Vivo",
    category: "Mid-range",
    production: "January 2022",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Vivo V21 5G",
    description:
      "MediaTek Dimensity 800U, 6.44-inch AMOLED, 90Hz, 64MP+8MP+2MP cameras, 4000mAh battery, 33W charging.",
    price: 349,
    brand: "Vivo",
    category: "Mid-range",
    production: "May 2021",
    storage: "128GB / 256GB",
    ram: "8GB",
  },
  {
    name: "Vivo X60 Pro",
    description:
      "Snapdragon 870, 6.56-inch AMOLED, 120Hz, 48MP+13MP+13MP cameras, 4200mAh battery, 33W charging.",
    price: 749,
    brand: "Vivo",
    category: "Flagship",
    production: "March 2021",
    storage: "128GB / 256GB",
    ram: "12GB",
  },
  {
    name: "Vivo V20 Pro",
    description:
      "Snapdragon 765G, 6.44-inch AMOLED, 90Hz, 64MP+8MP+2MP cameras, 4000mAh battery, 33W charging.",
    price: 499,
    brand: "Vivo",
    category: "Mid-range",
    production: "September 2020",
    storage: "128GB",
    ram: "8GB",
  },
  {
    name: "Vivo Y73",
    description:
      "MediaTek Helio G95, 6.44-inch AMOLED, 60Hz, 64MP+2MP+2MP cameras, 4000mAh battery, 33W charging.",
    price: 249,
    brand: "Vivo",
    category: "Mid-range",
    production: "June 2021",
    storage: "128GB",
    ram: "8GB",
  },
  {
    name: "Vivo Y53s",
    description:
      "MediaTek Helio G80, 6.58-inch IPS LCD, 60Hz, 64MP+2MP+2MP cameras, 5000mAh battery, 18W charging.",
    price: 199,
    brand: "Vivo",
    category: "Budget",
    production: "June 2021",
    storage: "128GB",
    ram: "8GB",
  },
  {
    name: "Vivo T1 Pro 5G",
    description:
      "Snapdragon 695, 6.44-inch AMOLED, 90Hz, 64MP+8MP+2MP cameras, 5000mAh battery, 44W charging.",
    price: 249,
    brand: "Vivo",
    category: "Mid-range",
    production: "May 2022",
    storage: "128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Vivo X70 Pro",
    description:
      "MediaTek Dimensity 1200, 6.56-inch AMOLED, 120Hz, 50MP+12MP+12MP cameras, 4450mAh battery, 44W charging.",
    price: 849,
    brand: "Vivo",
    category: "Flagship",
    production: "September 2021",
    storage: "256GB",
    ram: "12GB",
  },
  {
    name: "Vivo Y21",
    description:
      "MediaTek Helio P35, 6.51-inch IPS LCD, 60Hz, 13MP+2MP cameras, 5000mAh battery, 18W charging.",
    price: 159,
    brand: "Vivo",
    category: "Budget",
    production: "August 2021",
    storage: "64GB / 128GB",
    ram: "4GB",
  },

  //   xiamoi phones

  {
    name: "Xiaomi 13 Pro",
    description:
      "Snapdragon 8 Gen 2, 6.73-inch AMOLED, 120Hz, 50MP+50MP+50MP cameras, 4820mAh battery, 120W charging.",
    price: 1199,
    brand: "Xiaomi",
    category: "Flagship",
    production: "December 2022",
    storage: "256GB / 512GB",
    ram: "12GB",
  },
  {
    name: "Xiaomi 12 Pro",
    description:
      "Snapdragon 8 Gen 1, 6.73-inch AMOLED, 120Hz, 50MP+50MP+50MP cameras, 4600mAh battery, 120W charging.",
    price: 999,
    brand: "Xiaomi",
    category: "Flagship",
    production: "March 2022",
    storage: "256GB",
    ram: "12GB",
  },
  {
    name: "Xiaomi Redmi Note 12 Pro+",
    description:
      "MediaTek Dimensity 1080, 6.67-inch AMOLED, 120Hz, 200MP+8MP+2MP cameras, 5000mAh battery, 120W charging.",
    price: 299,
    brand: "Xiaomi",
    category: "Mid-range",
    production: "October 2022",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Xiaomi Mi 11 Ultra",
    description:
      "Snapdragon 888, 6.81-inch AMOLED, 120Hz, 50MP+48MP+48MP cameras, 5000mAh battery, 67W charging.",
    price: 899,
    brand: "Xiaomi",
    category: "Flagship",
    production: "March 2021",
    storage: "256GB",
    ram: "12GB",
  },
  {
    name: "Xiaomi Redmi Note 11 Pro 5G",
    description:
      "Snapdragon 695, 6.67-inch AMOLED, 120Hz, 108MP+8MP+2MP cameras, 5000mAh battery, 67W charging.",
    price: 249,
    brand: "Xiaomi",
    category: "Mid-range",
    production: "January 2022",
    storage: "64GB / 128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Xiaomi Mi 11X Pro",
    description:
      "Snapdragon 888, 6.67-inch AMOLED, 120Hz, 108MP+8MP+5MP cameras, 4520mAh battery, 33W charging.",
    price: 499,
    brand: "Xiaomi",
    category: "Mid-range",
    production: "April 2021",
    storage: "128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Xiaomi Redmi K40 Pro",
    description:
      "Snapdragon 888, 6.67-inch AMOLED, 120Hz, 64MP+8MP+5MP cameras, 4520mAh battery, 33W charging.",
    price: 499,
    brand: "Xiaomi",
    category: "Flagship",
    production: "February 2021",
    storage: "128GB / 256GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Xiaomi Redmi Note 10 Pro",
    description:
      "Snapdragon 732G, 6.67-inch AMOLED, 120Hz, 108MP+8MP+5MP+2MP cameras, 5020mAh battery, 33W charging.",
    price: 249,
    brand: "Xiaomi",
    category: "Mid-range",
    production: "March 2021",
    storage: "64GB / 128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Xiaomi 11T Pro",
    description:
      "Snapdragon 888, 6.67-inch AMOLED, 120Hz, 108MP+8MP+5MP cameras, 5000mAh battery, 120W charging.",
    price: 649,
    brand: "Xiaomi",
    category: "Flagship",
    production: "September 2021",
    storage: "128GB / 256GB",
    ram: "8GB / 12GB",
  },
  {
    name: "Xiaomi Mi 10T Pro",
    description:
      "Snapdragon 865, 6.67-inch IPS LCD, 144Hz, 108MP+13MP+5MP cameras, 5000mAh battery, 33W charging.",
    price: 599,
    brand: "Xiaomi",
    category: "Flagship",
    production: "October 2020",
    storage: "128GB / 256GB",
    ram: "8GB",
  },
  {
    name: "Xiaomi Mi 10 5G",
    description:
      "Snapdragon 865, 6.67-inch AMOLED, 90Hz, 108MP+13MP+2MP+2MP cameras, 4780mAh battery, 30W charging.",
    price: 699,
    brand: "Xiaomi",
    category: "Flagship",
    production: "February 2020",
    storage: "128GB",
    ram: "8GB",
  },
  {
    name: "Xiaomi Redmi Note 9 Pro",
    description:
      "Snapdragon 720G, 6.67-inch IPS LCD, 60Hz, 48MP+8MP+5MP+2MP cameras, 5020mAh battery, 30W charging.",
    price: 199,
    brand: "Xiaomi",
    category: "Mid-range",
    production: "March 2020",
    storage: "64GB / 128GB",
    ram: "4GB / 6GB",
  },
  {
    name: "Xiaomi Redmi Note 8 Pro",
    description:
      "Helio G90T, 6.53-inch IPS LCD, 60Hz, 64MP+8MP+2MP+2MP cameras, 4500mAh battery, 18W charging.",
    price: 189,
    brand: "Xiaomi",
    category: "Mid-range",
    production: "August 2019",
    storage: "64GB / 128GB",
    ram: "6GB / 8GB",
  },
  {
    name: "Xiaomi Mi A3",
    description:
      "Snapdragon 665, 6.088-inch AMOLED, 60Hz, 48MP+8MP+2MP cameras, 4030mAh battery, 18W charging.",
    price: 249,
    brand: "Xiaomi",
    category: "Mid-range",
    production: "July 2019",
    storage: "64GB / 128GB",
    ram: "4GB / 6GB",
  },

  //   tecno phones

  {
    name: "Tecno Phantom X2 Pro",
    description:
      "Dimensity 9000, 6.8-inch AMOLED, 120Hz, 50MP+50MP+13MP cameras, 5160mAh battery, 45W charging.",
    price: 799,
    brand: "Tecno",
    category: "Flagship",
    production: "December 2022",
    storage: "256GB",
    ram: "12GB",
  },
  {
    name: "Tecno Spark 9 Pro",
    description:
      "MediaTek Helio G85, 6.6-inch IPS LCD, 90Hz, 48MP+2MP+AI cameras, 5000mAh battery, 18W charging.",
    price: 169,
    brand: "Tecno",
    category: "Budget",
    production: "June 2022",
    storage: "64GB / 128GB",
    ram: "4GB / 6GB",
  },
  {
    name: "Tecno Camon 18 Pro",
    description:
      "MediaTek Helio G95, 6.8-inch AMOLED, 90Hz, 64MP+8MP+2MP cameras, 4750mAh battery, 33W charging.",
    price: 299,
    brand: "Tecno",
    category: "Mid-range",
    production: "October 2021",
    storage: "128GB",
    ram: "8GB",
  },
  {
    name: "Tecno Pova 4 Pro",
    description:
      "MediaTek Helio G99, 6.66-inch AMOLED, 120Hz, 50MP+2MP cameras, 4500mAh battery, 45W charging.",
    price: 199,
    brand: "Tecno",
    category: "Budget",
    production: "August 2022",
    storage: "128GB",
    ram: "8GB",
  },
  {
    name: "Tecno Phantom X",
    description:
      "MediaTek Helio G95, 6.7-inch AMOLED, 90Hz, 50MP+13MP+8MP cameras, 4700mAh battery, 33W charging.",
    price: 499,
    brand: "Tecno",
    category: "Budget",
    production: "July 2021",
    storage: "128GB",
    ram: "8GB",
  },
];
