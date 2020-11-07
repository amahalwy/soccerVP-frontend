import React from 'react';
import { 
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";
import { useMutation } from 'react-query';
import { postUser } from '../utils/api';

export default function Login(props) {
  const [number, setNumber] = React.useState('');
  // const [password, setPassword] = React.useState('');

  const createUser = (user) => {
    postUser(user)
    .then(r => {
      if (r.message === 'Success') {
        props.showAuth();
      }
    })
  }
  const [mutate] = useMutation(createUser)

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = new FormData();
    user.append("user[phone_number]", number);
    // user.append("user[password]", password);

    try {
      await mutate(user)

    } catch (error) {  
      console.log(error)
    }
  }

  const clearFields = () => {
    setNumber('');
    // setPassword('');
  }

  const openSignup = () => {
    document.querySelector('.css-lznm1u').click();
    document.getElementById('menubutton-6').click();

    setTimeout(() => {
      document.getElementById('signup-button').click();
    }, 1);
  }

  return (
    <Modal isOpen={props.openLoginModal} onClose={() => {
        clearFields();
        props.closeLogin();
      }
    }>
      <ModalOverlay/>
      <ModalContent mt='300px' borderRadius='20px'>
        <ModalHeader mt='10px'>Log in</ModalHeader>
        <ModalCloseButton 
          focusBorderColor='none'
          border='none'
          mt='15px'
          mr='5px'
        />
        <ModalBody>
          <Box w='100%' h='100%' className='show-modal'>
            <Box>
              <Box m='20px 0px'>
                <Input
                  value={number} placeholder="Phone Number"
                  onChange={e => setNumber(e.currentTarget.value)} 
                />
              </Box>
              {/* <Box m='20px 0px'>
                <Input
                  value={password} placeholder='Password' type="password"
                  onChange={e => setPassword(e.currentTarget.value)} 
                  />
              </Box> */}
            </Box>
            <Box mb='5px'>
              <Flex justifyContent='center' mb='20px' >
                <div className="container-modal">
                  <div>
                    <Button _hover={{bg: 'none'}} onClick={handleLogin}>
                      <span>
                        Send a One-Time-Password
                      </span>
                    </Button>
                  </div>
                </div>
              </Flex>
              <Box fontSize='14px'>
                <p>Don't have an account? <strong className='signup-instead' onClick={openSignup}>Sign up</strong></p>
              </Box>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
