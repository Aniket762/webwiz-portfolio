import React from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';
import styled from "styled-components";

import InfoSection from '../info/info';
import { maindata } from './teamData';


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

        <h1>#teams</h1>
        <InfoSection {...maindata} />
            
        </div>
    )
}

export default team
