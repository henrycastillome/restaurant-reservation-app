import React from "react";
import styled from "styled-components";

const Buttons= styled.button `
background-color: ${props => props.primary? 'var(--primary-color-yellow)' : 'var(--primary-color-green)' };
  padding: 1em 2em;
  width:100%;
  border: ${props => props.primary? 'var(--primary-color-yellow)' : '2px solid var(--primary-color-green)' };
  border-radius: 8px;
  font-family: var(--body-font);
  font-weight: bold;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: ${props=>props.primary ? 'var(--secondary-color-black)': 'var(--secondary-color-white)'} ;
  cursor:pointer;
  :hover{
    background-color: ${props=>props.primary ? 'var(--secondary-color-black)': ' var(--secondary-color-white)'};
    color: ${props=>props.primary ? 'var(--primary-color-yellow)' : 'var(--primary-color-green)'};
    
    
  }
`


const Button=({children, isPrimary, onClick, type})=>{
    return(

    isPrimary ? 

       ( <Buttons primary type={type} onClick={onClick}>{children}</Buttons> ) :
       
       (<Buttons type={type} onClick={onClick} >{children}</Buttons>)
        
        

    )
}

export default Button;