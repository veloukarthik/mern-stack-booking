import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

    const logout = (e) =>{

        e.preventDefault();

        localStorage.clear();

        window.location.reload();

    }

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Expense Track</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title="My Account" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={(e)=> logout(e)}>Logout</NavDropdown.Item>
                        
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;