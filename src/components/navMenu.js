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

  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure

} from "@chakra-ui/core";
import Signup from './signup';

export default function NavMenu(props) {

  const showSignup = () => {
    props.showSignup();
  }

  const showLogin = () => {
    props.showLogin();
  }

  return(
    <Menu>
      <MenuButton as={Button} rightIcon="chevron-down" color='black'>
        *Menu logo*
      </MenuButton>
      <MenuList>
        <MenuItem color='black'>Home</MenuItem>
        <MenuItem color='black' onClick={showSignup}>Signup</MenuItem>
        <MenuItem color='black' onClick={showLogin}>Login</MenuItem>
        <MenuItem color='black'>Delete</MenuItem>
      </MenuList>
    </Menu>
  )
}