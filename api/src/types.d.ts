import { Model } from "sequelize";

export type NameParam = string | string[] | QueryString.ParsedQs | QueryString.ParsedQs[] | undefined;



export interface ResponseApi {
    id:       number;
    name:     string;
    status:   Status
    species:  string;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface CharactersDB {
    id: number;
    name: string;
    status: Status;
    species: string;
    gender: Gender;
    origin: string;
    image: string;
    isFavorite?: boolean;
}

export interface CharacterInstance extends Model<CharactersDB>, CharactersDB{}

export type ModelCharacters = Model<CharactersDB>[]
export type ModelCharacter = Model<CharactersDB> | null

export type CreateCharacter = Omit<CharactersDB, 'id'>

export type Status = 'Alive' | 'Dead' | 'unknown'
export type Gender = 'Female' | 'Male'| 'Genderless'| 'unknown'

export interface Location {
    name: string;
    url:  string;
}