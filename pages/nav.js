import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/core";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div>
        <Menu>
          <MenuButton  variantColor="pink">
            Menu
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>

      <div>

      </div>
    </div>
  )
}
