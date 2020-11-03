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
// import {postUser} from '../utils/api'

const API_HOST = process.env.NODE_ENV === 'production' ? 'production_url' : 'http://localhost:5000';

const makeUrl = (path) => `${API_HOST}${path}`;

const postUser = (user) => fetch(makeUrl('/users'), {
      method: 'POST',
      headers: {
        Authorization: '... get the localStorage JWT key ...',
      },
      body: user
    }).then(r => r.json())

export default function Login(props) {
  const [number, setNumber] = React.useState('');
  const [password, setPassword] = React.useState('');

  const createUser = (user) => {
    postUser(user);
  }
  const [mutate] = useMutation(createUser)

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = new FormData();
    
    user.append("user[number]", number);
    user.append("user[password]", password);

    try {
      await mutate(user)

    } catch (error) {  
      console.log(error)
    }
  }

  const clearFields = () => {
    setNumber('');
    setPassword('');
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
              <Box m='20px 0px'>
                <Input
                  value={password} placeholder='Password' type="password"
                  onChange={e => setPassword(e.currentTarget.value)} 
                  />
              </Box>
            </Box>
            <Box mb='5px'>
              <Flex justifyContent='center' mb='20px' >
                <Button w='100%' onClick={handleLogin}>Log me in!</Button>
              </Flex>
              <Box fontSize='14px'>
                <p>Don't have an account? <strong>Sign up</strong></p>
              </Box>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
