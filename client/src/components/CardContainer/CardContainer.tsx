import { Character } from "../../types";
import Card from "../Card/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import Paginated from "../Paginated/Paginated";



interface Props {
    characters: Character[] | []
}


const CardContainer: React.FC<Props> = ({characters}) => {

    
    
    const [currentPage, setCurrentPage] = useState(1);
    const charPerPage = 9;
    const size = characters.length / charPerPage;
    const lastIndex = currentPage * charPerPage
    const firstIndex = lastIndex - charPerPage
    const currentCharacters = characters.slice(firstIndex, lastIndex)
    
    const handlePageChange = (number: number) =>{
        setCurrentPage(number)
    }
    
    return (
        <div>
            <section className="block characters-block">
                <Container fluid>
                    <div className="title-holder"> Characters</div>
                    <Row className="charlist"  lg={3} >
            {currentCharacters.map(char => {
                return(
                    <Card
                    id= {char.id}
                    key={char.id}
                    name={char.name}
                    gender={char.gender}
                    image={char.image}
                    origin={char.origin}
                    species={char.species}
                    status={char.status}
                    isFavorite={char.isFavorite}
                    
                    />
                )
            })}

                    </Row>
                    <Paginated handlePageChange={handlePageChange} size={size} currentPage={currentPage}/>
                    

                </Container>

            </section>


        </div>
    )

}

export default CardContainer;