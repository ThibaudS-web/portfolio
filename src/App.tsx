import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from "styled-components"
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Layout from './components/layout/Layout';

const GlobalStyle = createGlobalStyle`
  /* @font-face {
      font-family: "Bebas Neue";
      src: url("/assets/fonts/BebasNeue-Regular.ttf");
      font-display: fallback;
      font-style: normal;
      font-weight: 400;
  } */
  body {
    background-color: #F5F5F5;
    font-family:  "Bebas Neue", sans-serif;
  }
  h1, p {
    margin: 0;
  }
  p{
    font-family: 'Inter', sans-serif;
  }
`

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename="/">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </>
  )
}

export default App
