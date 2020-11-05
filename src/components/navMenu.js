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

export default function NavMenu(props) {

  const showLogin = () => {
    props.showLogin();
  }

  const showCreate = () => {
    props.showCreate();
  }

  const logout = () => {
    if (localStorage.jwtToken && localStorage.currentUserId !== undefined) {
      localStorage.removeItem('jwtToken');
      localStorage.setItem('currentUserId', undefined);
    }
  }

  if (typeof window !== "undefined") {
    if (localStorage.currentUserId !== "undefined") {
      return(
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
    } 
  }

  return(
    <Menu>
      <MenuButton as={Button} rightIcon="chevron-down" color='black'>
        *Menu logo*
      </MenuButton>
      <MenuList>
        <MenuItem color='black'>Home</MenuItem>
        <MenuItem id='login-button' color='black' onClick={showLogin}>Login</MenuItem>
      </MenuList>
    </Menu>
  )
}