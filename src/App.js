import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Contents from './components/contents';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      {/* Main Contianer for App */}
      <div className="App">
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Links Header Component To Home Button on Menu */}
        <Routes>
          <Route path='/' element={<Header></Header>}></Route>
        </Routes>

        {/* Links Contents Component To Contents Button on Menu */}
        <Routes>
          <Route path='/read' element={<Contents></Contents>}></Route>
        </Routes>

        {/* Links Footer Component To Create Button on Menu */}   
        <Routes>
          <Route path='/create' element={<Footer></Footer>}></Route>
        </Routes>
      </div>

    </BrowserRouter>

  );
}

export default App;
