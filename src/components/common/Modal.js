import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
    z-index: 5;
`
const FormBlock = styled.form`
    width: 350px;
    height: 400px;
    padding: 1.5rem;
    background: white;
    border-radius: 16px;
`

function Modal({children}) {
    return (<ModalBackground>
        <FormBlock>
            {children}
        </FormBlock>
    </ModalBackground>)
}
export default Modal