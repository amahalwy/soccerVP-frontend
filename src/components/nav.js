import React from 'react';
import { Box, Heading, Flex, Text, Button,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/core";
import {useSelector} from 'react-redux';
import Login from '../components/login';
import Signup from '../components/signup';
import NavMenu from './NavMenu';
import AuthModal from './AuthModal';
// import Create from './CreateEvent';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

export default function Navbar(props) {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const [openLoginModal, setLogin] = React.useState(false);
  
  const showLogin = () => {
    setLogin(true);
  }
  
  const closeLogin = () => {
    setLogin(false);
  }

  const [openSignupModal, setSignup] = React.useState(false);

  const showSignup = () => {
    setSignup(true);
  }

  const closeSignup = () => {
    setSignup(false);
  }

  // const [openCreateModal, setCreate] = React.useState(false);

  // const showCreate = () => {
  //   setCreate(true);
  // }

  // const closeCreate = () => {
  //   setCreate(false);
  // }

  const [openAuth, setAuth] = React.useState(false);
   const showAuth = () => {
    setAuth(true);
  }

  const closeAuth = () => {
    setAuth(false);
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      boxShadow="0px 12px 12px 1px rgba(0, 0, 0, .4);"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Chakra UI
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>Docs</MenuItems>
        <MenuItems>Examples</MenuItems>
        <MenuItems>Blog</MenuItems>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
      </Box>

      <Signup openSignupModal={openSignupModal} closeSignup={closeSignup} showAuth={showAuth} />
      <Login openLoginModal={openLoginModal} closeLogin={closeLogin} showAuth={showAuth}/>
      {/* <Create openCreateModal={openCreateModal} closeCreate={closeCreate} /> */}
      <AuthModal openAuth={openAuth} closeAuth={closeAuth} />

      <NavMenu showSignup={showSignup} showLogin={showLogin} bg="transparent" border="1px"/>
       {/*showCreate={showCreate}*/}

    </Flex>
  );
}
