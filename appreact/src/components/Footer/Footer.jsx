import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import styled from 'styled-components';
const Style = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem ;
  border-top: 1px solid #e7e7e7;

  svg {
    width: 40px;
    height: 40px;
  }
`

const Footer = () => {
  return (
    <Style>
      <p>Todos os direitos reservadoos</p>
      <a href='https://github.com/antonio-sitoe'>
        <FaGithubAlt />
      </a>
    </Style>
  );
};

export default Footer;
