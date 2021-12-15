import styled, { createGlobalStyle, keyframes, css } from 'styled-components';

export const Body = createGlobalStyle`
 body {
background: whitesmoke;
 }
`;

export const anime = keyframes`
  to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  max-width: 800px;
  background: white;
  border-radius: 0.3rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);
  padding: 3rem;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 1rem;
    }
  }
`;
export const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
  }
`;
export const ButtonSubmit = styled.button`
  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: 0.3s ${anime} linear infinite;
      }
    `}

  &[disabled] {
    cursor: wait;
    opacity: 0.4;
  }
`;
