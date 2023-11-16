import { Router } from 'express';
import {createCharacter, deleteCharacter, getAllCharacters, getCharacter, updateCharacter} from '../controllers/character'
import {  CharactersDB, CreateCharacter, NameParam } from '../types';
const characterRouter = Router();



characterRouter.get('/', async(req, res)=> {
    const {name}: NameParam = req.query
    try {
        const response = await getAllCharacters(name)
        res.status(200).json(response)
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }

});
characterRouter.get('/:id', async(req, res)=> {
    const {id} = req.params
    try {
        const response = await getCharacter(id)
        res.status(200).json(response)
        
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
});

characterRouter.post('/create', async(req, res) => {
    const {name, status, species, gender, origin, image}: CreateCharacter = req.body
    try {
        const response = await createCharacter({name, status, species, gender, origin, image})
        res.status(200).json({message: response})
    } catch (error: any) {
        res.status(400).json({erorr: error.message})
        
    }

})
characterRouter.put('/update', async(req, res) => {
    const {id, name, status, species, gender, origin, image, isFavorite}: CharactersDB = req.body
    try {
        const response = await updateCharacter({id, name, status, species, gender, origin, image, isFavorite})
        res.status(200).json({message: response})
    } catch (error: any) {
        res.status(400).json({erorr: error.message})
        
    }
    

})
characterRouter.delete('/delete/:id', async(req, res) => {
    const {id} = req.params
    try {
        const response = await deleteCharacter(id)
        res.status(200).json({message: response})
        
    } catch (error: any) {
        res.status(400).json({erorr: error.message})
        
    }

})



export default characterRouter;