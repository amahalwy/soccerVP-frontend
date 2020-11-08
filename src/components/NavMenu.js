import React from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/core";
import { useRouter } from 'next/router';

export default function NavMenu(props) {
  const router = useRouter();

  const showLogin = () => {
    props.showLogin();
  }

  const showSignup = () => {
    props.showSignup();
  }

  const showCreate = () => {
    props.showCreate();
  }

  const logout = () => {
    if (localStorage.jwtToken) {
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('currentUser');
      router.push(`/`)
    }
    return;
  }

  if (typeof window === 'undefined') return '';

  if (typeof window !== "undefined") {
    if (localStorage.jwtToken !== undefined) {
      return (
        <Menu>
          <MenuButton as={Button} color='black' mr='30px' borderRadius='10px' h='45px'>
            <div className="container">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </MenuButton>
          <MenuList mr='40px'>
            <MenuItem color='black'>Home</MenuItem>
            <MenuItem color='black' onClick={() => router.push('/profile')}>Profile</MenuItem>
            <MenuItem color='black' onClick={showCreate}>Create Event</MenuItem>
            <MenuItem color='black' onClick={logout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      )  
    } else if (localStorage.jwtToken === undefined) {
      return (
        <Menu>
          {({ isOpen }) => (
            <React.Fragment>
              <MenuButton isActive={isOpen} as={Button} color='black' mr='30px' borderRadius='10px' h='45px'>
                {isOpen 
                  ? 
                <div className="container-close">
                  <div className="bar1-close"></div>
                  <div className="bar2-close"></div>
                  <div className="bar3-close"></div>
                </div> 
                  : 
                <div className="container">
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div> 
                }
              </MenuButton>
              <MenuList mr='30px'>
                <MenuItem color='black'>Home</MenuItem>
                <MenuItem id='signup-button' color='black' onClick={showSignup}>Signup</MenuItem>
                <MenuItem id='login-button' color='black' onClick={showLogin}>Login</MenuItem>
              </MenuList>
            </React.Fragment>
          )}
        </Menu>
      )
    }
  }
}

