
import { Col, Image } from 'react-bootstrap'

import './profile-header.css'



const Info = props => {

    const user = props.loggedUser
    return (
        <>
            <Col xs={6} md={3} className='image-Col'>
                <Image className='profile-img' src={user.img} />
            </Col>
            <Col xs={12} md={9} >
                <section className='profile-info'>
                    <h3>
                        {user.username}
                    </h3>
                    <p>Number of recipes: {props.numberRecipes} | Friends: 30</p>
                </section>
            </Col>
        </>


    )
}

export default Info