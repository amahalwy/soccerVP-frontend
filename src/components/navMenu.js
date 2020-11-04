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

  const showSignup = () => {
    props.showSignup();
  }

  const showLogin = () => {
    props.showLogin();
  }

  const showCreate = () => {
    props.showCreate();
  }

  if (typeof window !== "undefined") {
    if (localStorage.jwtToken !== undefined) {
      return(
        <Menu>
          <MenuButton as={Button} rightIcon="chevron-down" color='black'>
            *Menu logo*
          </MenuButton>
          <MenuList>
            <MenuItem color='black'>Home</MenuItem>
            <MenuItem color='black' onClick={showCreate}>Create Event</MenuItem>
            <MenuItem color='black' onClick={showSignup}>Signup</MenuItem>
            <MenuItem color='black' onClick={showLogin}>Login</MenuItem>
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
        <MenuItem color='black' onClick={showCreate}>Create Event</MenuItem>
        <MenuItem color='black' onClick={showSignup}>Signup</MenuItem>
        <MenuItem color='black' onClick={showLogin}>Login</MenuItem>
      </MenuList>
    </Menu>
  )
}