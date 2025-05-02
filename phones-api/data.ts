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
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-13-1.png",
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-13-3.png",
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-13-4.jpeg",
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
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-13R-1.png",
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-13R-2.jpg",
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-13-4.jpeg",
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
      "public/prodcuts-imgs/onePlus-products-imgs/onePlus-12-1.png",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-2.jpg",
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-12-3.jpg",
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
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.noon.com%2Fsaudi-en%2Fopen-dual-sim-emerald-dusk-16gb-ram-512gb-5g-international-version%2FN70016433V%2Fp%2F&psig=AOvVaw16x2esUQYGW9I8-ddHsyGg&ust=1746233479595000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjPo-TIg40DFQAAAAAdAAAAABAE",
      "https://www.google.com/imgres?q=oneplus%20open&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71pKVhll1IL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.sa%2F-%2Fen%2FOnePlus-Dual-SIM-Factory-Unlocked-Smartphone%2Fdp%2FB0CKTPK4FG&docid=0SWliQAdN75CDM&tbnid=IlUXNpc7NDeXbM&vet=12ahUKEwiO05jcyIONAxU0xQIHHd3DEpgQM3oECB4QAA..i&w=1500&h=1500&hcb=2&ved=2ahUKEwiO05jcyIONAxU0xQIHHd3DEpgQM3oECB4QAA",
      "https://www.google.com/imgres?q=oneplus%20open&imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F850%2F1000%2Fxif0q%2Fmobile%2Fg%2Fa%2Fe%2Fopen-cph2551-oneplus-original-imagv2r4xvkjqcrj.jpeg%3Fq%3D90%26crop%3Dfalse&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Foneplus-open-voyager-black-512-gb%2Fp%2Fitm8d91ded712561%3Fpid%3DMOBGV2R5WXGTGGVK%26lid%3DLSTMOBGV2R5WXGTGGVKZQKNMM%26marketplace%3DFLIPKART%26cmpid%3Dcontent_mobile_8965229628_gmc&docid=r1vNps-jOM6UkM&tbnid=cC6bgEhxaMfKGM&vet=12ahUKEwiO05jcyIONAxU0xQIHHd3DEpgQM3oECHQQAA..i&w=506&h=1000&hcb=2&ved=2ahUKEwiO05jcyIONAxU0xQIHHd3DEpgQM3oECHQQAA",
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
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-Nord-N30-5G-2.jpg",
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-Nord-N30-5G-3.jpg",
      "https://www.google.com/imgres?q=OnePlus%20Nord%20N30%205G&imgurl=https%3A%2F%2Fwiregcc.com%2Fstorage%2Fproducts%2F2024-05-03%2F050320241731326634f5440f476.png&imgrefurl=https%3A%2F%2Fwww.wiregcc.com%2Fproducts%2Fphone-oneplus-nord-n30-se-128-gb-5g.65cb3ff125588&docid=btz_sDOwYtLBDM&tbnid=PhMcT_SxCZnedM&vet=12ahUKEwiJrtXvyYONAxUv3AIHHSKvKWoQM3oECH0QAA..i&w=500&h=500&hcb=2&ved=2ahUKEwiJrtXvyYONAxUv3AIHHSKvKWoQM3oECH0QAA",
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
      "public/prodcuts-imgs/onePlus-products-imgs/onePlus-11R-1.png",
      "data:image/jpeg;base64,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",
      "public/prodcuts-imgs/onePlus-products-imgs/onePlus-11R-1.png",
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
      "public/prodcuts-imgs/onePlus-products-imgs/onePlus-nord-3-1.png",
      "public/prodcuts-imgs/onePlus-products-imgs/onePlus-nord-3-3.jpg",
      "public/prodcuts-imgs/onePlus-products-imgs/onePlus-nord-3-4.png",
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
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-Nord-CE-3-Lite-1.png",
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
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-9-Pro-1.jpg",
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
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-8T-1.jpg",
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
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-Nord-2T-1.jpg",
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-Nord-2T-2.jpg",
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-Nord-2T-3.jpg",
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
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-Nord-N100-3.jpeg",
      "public/prodcuts-imgs/onePlus-products-imgs/OnePlus-Nord-N100-4.jpeg",
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
      "public/prodcuts-imgs/onePlus-products-imgs/oneplus-8-3.jpg",
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
      "public/prodcuts-imgs/onePlus-products-imgs/oneplus-x-1.jpg",
      "public/prodcuts-imgs/onePlus-products-imgs/oneplus-x-2.jpg",
      "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-x-3.jpg",
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
      "public/prodcuts-imgs/onePlus-products-imgs/oneplus-6t-1.jpg",
      "public/prodcuts-imgs/onePlus-products-imgs/oneplus-6t-2.jpg",
      "public/prodcuts-imgs/onePlus-products-imgs/oneplus-6t-3.jpg",
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galax- S23-Ultra-1.jpg",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S23-Ultra-2.png",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S23-Ultra-3.webp",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S23+-1.png",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S23+-2.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S23+-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S23-1.png",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S23-2.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S23-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-Z-Fold-5-1.jpg",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-Z-Fold-5-2.png",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-Z-Fold-5-3.png",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-Z-Flip-5-1.png",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-Z-Flip-5-2.png",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-Z-Flip-5-3.avif",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A54-5G-1.avif",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A54-5G-2.png",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A54-5G-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A34-5G-1.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A34-5G-2.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A34-5G-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S22-Ultra-1.jpg",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S22-Ultra-2.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S22-Ultra-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S22+-1.jpg",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S22+-3.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S22+-4.webp",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S22-1.jpg",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S22-2.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-S22-3.webp",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-Note-20-Ultra-2.jpg",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-Note-20-Ultra-3.png",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-Note-20-Ultra-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A73-5G-1.avif",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A73-5G-2.png",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A73-5G-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A72-1.jpg",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A72-2.jpg",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A72-3.png",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A52s-5G-1.jpg",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A52s-5G-2.png",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A52s-5G-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-M54-5G-1.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-M54-5G-2.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-M54-5G-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-M33-5G-1.jpg",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-M33-5G-2.png",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-M33-5G-3.webp",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A32-5G-1.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A32-5G-2.jpg",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A32-5G-3.webp",
    ],
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
    images: [
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A12-1.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A12-2.webp",
      "public/prodcuts-imgs/Samsung-products-imgs/Samsung-Galaxy-A12-3.png",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-Pro-Max-2.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-Pro-Max-3.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-Pro-Max-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-Pro-1.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-Pro-2.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-Pro-3.png",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-Plus-1.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-Plus-2.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-Plus-3.jpeg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-1.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-Plus-4.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-15-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-Pro-Max-1.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-Pro-Max-2.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-Pro-Max-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-Pro-1.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-Pro-3.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-Pro-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-Plus-1.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-4.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-1.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-4.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-14-Plus-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-Pro-Max-1.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-Pro-Max-2.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-Pro-Max-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-Pro-1.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-Pro-3.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-Pro-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-1.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-3.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-4.png",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-Mini-1.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-Mini-2.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-13-Mini-4.png",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-SE-3-(2022)-1.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-SE-3-(2022)-2.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-SE-3-(2022)-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-Pro-Max-1.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-Pro-Max-2.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-Pro-Max-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-Pro-2.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-1.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-1.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-2.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-3.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-Mini-2.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-Mini-4.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-12-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-11-Pro-Max-2.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-11-Pro-Max-3.jpg",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-11-Pro-Max-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-11-Pro-Max-2.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-11-Pro-3.png",
      "public/prodcuts-imgs/apple-prodcuts-imgs/iPhone-11-Pro-Max-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic5-Pro-4.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic5-imgs-1.png",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic5-imgs-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic5-imgs-1.png",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic5-imgs-2.png",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic5-imgs-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-90-5G-1.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-90-5G-2.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-90-5G-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-70-5G-4.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-90-5G-3.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-90-5G-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-X9a-5G-4.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-X9a-5G-3.png",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-X8-5G-1.png",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic4-Pro-1.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic4-Pro-4.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic5-imgs-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic4-1.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic4-4.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic4-Pro-1.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-50-4.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-70-5G-4.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-50-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-7X-1.jpeg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-8-3.jpeg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-8-4.jpeg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-7X-1.jpeg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-7X-2.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-8-4.jpeg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic5-Lite-1.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic4-Pro-1.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Magic4-Pro-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-10X-Lite-1.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-10X-Lite-2.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-10X-Lite-4.jpeg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-View-20-1.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-View-20-2.png",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-View-20-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-9X-Pro-2.jpeg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-9X-Pro-3.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-9X-Pro-4.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-8-3.jpeg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-8-4.jpeg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-8-4.jpeg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-20-Pro-2.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-20-Pro-4.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-20-Pro-2.jpg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Play-4-Pro-1.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Play-4-Pro-4.jpg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-Play-4-Pro-3.jpeg",
    ],
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
    images: [
      "public/prodcuts-imgs/Honor-products-imgs/Honor-7X-1.jpeg",
      "public/prodcuts-imgs/Honor-products-imgs/Honor-7X-2.jpg",
      "      public/prodcuts-imgs/Honor-products-imgs/Honor-9X-Pro-2.jpeg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-gt-2-pro",
      "https://cdn.mos.cms.futurecdn.net/SJ5Z6L2hbhbL6yThNGBu8h-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/FSbndgs2YF3aTttCRqzrQX-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/68TkdsEjxoiijNQL8WSz9w-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-gt-2",
      "https://cdn.mos.cms.futurecdn.net/4MwMbjsGnaBfgXBm8y8bTA-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/8bFhzYc5toG2fV4sb7bAyj-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/p5rsB6rfgt8zBrKZXbzV9k-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-9-pro-plus",
      "https://cdn.mos.cms.futurecdn.net/fHKmLYgq9nFc5v7pnjp7Xc-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/Qw33LPV7KbWsNSXkTmV6Hf-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/BF8YrRmVrTGGp2NY2hZ2a9-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-9-pro",
      "https://cdn.mos.cms.futurecdn.net/jGTG5WL9Xx8fNjF8Fubm76-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/xJe4FcF5zo8qvUszA5xKv7-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/YyQwv66E65nQ3bgHmuGcqR-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-gt-master-edition",
      "https://cdn.mos.cms.futurecdn.net/USjRfM7mr6wbt9fsQ1t8Zf-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/9d3HgqeqcXcV2fb5ytjZYx-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/yYB84HtNjRG2f8Xhw7A4Sm-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-x7-max",
      "https://cdn.mos.cms.futurecdn.net/B3kPFrpfhaXxakmP2N2HMb-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/ywMKTyzA5z9S4rbM6d7Jpb-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/NeGG46b2Lf35UjmKrjqfu9-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-narzo-50-pro-5g",
      "https://cdn.mos.cms.futurecdn.net/Z7Rfkbj7NxZ9p4gLvdYj2R-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/dNH5FM6JVoP6ZT7WL5gUqZ-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/fP8r2Grtgsb8pEq4FyU7ZA-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-8-pro",
      "https://cdn.mos.cms.futurecdn.net/dN7h4rFgD3n6pqerh5xb9c-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/dN7h4rFgD3n6pqerh5xb9c-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/9C8i8zCgyU9tYw8pzmNm36-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-8-5g",
      "https://cdn.mos.cms.futurecdn.net/mh2vS3Q8ReT9gGpVpVeYfk-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/sdj4p5zTQhb95jKZj9gHFk-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/v9a7q8jp4z9q8AzHLu4Vdh-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-x50-pro-5g",
      "https://cdn.mos.cms.futurecdn.net/ghR3F6eRQxETc4TcbZTNRH-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/5wGtsHzx5ywj45jR44pKTn-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/Tz9FnxW9ApNnyD8MvQLdP8-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-narzo-30-pro-5g",
      "https://cdn.mos.cms.futurecdn.net/z8nGSKy5vuwK7kfdh7KmL5-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/v24Xk6HBJS8XuwtG9khVhb-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/v9Wa5wqN8K2YBuaF8MPMGK-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-c25y",
      "https://cdn.mos.cms.futurecdn.net/Zyjj9N2nx9a8L2V2t3pHAZ-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/dk9pxFdANjU6gXyk9f7A5C-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/w7dFy6Pt5fjhP8k9kxFJQ6-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-narzo-30a",
      "https://cdn.mos.cms.futurecdn.net/w5S8MQhZ2Gh7taBqa6Hh5B-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/AjTTtt5gTzW93tce98gZGd-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/fDkqS5h62M3Kx3zTh7oT6X-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-c12",
      "https://cdn.mos.cms.futurecdn.net/zDd6Pv6mHh4Y8CwDsdqE2H-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/d61ft4rcjFwN9w6hryFhn8-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/gFgL2Yua9J9QBdqTHgwr3w-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-c15",
      "https://cdn.mos.cms.futurecdn.net/Yb2G3TYp2wRf8MzX7W4H5M-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/Jgr6qf6bkhfS8NcA9jxNfR-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/gx4fB3T5o6Jw8WmuQePNFC-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-x2-pro",
      "https://cdn.mos.cms.futurecdn.net/2J6F7cB93b8Y9sv8REmkkk-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/Tjsb5ffX57grVvZG6fxVvd-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/PWuyug2wQYgXqV2YqqxxWA-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-6-pro",
      "https://cdn.mos.cms.futurecdn.net/QX5fi63mjw9cbQTY4CHvGv-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/nQPB6PRPuqEMy6aJ4iM5KA-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/x8fn4pZtd7pQdF3ev9pXy4-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-6",
      "https://cdn.mos.cms.futurecdn.net/JdHjAFhchwnTZjfdxz55w2-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/w8f6Gq6hzSPt9PyvVzDEb7-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/1pFpcLP6WTG6Ynxr3zHbYA-1200-80.jpg",
    ],
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
    images: [
      "https://www.realme.com/in/realme-c3",
      "https://cdn.mos.cms.futurecdn.net/V7QdKZ5f5tbA5MhJd7s66y-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/mF9t7W3ghuAdG6rPp9wqzG-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/LVZQXkQHeA39FMQz6h3iXk-1200-80.jpg",
    ],
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
    images: [
      "https://www.oppo.com/in/smartphones/series-find-x/find-x5-pro",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Oppo_Find_X5_Pro.jpg/500px-Oppo_Find_X5_Pro.jpg",
      "https://cdn.mos.cms.futurecdn.net/ahH7vrcbWo3bQskAsFeR7D-1200-80.jpg",
    ],
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
    images: [
      "https://www.oppo.com/in/smartphones/reno/reno8-pro-5g",
      "https://cdn.mos.cms.futurecdn.net/Xc9bftKw3hbFxkHmnMXJzC-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/k5SbYQzHuxzYgVxapQKknP-1200-80.jpg",
    ],
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
    images: [
      "https://www.oppo.com/in/smartphones/series-find-x/find-x3-pro",
      "https://cdn.mos.cms.futurecdn.net/k1Q7bYvA6WSYsm3bf4hzrK-1200-80.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Oppo_Find_X3_Pro.jpg/500px-Oppo_Find_X3_Pro.jpg",
    ],
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
    images: [
      "https://www.oppo.com/in/smartphones/reno/reno7-pro-5g",
      "https://cdn.mos.cms.futurecdn.net/9DZ74Puhy1uKgtaDoZX5Xb-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/h9bFzxdq6ZkvdvV5tsdp4p-1200-80.jpg",
    ],
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
    images: [
      "https://www.oppo.com/in/smartphones/a-series/a95-5g",
      "https://cdn.mos.cms.futurecdn.net/2YRmJf6Gxv2yqftgg2HJ4n-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/J9V6aZqU67N2YyL4g4w9hD-1200-80.jpg",
    ],
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
    images: [
      "https://www.oppo.com/in/smartphones/f-series/f19-pro-plus-5g",
      "https://cdn.mos.cms.futurecdn.net/Qwz6LZB32TT2qVdsChGpUA-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/TZtKPvwPb72AXznt6otrxP-1200-80.jpg",
    ],
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
    images: [
      "https://www.oppo.com/in/smartphones/a-series/a74-5g",
      "https://cdn.mos.cms.futurecdn.net/8RbQDPVpRfdU5grtQoxHRE-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/v5Wzt4jxxDohkfaeTspYtP-1200-80.jpg",
    ],
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
    images: [
      "https://www.oppo.com/in/smartphones/reno/reno6-5g",
      "https://cdn.mos.cms.futurecdn.net/g9rnUEdRU7XcPmbvEoK4Yq-1200-80.jpg",
      "https://cdn.mos.cms.futurecdn.net/pvS6DzqB7TxAKjf9R2wfzA-1200-80.jpg",
    ],
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
    images: [
      "https://www.vivo.com/vivo-x90-pro",
      "https://static.vivo.com/vivo-x90-pro-1.jpg",
      "https://static.vivo.com/vivo-x90-pro-2.jpg",
    ],
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
    images: [
      "https://www.vivo.com/vivo-v23-pro-5g",
      "https://static.vivo.com/vivo-v23-pro-5g-1.jpg",
      "https://static.vivo.com/vivo-v23-pro-5g-2.jpg",
    ],
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
    images: [
      "https://www.vivo.com/vivo-v21-5g",
      "https://static.vivo.com/vivo-v21-5g-1.jpg",
      "https://static.vivo.com/vivo-v21-5g-2.jpg",
    ],
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
    images: [
      "https://www.vivo.com/vivo-x60-pro",
      "https://static.vivo.com/vivo-x60-pro-1.jpg",
      "https://static.vivo.com/vivo-x60-pro-2.jpg",
    ],
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
    images: [
      "https://www.vivo.com/vivo-v20-pro",
      "https://static.vivo.com/vivo-v20-pro-1.jpg",
      "https://static.vivo.com/vivo-v20-pro-2.jpg",
    ],
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
    images: [
      "https://www.vivo.com/vivo-y73",
      "https://static.vivo.com/vivo-y73-1.jpg",
      "https://static.vivo.com/vivo-y73-2.jpg",
    ],
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
    images: [
      "https://www.vivo.com/vivo-y53s",
      "https://static.vivo.com/vivo-y53s-1.jpg",
      "https://static.vivo.com/vivo-y53s-2.jpg",
    ],
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
    images: [
      "https://www.vivo.com/vivo-t1-pro-5g",
      "https://static.vivo.com/vivo-t1-pro-5g-1.jpg",
      "https://static.vivo.com/vivo-t1-pro-5g-2.jpg",
    ],
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
    images: [
      "https://www.vivo.com/vivo-x70-pro",
      "https://static.vivo.com/vivo-x70-pro-1.jpg",
      "https://static.vivo.com/vivo-x70-pro-2.jpg",
    ],
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
    images: [
      "https://www.vivo.com/vivo-y21",
      "https://static.vivo.com/vivo-y21-1.jpg",
      "https://static.vivo.com/vivo-y21-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/xiaomi-13-pro",
      "https://static.mi.com/xiaomi-13-pro-1.jpg",
      "https://static.mi.com/xiaomi-13-pro-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/xiaomi-12-pro",
      "https://static.mi.com/xiaomi-12-pro-1.jpg",
      "https://static.mi.com/xiaomi-12-pro-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/redmi-note-12-pro-plus",
      "https://static.mi.com/redmi-note-12-pro-plus-1.jpg",
      "https://static.mi.com/redmi-note-12-pro-plus-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/mi-11-ultra",
      "https://static.mi.com/mi-11-ultra-1.jpg",
      "https://static.mi.com/mi-11-ultra-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/redmi-note-11-pro-5g",
      "https://static.mi.com/redmi-note-11-pro-5g-1.jpg",
      "https://static.mi.com/redmi-note-11-pro-5g-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/mi-11x-pro",
      "https://static.mi.com/mi-11x-pro-1.jpg",
      "https://static.mi.com/mi-11x-pro-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/redmi-k40-pro",
      "https://static.mi.com/redmi-k40-pro-1.jpg",
      "https://static.mi.com/redmi-k40-pro-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/redmi-note-10-pro",
      "https://static.mi.com/redmi-note-10-pro-1.jpg",
      "https://static.mi.com/redmi-note-10-pro-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/xiaomi-11t-pro",
      "https://static.mi.com/xiaomi-11t-pro-1.jpg",
      "https://static.mi.com/xiaomi-11t-pro-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/mi-10t-pro",
      "https://static.mi.com/mi-10t-pro-1.jpg",
      "https://static.mi.com/mi-10t-pro-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/mi-10-5g",
      "https://static.mi.com/mi-10-5g-1.jpg",
      "https://static.mi.com/mi-10-5g-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/redmi-note-9-pro",
      "https://static.mi.com/redmi-note-9-pro-1.jpg",
      "https://static.mi.com/redmi-note-9-pro-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/redmi-note-8-pro",
      "https://static.mi.com/redmi-note-8-pro-1.jpg",
      "https://static.mi.com/redmi-note-8-pro-2.jpg",
    ],
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
    images: [
      "https://www.mi.com/mi-a3",
      "https://static.mi.com/mi-a3-1.jpg",
      "https://static.mi.com/mi-a3-2.jpg",
    ],
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
    images: [
      "https://www.tecno-mobile.com/phantom-x2-pro",
      "https://static.tecno-mobile.com/phantom-x2-pro-1.jpg",
      "https://static.tecno-mobile.com/phantom-x2-pro-2.jpg",
    ],
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
    images: [
      "https://www.tecno-mobile.com/spark-9-pro",
      "https://static.tecno-mobile.com/spark-9-pro-1.jpg",
      "https://static.tecno-mobile.com/spark-9-pro-2.jpg",
    ],
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
    images: [
      "https://www.tecno-mobile.com/camon-18-pro",
      "https://static.tecno-mobile.com/camon-18-pro-1.jpg",
      "https://static.tecno-mobile.com/camon-18-pro-2.jpg",
    ],
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
    images: [
      "https://www.tecno-mobile.com/pova-4-pro",
      "https://static.tecno-mobile.com/pova-4-pro-1.jpg",
      "https://static.tecno-mobile.com/pova-4-pro-2.jpg",
    ],
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
    images: [
      "https://www.tecno-mobile.com/phantom-x",
      "https://static.tecno-mobile.com/phantom-x-1.jpg",
      "https://static.tecno-mobile.com/phantom-x-2.jpg",
    ],
  },
];
