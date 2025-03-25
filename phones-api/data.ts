export type Phone = {
    name: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    production: string;
    storage: string;
    ram: string;
}

export const phones: Phone[] = [
    // Samsung Phones
    {
        name: "Samsung Galaxy A14",
        description: "A budget-friendly smartphone with a large display and decent performance.",
        price: 199,
        brand: "Samsung",
        category: "Budget",
        production: "2023-01-15",
        storage: "64GB",
        ram: "4GB"
    },
    {
        name: "Samsung Galaxy A54",
        description: "A mid-range phone with a great camera and smooth performance.",
        price: 449,
        brand: "Samsung",
        category: "Mid-range",
        production: "2023-03-10",
        storage: "128GB",
        ram: "6GB"
    },
    {
        name: "Samsung Galaxy S23",
        description: "A flagship phone with top-tier performance, camera, and display.",
        price: 799,
        brand: "Samsung",
        category: "Flagship",
        production: "2023-02-01",
        storage: "256GB",
        ram: "8GB"
    },
    {
        name: "Samsung Galaxy M14",
        description: "An affordable phone with a long-lasting battery and solid performance.",
        price: 179,
        brand: "Samsung",
        category: "Budget",
        production: "2023-04-05",
        storage: "64GB",
        ram: "4GB"
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        description: "The ultimate flagship with a massive display, advanced camera, and S Pen support.",
        price: 1199,
        brand: "Samsung",
        category: "Flagship",
        production: "2023-02-01",
        storage: "512GB",
        ram: "12GB"
    },
    {
        name: "Samsung Galaxy A34",
        description: "A mid-range device with a sleek design and excellent battery life.",
        price: 399,
        brand: "Samsung",
        category: "Mid-range",
        production: "2023-03-20",
        storage: "128GB",
        ram: "6GB"
    },

    // Huawei Phones
    {
        name: "Huawei Nova 11i",
        description: "A budget-friendly phone with a stylish design and good battery life.",
        price: 249,
        brand: "Huawei",
        category: "Budget",
        production: "2023-05-01",
        storage: "128GB",
        ram: "6GB"
    },
    {
        name: "Huawei P60 Pro",
        description: "A flagship phone with a stunning camera system and powerful performance.",
        price: 999,
        brand: "Huawei",
        category: "Flagship",
        production: "2023-04-10",
        storage: "512GB",
        ram: "12GB"
    },
    {
        name: "Huawei Mate 50",
        description: "A high-end phone with a durable build and excellent camera capabilities.",
        price: 899,
        brand: "Huawei",
        category: "Flagship",
        production: "2023-03-15",
        storage: "256GB",
        ram: "8GB"
    },
    {
        name: "Huawei Y9 Prime",
        description: "A mid-range phone with a pop-up camera and large display.",
        price: 299,
        brand: "Huawei",
        category: "Mid-range",
        production: "2023-02-20",
        storage: "128GB",
        ram: "6GB"
    },
    {
        name: "Huawei Enjoy 50",
        description: "An affordable phone with a big battery and decent performance.",
        price: 199,
        brand: "Huawei",
        category: "Budget",
        production: "2023-06-01",
        storage: "64GB",
        ram: "4GB"
    },
    {
        name: "Huawei Mate X3",
        description: "A foldable flagship phone with cutting-edge technology and premium design.",
        price: 1599,
        brand: "Huawei",
        category: "Flagship",
        production: "2023-04-25",
        storage: "512GB",
        ram: "12GB"
    },
    // Apple Phones
    {
        name: "iPhone SE (3rd generation)",
        description: "A budget-friendly iPhone with a 4.7-inch Retina HD display, A15 Bionic chip, and 5G capability.",
        price: 429,
        brand: "Apple",
        category: "Budget",
        production: "2022-03-18",
        storage: "64GB",
        ram: "3GB"
    },
    {
        name: "iPhone 13",
        description: "A mid-range iPhone featuring a 6.1-inch Super Retina XDR display, A15 Bionic chip, and dual-camera system.",
        price: 799,
        brand: "Apple",
        category: "Mid-range",
        production: "2021-09-24",
        storage: "128GB",
        ram: "4GB"
    },
    {
        name: "iPhone 13 Pro",
        description: "A flagship iPhone with a 6.1-inch Super Retina XDR display, A15 Bionic chip, ProMotion technology, and triple-camera system.",
        price: 999,
        brand: "Apple",
        category: "Flagship",
        production: "2021-09-24",
        storage: "128GB",
        ram: "6GB"
    },
    {
        name: "iPad (9th generation)",
        description: "A budget-friendly iPad with a 10.2-inch Retina display, A13 Bionic chip, and support for Apple Pencil (1st generation).",
        price: 329,
        brand: "Apple",
        category: "Budget",
        production: "2021-09-24",
        storage: "64GB",
        ram: "3GB"
    },
    {
        name: "iPad Air (5th generation)",
        description: "A mid-range iPad featuring a 10.9-inch Liquid Retina display, M1 chip, and support for Apple Pencil (2nd generation).",
        price: 599,
        brand: "Apple",
        category: "Mid-range",
        production: "2022-03-18",
        storage: "64GB",
        ram: "8GB"
    },
    {
        name: "iPad Pro 12.9-inch (5th generation)",
        description: "A flagship iPad with a 12.9-inch Liquid Retina XDR display, M1 chip, and support for Apple Pencil (2nd generation).",
        price: 1099,
        brand: "Apple",
        category: "Flagship",
        production: "2021-05-21",
        storage: "128GB",
        ram: "8GB"
    }
];
