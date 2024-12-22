import Image from 'react-bootstrap/Image';
import Frame from "../assets/images/With coolDrink.png"
import { Container } from 'react-bootstrap';


const HomePage = () => {
    return (
    <Container fluid className='m-0 p-0 text-center'>
    <Image src={Frame} fluid alt='Home photo' className='responsive-img'/>
    </Container>
    )
}

export default HomePage;