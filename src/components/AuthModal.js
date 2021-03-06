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
import { useRouter } from 'next/router';
import { postSession } from '../utils/api';

export default function AuthModal(props) {
  const [code, setCode] = React.useState('');
  const [number, setNumber] = React.useState('');

  const router = useRouter();
    
  const clearFields = () => {
    setNumber('');
    setCode('');
  }

  const createSession = (req) => {
    postSession(router, req);
  }
  const [mutate] = useMutation(createSession)

  const handleLogin = async (e) => {
    e.preventDefault();

    const req = new FormData();
    req.append("phone_number", number);
    req.append("code", code);

    try {
      await mutate(req);

    } catch (error) {  
      console.log(error);
    }
  }

  return (
    <Modal isOpen={props.openAuth} onClose={() => {
        clearFields();
        props.closeAuth();
      }
    }>
      <ModalOverlay/>
      <ModalContent mt='300px' borderRadius='20px'>
        <ModalHeader mt='10px'>Complete sign in</ModalHeader>
        <ModalCloseButton 
          focusBorderColor='none'
          border='none'
          mt='15px'
          mr='5px'
        />
        <ModalBody>
          <Box w='100%' h='100%'>
            <Box mb='20px'>
              <Input
                value={number} placeholder='Confirm Your Number'
                onChange={e => setNumber(e.currentTarget.value)} 
              />
            </Box>
            <Box mb='20px'>
              <Input
                value={code} placeholder='Your OTP code'
                onChange={e => setCode(e.currentTarget.value)} 
              />
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
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}