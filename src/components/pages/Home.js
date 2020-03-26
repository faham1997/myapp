import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'


export default function Home() {
    return (
        <div>
            <Jumbotron fluid>
                <Container text-alighj>
                    <h1 style={{color: "purple"}}>Welcome to lavender-Evergarden</h1>
                    <p>
                    I have created this with a view to manage various notes and guides about the Redmi Note 7 to help people with stuffs are actually a noob. <br/>
                    You might be feeeling very bad about this site since it might look very odd considering im not a very good website developer or a desginer.<br/>
                    Im just a regular guy trying hard to make something out of nothing ! So, please be patient :) <br/>
                    I'm sure you will be able to find what you wanna find in here . Most of the time id be posting links either way . <br/>
                    Thank you so much ! if you have read this long paragraph :3 I just wrote it because idk .. 
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}
