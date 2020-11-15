import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, MobileIcon, NavMenu,NavItem,NavLinks} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">HOME</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/About'>ABOUT</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/Projects'>PROJECTS</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/Contact'>CONTACT</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
