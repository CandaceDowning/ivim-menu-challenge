import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Header({logo, name, setShowCart}) {

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="" style={{width: '200px'}}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="ivim-nav" className="justify-content-end">
          <Navbar.Text className="d-flex flex-row align-items-center">
            <p style={{margin: '0 15px 0 0'}}>{name}</p>
            <Button variant="success" onClick={()=>setShowCart()}>
              View Meal
            </Button>
          </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }
  
  export default Header;