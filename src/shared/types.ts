export type Comment = {
    id: number,
    rating: number,
    comment: string,
    author: string,
    date: string,
    dishId: number
};

export type Promotion = {
    id: number,
    name: string,
    image: string,
    label: string,
    price: string,
    featured: boolean,
    description: string
}

export type Leader = {
    id: number,
    name: string,
    image: string,
    designation: string,
    abbr: string,
    featured: boolean,
    description: string,
}