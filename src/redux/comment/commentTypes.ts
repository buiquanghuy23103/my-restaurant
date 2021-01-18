export type Comment = {
    id: number,
    rating: number,
    comment: string,
    author: string,
    date: string,
    dishId: number
};

export type CommentState = {
    comments: Comment[],
    isLoading: boolean,
    errorMessage: string
}