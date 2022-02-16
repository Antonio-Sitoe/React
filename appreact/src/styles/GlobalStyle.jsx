import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
   color: ${(props) => (props.theme ? '#cfd8dc' : '#252525')};
   background:${(props) => (props.theme ? '#263238' : 'white')};
}
a {
  text-decoration: none;
   color: ${(props) => (props.theme ? '#cfd8dc' : '#252525')};
  &:hover {
    color: #1983ff;
  }
}

ul {
  list-style: none;
}

.title {
  margin: 1rem 0;
  line-height: 65px;
  font-size: 3rem;
   @media (max-width:500px){
       font-size: 2rem;
    }
}

.sub {
  line-height: 48px;
  font-size: 2rem;
     @media (max-width:500px){
       font-size: 1rem;
    }
}

p {
  font-size: 1rem;
  line-height: 1.8;
  margin: 1rem 0;
}

.container {
  max-width: 960px;
  margin: 5rem auto 0 auto;
  padding: 0.6rem;
  display: grid;
  gap: 2rem;
  align-items: start;
  grid-template-columns: 15rem 1fr;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
    @media (max-width:500px){
      margin-top: 2rem;
    }
}

`;
