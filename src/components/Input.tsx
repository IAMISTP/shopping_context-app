import React from 'react'
import { styled } from 'styled-components';

type InputProps = {
    type:string;
    dataName:string;
}

const Input = ({type,dataName}:InputProps) => {
  return (
    <InputTag type={type} placeholder={`${dataName} 을 입력해주세요.`} pattern={type === 'email' ? ".+@globex\.com":''}/>
  )
}

export default Input;

const InputTag = styled.input`
    height:2rem
`