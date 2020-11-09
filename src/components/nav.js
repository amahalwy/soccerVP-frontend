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
import Login from '../components/login';
import Signup from '../components/signup';
import Create from '../components/CreateEvent'
import NavMenu from './NavMenu';
import AuthModal from './AuthModal';
import { useQuery } from 'react-query';
// import { getCurrentUser } from '../utils/api';

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

  const [openAuth, setAuth] = React.useState(false);
   const showAuth = () => {
    setAuth(true);
  }

  const closeAuth = () => {
    setAuth(false);
  }

  const [openCreate, setCreate] = React.useState(false);
   const showCreate = () => {
    setCreate(true);
  }

  const closeCreate = () => {
    setCreate(false);
  }

  // const { isLoading, error, data } = useQuery('user', getCurrentUser, {
  //   enabled: typeof window !== "undefined" && localStorage.jwtToken === undefined,
  //   onSuccess: function(data) {
  //     console.log('success');
  //     console.log(data);
  //   }
  // });


  return (
    <Flex
      as="nav"
      bg="teal.500"
      wrap="wrap"
      color="white"
      align="center"
      zIndex='1000'
      justify="space-between"
      padding="1.5rem"
      boxShadow="0px 12px 12px 1px rgba(0, 0, 0, 0.3);"
      backgroundImage='linear-gradient(to top right, #319795, #06225f)'
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
      <Create openCreate={openCreate} closeCreate={closeCreate} showAuth={showAuth}/>
      <AuthModal openAuth={openAuth} closeAuth={closeAuth} />

      <NavMenu showSignup={showSignup} showLogin={showLogin} showCreate={showCreate} bg="transparent" border="1px"/>
       

    </Flex>
  );
}
