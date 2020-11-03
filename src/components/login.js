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

export default function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    user.append("user[email]", email);
    user.append("user[password]", password);
  }

  return (
    <Modal isOpen={props.openLoginModal} onClose={props.closeLogin}>
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
                    value={email} placeholder="Email"
                    onChange={e => setEmail(e.currentTarget.value)} 
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
