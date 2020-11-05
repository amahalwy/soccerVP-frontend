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
          <MenuButton as={Button} rightIcon="chevron-down" color='black'>
            *Menu logo*
          </MenuButton>
          <MenuList>
            <MenuItem color='black'>Home</MenuItem>
            <MenuItem color='black' onClick={showCreate}>Create Event</MenuItem>
            <MenuItem color='black' onClick={logout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      )  
    } else if (localStorage.jwtToken === undefined) {
      return (
        <Menu>
          <MenuButton as={Button} rightIcon="chevron-down" color='black'>
            *Menu logo*
          </MenuButton>
          <MenuList>
            <MenuItem color='black'>Home</MenuItem>
            <MenuItem color='black' onClick={showSignup}>Signup</MenuItem>
            <MenuItem color='black' onClick={showLogin}>Login</MenuItem>
          </MenuList>
        </Menu>
      )
    }
  }
  

}