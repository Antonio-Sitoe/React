import styled from 'styled-components';

export const HeaderStyle = styled.main`
  padding: 1.2rem 0.6rem;
  width: 100%;
  border-bottom: 1px solid whitesmoke;

  background: ${(props) => (props.theme === true ? '#263238' : 'white')};
  z-index: 10;
  position: fixed;
  top: 0;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.1);

  nav {
    max-width: 960px;
    margin: 0 auto;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem;

          svg {
            width: 100%;
            height: 30px;
            max-width: 30px;
          }
        }
        button {
          width: 2.5rem;
          background: #e0dfdf;
          cursor: pointer;
          border-radius: 4px;
          border: 1px solid whitesmoke;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }

        &:last-child {
          display: none;
        }
        @media (max-width: 700px) {
          &:last-child {
            display: flex;
          }
        }
      }
    }
  }
`;

export const Toogle = styled.span`
  cursor: pointer;
  width: 3rem;
  height: 20px;
  padding: 0.2rem;
  border-radius: 40px;

  display: flex;
  align-items: center;
  position: relative;
  background: #cfd8dc;

  div {
    position: absolute;
    transition: 0.3s;

    background: ${(props) => (props.theme ? '#263238' : 'white')};

    width: 18px;
    height: 18px;
    border-radius: 40px;
  }
`;
