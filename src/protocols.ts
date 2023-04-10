export type MovieEntity = {
    id:number,
    name: string,
    description: string,
    release: string,
    platform_id: number
}
export type MovieType = Omit<MovieEntity, "id" | "platform_id"> 

export type ActorsEntity = {
    id:number,
    name: string
}

export type ActorsType = Omit<ActorsEntity, "id"> 



