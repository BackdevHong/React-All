import React from 'react'
import styled from 'styled-components'

export default function StyleComponent() {
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;

    const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
    `;
    const Button = styled.button`
    /* Adapt the colors based on primary prop */
        background: ${props => props.primary ? "palevioletred" : "white"};
        color: ${props => props.primary ? "white" : "palevioletred"};
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
    `;

    const TomatoButton = styled(Button)`
        color: tomato;
        border-color: tomato;
    `;

    const ReversedButton = ( props ) => (
        <Button {...props} children={props.children.split('').reverse()} />
    )

    return (
    <Wrapper>
        <Title>
            Hello World! 
        </Title>
        <Button onClick={() => {alert("Normal")}}>Normal</Button>
        <Button onClick={() => {alert("Primary")}} primary>Primary</Button>
        <TomatoButton>New Component</TomatoButton>
        <br />
        <Button as="a" href="#">Link with Button styles</Button>
        <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
        <Button as={ReversedButton}>Custom Button with Reverse</Button>
    </Wrapper>
    );
}
