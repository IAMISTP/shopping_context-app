import React, { useState } from 'react'
import { styled } from 'styled-components'
import Modal from './Modal';
import { AiOutlineClose } from 'react-icons/ai';
import Input from './Input';
import Button from './Button';

const Header = () => {

    const [joinShow, setJoinShow] = useState(false);    

  return (
    <Headers className='header'>
        <Container>nike</Container>
        <Nav>
            <div className='menu'>
                <div>New Releases</div>
                <div>Men</div>
                <div>Women</div>
                <div>Kids</div>
                <div>Sale</div>
                <div>SNKRS</div>
                <div>Sale</div>
            </div>
            <div className='sub-menu'>
                <div>login</div>
                <div onClick={()=>setJoinShow(true)}>join</div>
                <div>cart</div>
            </div>
        </Nav>
            {joinShow && 
                <Modal>
                    <div className='closeBtn' onClick={()=>setJoinShow(false)}><AiOutlineClose /></div>
                    <Input type='text' dataName='이름'/>
                    <Input type='text' dataName='전화번호'/>
                    <Input type='email' dataName='이메일'/>
                    <Input type='password' dataName='비밀번호'/>
                    <Button>회원가입</Button>    
                </Modal>} 
    </Headers>
  )
}

export default Header;

const Headers = styled.header`
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`   

const Container = styled.div`
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #484848;
    font-size: 2rem;
    text-transform: capitalize;
`
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    height: 2rem;
    .menu{
        display: flex;
        flex-direction: row;
        column-gap: 2rem;
        flex: auto;
        justify-content: center;

        div:hover{
            border-bottom: 1px solid black;
        }
    }
    .sub-menu{
        display: flex;
        flex-direction: row;
        column-gap: 1rem;
        text-transform: capitalize;

        div:hover{
            border-bottom: 1px solid black;
        }
    }
`