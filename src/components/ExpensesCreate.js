import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { coralPink, softGrayBlue } from "../constants/color";


const ExpensesCreateBtn = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  margin: 0 20px 18px;
  border-radius: 50%;

  font-size: 40px;
  color: white;
  background-color: ${coralPink};

  cursor: pointer;
  transition: 0.35s;

  $:hover {
    backgorund-color: ${softGrayBlue}
  }
`;
function ExpensesCreate() {
  return (
    <ExpensesCreateBtn><MdAdd/></ExpensesCreateBtn>
  )
}

export default ExpensesCreate;