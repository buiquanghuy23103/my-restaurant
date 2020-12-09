export type Dish = {
    id: number,
    name: string,
    image: string,
    category: string,
    label: string,
    price: string,
    description: string,
    comments: Array<Comment>
};

export type Comment = {
    id: number,
    rating: number,
    comment: string,
    author: string,
    date: string
};