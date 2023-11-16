import axios from "axios"
import { ResponseApi, NameParam, CreateCharacter, ModelCharacter, ModelCharacters, CharactersDB } from "../types"
import Models from '../db'
import { Op } from "sequelize"
const API_URL = 'https://rickandmortyapi.com/api/character'



export const saveAll = async (): Promise<ModelCharacters> =>  {
    let response: ResponseApi[] = []
    for(let i=1; i<= 10; i++){
        let responseUrl = await axios(`${API_URL}?page=${i}`)
        response.push(responseUrl.data.results)
    }
    response = response.flat()
    const charactersDB: CreateCharacter[] = response.map(character => {
        return {
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            origin: character.origin.name,
            image: character.image
        }
    })
    const characters: ModelCharacters = await Models.Character.bulkCreate(charactersDB)
    return characters;
}


export const getAllCharacters = async (name: NameParam): Promise<ModelCharacters> => {

    let allCharacters: ModelCharacters= await Models.Character.findAll()
    if(!name){
        return !allCharacters.length ? await saveAll() : allCharacters
    }
    if(!allCharacters.length) {
        await saveAll()
    }
    const filterCharacters: ModelCharacters = await Models.Character.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
            })
    return filterCharacters;
}



export const getCharacter = async (id: string): Promise<ModelCharacter> => {
    let allCharacters: ModelCharacters = await Models.Character.findAll()
    if(!allCharacters.length) await saveAll()
    const character:ModelCharacter = await Models.Character.findByPk(id)
    if(!character) throw Error('Character not found')

    return character;
}


export const createCharacter = async (character : CreateCharacter): Promise<String> =>{
    const existingCharacter: ModelCharacter = await Models.Character.findOne({
        where: {
            name: character.name,
        }
    })
    if(existingCharacter) throw Error('Character already exist')
    await Models.Character.create(character)
    return 'Character created'
}

export const updateCharacter = async (character : CharactersDB): Promise<string> => {
    const {id, name, status, species,gender, origin , image, isFavorite} = character
    const existingCharacter: ModelCharacter = await Models.Character.findByPk(id)
    if(!existingCharacter) throw Error('Character not found')

    await Models.Character.update({name,status, species, gender, origin, image, isFavorite}, {
        where: {
            id: id
        }
    })
    return 'Updated character'
}

export const deleteCharacter = async (id: string): Promise<string> => {
    const existingCharacter : ModelCharacter = await Models.Character.findByPk(id)
    if(!existingCharacter) throw Error('This character does not exis')
    await existingCharacter.destroy()
    return 'Character deleted successfully'
}