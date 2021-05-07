import styled from "styled-components";
import {darken,transparentize} from 'polished'

export const Container = styled.form  `
h2{
    
    color: var(--text-title);
    font-size: 1.9rem;
    margin-bottom: 1.8rem;

    
    };
input{

    width: 100%;
    padding:0 1.5rem;
    height: 2.2rem;
    border-radius: 0.5rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-size: 1.2rem;
    font-weight: 400;
    &::placeholder{
        color: var(--text-body);
    }
    & + input{
        margin-top: 1rem;
    };
    };
button[type='submit']{

        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.5rem;
        border: 0;
        font-size: 1.2rem;
        margin-top: 1rem;
        font-weight: 600;
        
        
        transition: filter 0.3s ;
        &:hover{
            filter: brightness(0.9)
           
        }
    };

    
    `


    export const ContentButton = styled.div `
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    
    `

    interface RadioBoxProps{
        isActive: Boolean;
        activeColor: 'green' | 'red';
    }
    const colors={
        green: '#33CC95',
        red:'#E52E4D'
    }
    export const RadioBox = styled.button <RadioBoxProps> `
    height: 3.2rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.5rem;
    background: ${ (props)=> props.isActive
     ? transparentize(0.8, colors[props.activeColor]) : 'transparent'};
    
    

    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s;
        &:hover{
            border-color: ${darken(0.5,'#d7d7d7')} ;
            
        }
    
    img{
        width: 20px;
        height: 20px;
    }
    span{
        display: inline-block;
        font-size: 1rem;
        margin-left: 1rem;
        color: var(--text-title)
    }`
        
    