import { Phone } from "../data.ts";

export type FilterParams = {
    brand: string | null, // Filter by brand
    storage: string | null, // Filter by storage
    ram: string | null,       // Filter by RAM
    minPrice: number | null,    // Filter by minimum price
    maxPrice: number | null,    // Filter by maximum price
    productionDateStart: string | null, // Filter by production start date
    productionDateEnd: string | null,   // Filter by production end date
    category: string | null    // Filter by category
}

export default function filterPhones(phones: Phone[], filters: FilterParams) {
    return phones.filter(phone => {
        // Filter by brand (if provided)
        if (filters.brand && phone.brand.toLowerCase() !== filters.brand.toLowerCase()) {
            return false;
        }

        // Filter by storage (if provided)
        if (filters.storage && phone.storage !== filters.storage) {
            return false;
        }

        // Filter by RAM (if provided)
        if (filters.ram && phone.ram !== filters.ram) {
            return false;
        }

        // Filter by price range (if provided)
        if (filters.minPrice && phone.price < filters.minPrice) {
            return false;
        }
        if (filters.maxPrice && phone.price > filters.maxPrice) {
            return false;
        }

        // Filter by production date range (if provided)
        if (filters.productionDateStart && new Date(phone.production) < new Date(filters.productionDateStart)) {
            return false;
        }
        if (filters.productionDateEnd && new Date(phone.production) > new Date(filters.productionDateEnd)) {
            return false;
        }

        // Filter by category (if provided)
        if (filters.category && phone.category.toLowerCase() !== filters.category.toLowerCase()) {
            return false;
        }

        // If all filters pass, include the phone in the result
        return true;
    });
}
