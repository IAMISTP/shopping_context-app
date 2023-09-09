import React, { useRef } from 'react'
import { styled } from 'styled-components'

type ModalProps = {
    children: React.ReactNode;
}

const Modal = ({children}:ModalProps) => {
  return (
    <Container>
        {children}
    </Container>
  )
}

export default Modal
const Container = styled.form`
    position: absolute;
    width: 35%;
    height: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    row-gap: 1rem;
    transform: translateY(25%);
    .closeBtn{
        text-align: end;
        margin-bottom: 1rem;
    }
`
