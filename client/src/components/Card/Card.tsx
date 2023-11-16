import { Character } from "../../types"
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



const Card: React.FC<Character> = (props) => {
    return (
            <Col sm={4} key={props.id}>
                <div className="portfolio-wrapper">
                    <Link to= {`/detail/${props.id}`}>
                        <Image src={props.image} fluid />
                    </Link>
                    <div className="label text-center">
                        <h3>{props.name}</h3>
                        <p>{props.status}</p>
                    </div>
                </div>
            </Col>
    )
}

export default Card;