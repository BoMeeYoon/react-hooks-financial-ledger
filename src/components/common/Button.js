import React from 'react'
import styled, {css} from 'styled-components'

const ExpenseButton = styled.button`
    width: 4rem;
    height: 2.5rem;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 10px;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    ${props => {
        
        return props.type === 'cancel' ? css`background : #495057` : css`background: #3b5bdb;`
    }}
`

function Button({type, text, ...rest}) {
    return (<ExpenseButton type={type} {...rest} >{text}</ExpenseButton>)
}
export default Button
