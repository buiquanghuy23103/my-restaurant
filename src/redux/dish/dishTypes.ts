export type Dish = {
    id: number,
    name: string,
    image: string,
    category: string,
    label: string,
    price: string,
    description: string,
    featured: boolean
};

export type DishState = {
    dishes: Dish[],
    isLoading: boolean,
    errorMessage: string
}