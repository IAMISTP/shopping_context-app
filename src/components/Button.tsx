import React from 'react'
import { styled } from 'styled-components'

type ButtonProps = {
    children: React.ReactNode;
}

const Button:React.FC<ButtonProps> = ({children}) => {
    return (
        <Container>{children}</Container>
    )
}

export default Button

const Container = styled.button`
    height: 2rem
`