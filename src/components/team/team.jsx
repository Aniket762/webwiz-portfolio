import React from 'react';
import styled from "styled-components";



const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #490055;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #490055;
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

function team() {
    return (
        <div>
           <h1>#team</h1>
            
            
        </div>
    )
}

export default team
