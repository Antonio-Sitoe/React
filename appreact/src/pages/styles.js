import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 0 0;
`;
export const Form = styled.form`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  max-width: 400px;
  align-items: center;
  input {
    flex: 1;
    height: 55px;
    padding: 0 28px;
    background: white;
    margin-right: 1rem;
    border: ${(props) => (props.error ? '2px solid tomato' : 0)};
  }
  button {
    font-weight: bold;
    height: 55px;
    border: 0;
  }
`;
