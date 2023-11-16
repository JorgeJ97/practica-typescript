import CardContainer from "../../components/CardContainer/CardContainer"
import { getCharacters } from "../../redux/features/charactersSlice"
import { useAppDispatch, useAppSelector } from "../../redux/store/store"
import { useEffect } from "react"



const Home = () => {
    const dispatch = useAppDispatch()
    const characters = useAppSelector(state => state.characters.characters)

    useEffect( () => {
        dispatch(getCharacters())
        console.log('Hola')
        
    }, [dispatch])



    return (
        <div>
            <h1>Rick and morty app using typescript!!</h1>
            <CardContainer characters ={characters}/>

        </div>
    )
}

export default Home;