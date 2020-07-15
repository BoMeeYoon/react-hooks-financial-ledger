import React from 'react'
import styled from 'styled-components'
import { useExpensesDispatch } from '../contexts/ExpensesContext';
import Button from '../components/common/Button'

const Modal = styled.div`
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

const ExpenseModalBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 350px;
    padding: 1.5rem;
    background: white;
    border-radius: 16px;
    p {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }
`
const ExpenseModalBtns = styled.div`
    width: 100%;
    hight: 50px;
    margin-top: 100px;
    display: flex;
    justify-content: flex-end;
`
    
function ExpensesDeleteModal ({checkHandler, id}) {
    const dispatch = useExpensesDispatch()
    const deleteHandler = () => dispatch({
        type: 'DELETE',
        id
    })
    return (
      <Modal>
        <ExpenseModalBlock>
            <p>정말 삭제하시겠습니까?</p>
            <ExpenseModalBtns>
                <Button type="cancel" text="취소" onClick={checkHandler} />
                <Button type="delete" text="삭제" onClick={deleteHandler} />
            </ExpenseModalBtns>
        </ExpenseModalBlock>
      </Modal>
    )
}

export default ExpensesDeleteModal