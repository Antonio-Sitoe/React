import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 5rem;
`;

export const Repository = styled.div`
  width: 25rem;
  border-radius: 0.3rem;

  display: flex;
  flex-direction: column;
  background: #eeee;
  header {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    img {
      width: 6.4rem;
    }

    small {
      font-size: 14px;
      color: #252525;
    }
  }
  ul {
    list-style: none;
    li {
      font-weight: bold;
      padding: 12px 20px;
      margin-right: 1rem;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n-1) {
        background: #f5f5f5;
      }
    }
  }
`;
