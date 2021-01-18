export type Promotion = {
    id: number,
    name: string,
    image: string,
    label: string,
    price: string,
    featured: boolean,
    description: string
}

export type PromotionState = {
    promotions: Promotion[],
    isLoading: boolean,
    errorMessage: string
}