import React from 'react';
import styled from 'styled-components';
import ExpenseModalTemplate from './ExpenseModalTemplate'
import {useExpenseDispatch} from './ExpenseContext'
import useInputs from './ExpenseInputs'
import ExpenseButton from './ExpenseButton'

const ExpenseModalBtns = styled.div`
    width: 100%;
    hight: 50px;
    display: flex;
    justify-content: flex-end;
`

const ExpenseTextBlock = styled.div`
    padding: 1rem;
    h1 {
        margin: 0;
        font-size: 1.5rem;
    }
`

const ExpenseContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-bottom: 2rem;
    p {
        padding-bottom: 0;
        margin-bottom: 0;
        font-size: 1.125rem;
        font-weight: bold;
    }
    .input {
        height: 1.2rem;
        padding: 2px;
    }
    select {
        height: 2rem;
        padding: 0;
        font-size: 14px;
    }
`

function ExpenseUpdateModal({open, onToggle, data}) {
   
    const items = [{
        meal : '식사',
        grocery : '식료품',
        transportation : '교통',
        living : '생활',
        medical : '의료'
    }];

    const [{content, amount, category}, onChange] = useInputs(data)
    
    const dispatch = useExpenseDispatch();

    const onSubmit = e => {
              
        e.preventDefault();
        
        dispatch({
            type:'UPDATE',
            id: data.id,
            expense: {
                id: data.id,
                category,
                title : items[0][category],
                content,
                amount
            }
        });

        onToggle()

    };

return (<ExpenseModalTemplate>
            <ExpenseTextBlock>
                <h1>지출수정</h1>
                <ExpenseContentBlock>
                    <p>내용</p>
                    <input type="text" name="content" value={content} className="input" onChange={onChange}/>
                    <p>금액</p>
                    <input type="number" name="amount" value={amount} className="input" onChange={onChange}/>
                    <p>카테고리</p>
                    <select name="category" value={category} onChange={onChange}>
                        <option value="">전체</option>
                        <option value="meal">식사</option>
                        <option value="grocery">식료품</option>
                        <option value="transportation">교통</option>
                        <option value="living">생활</option>
                        <option value="medical">의료</option>
                    </select>
                    
                </ExpenseContentBlock>
            </ExpenseTextBlock>
            <ExpenseModalBtns>
                <ExpenseButton type="cancel" text="취소" onClick={onToggle} />
                <ExpenseButton type="submit" text="수정" onClick={onSubmit} />
            </ExpenseModalBtns>
        </ExpenseModalTemplate>)
}
export default ExpenseUpdateModal