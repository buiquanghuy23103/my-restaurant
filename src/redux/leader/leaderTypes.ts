
export type Leader = {
    id: number,
    name: string,
    image: string,
    designation: string,
    abbr: string,
    featured: boolean,
    description: string,
}

export type LeaderState = {
    leaders: Leader[],
    isLoading: boolean,
    errorMessage: string
}