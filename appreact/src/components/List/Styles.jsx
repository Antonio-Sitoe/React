import styled from 'styled-components';
import { animes } from '../Content/style';

export const ListStyle = styled.main`
  position: relative;

  ul {
    animation: 0.3s ${animes};
    position: fixed;
    padding: 1rem;
    border-radius: 0.6rem;
    list-style: none;

    li {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      position: relative;

      div {
        display: grid;
        width: 100%;

        a {
          background: blue;
          display: block;
          width: 100%;
        }

        ul {
          position: absolute;
          top: 0;
          width: 100%;
          display: grid;
        }
      }

      &::before {
        content: '';
        width: 0.3rem;
        height: 0.3rem;
        background: currentColor;
        margin-right: 1rem;
        border-radius: 50%;
      }
    }
    button {
      width: 2.5rem;
      background: #e0dfdf;
      cursor: pointer;
      border-radius: 4px;
      border: 1px solid whitesmoke;
      height: 2.5rem;
      display: none;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 700px) {
      background: ${(props) => props.theme === true ? '#263238' : 'white'};
      color: ${(props) => props.theme ? '#263238' : 'white'};
      z-index: 10;
      top: 0;
      left: 0;
      z-index: 10;
      height: 100vh;
      border: 0;
      border-radius: 0;
      width: 100%;
      margin: 0;
      button {
        display: flex;
        position: absolute;
        right: 1rem;
        z-index: 100;
        box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.3);
      }

      li {
        margin: 0;
        padding: 0.6rem;
        border-bottom: 1px solid white;
      }
    }
  }
`;
