export type Status = 'Alive' | 'Dead' | 'unknown'
export type Gender = 'Female' | 'Male'| 'Genderless'| 'unknown'

export interface Character {
    id: number;
    name: string;
    status: Status;
    species: string;
    gender: Gender;
    origin: string;
    image: string;
    isFavorite?: boolean;
}

export interface State {
    characters: Character[] | []
    character: Character 
}

// export interface 