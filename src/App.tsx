import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import { createGlobalStyle } from "styled-components"
import Layout from './components/layout/Layout';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F5F5F5;
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
