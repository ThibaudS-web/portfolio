import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from "styled-components"
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Layout from './components/layout/Layout';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5F5F5;
  }
  @font-face {
      font-family: "Bebas Neue";
      src: url("/assets/fonts/BebasNeue-Regular.ttf");
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
