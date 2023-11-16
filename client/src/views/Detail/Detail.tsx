import { useAppDispatch, useAppSelector} from "../../redux/store/store";
import { useParams} from "react-router-dom"
import { useEffect } from "react";
import { getCharacterById } from "../../redux/features/charactersSlice";


const Detail = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const character = useAppSelector(state => state.characters.character)

    useEffect(() => {
        dispatch(getCharacterById(id))
    }, [dispatch, id])

    return (
        <div>
            <img   src={character.image} alt={character.name} />
            <h1>{character.name} </h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>

        </div>
    )

}

export default Detail;