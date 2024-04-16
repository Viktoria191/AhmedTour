import React from 'react';
import { Link } from 'react-router-dom'; // Импортируйте Link из react-router-dom
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { registrModal, loginModal } from '../../redux/slices/auth';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkLogout } from '../../redux/slices/auth/checkAuthThunk';
import Logo from '../../icons/Logo';
import { addTourModal } from '../../redux/slices/tour/tourSlice';

export default function BasicExample(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authSlice.user);

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#363030',
        borderRadius: '0 0 15px 15px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
      }}
    >
      <Container>
        <div style={{ position: 'absolute', width: '115px', marginTop: '7px' }}>
          <Logo />
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: '70px' }}>
            <Navbar.Brand as={Link} to="/" className="nav-item slam-left text-white">
              {user.status === 'authenticated'
                ? `Добро пожаловать, ${user.name}`
                : 'Добро пожаловать, гость'}
            </Navbar.Brand>

            <NavDropdown title={<span className="text-white">Регионы</span>}>
              <NavDropdown.Item as={Link} to="/region/1">
                Дагестан
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/region/2">
                Ингушетия
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/region/3">
                КБР
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/region/4">
                Чечня
              </NavDropdown.Item>
            </NavDropdown>

            {user.status !== 'authenticated' ? (
              <>
                <Nav.Link
                  href="#link"
                  className="text-white"
                  onClick={() => void dispatch(loginModal())}
                >
                  Войти
                </Nav.Link>
                <Nav.Link
                  href=""
                  className="text-white"
                  onClick={() => void dispatch(registrModal())}
                >
                  Зарегистрироваться
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/basket" className="text-white">
                  Корзина
                </Nav.Link>

                {user.roleId === 1 ? (
                  <>
                    <Nav.Link as={Link} to="/history" className="text-white">
                      История
                    </Nav.Link>
                    <Nav.Link style={{width: '120px'}} className="text-white" onClick={() => void dispatch(addTourModal())}>
                      Добавить тур
                    </Nav.Link>
                  </>
                ) : (
                  <div />
                )}

                <Nav.Link
                  href=""
                  className="text-white"
                  onClick={() => void dispatch(thunkLogout())}
                  style={{ marginLeft: '500px' }}
                >
                  Выйти
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
