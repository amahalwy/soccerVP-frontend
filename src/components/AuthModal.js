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

export default function AuthModal(props) {
  const [code, setCode] = React.useState('');
    
  const clearFields = () => {
    setCode('');
  }

  const handleLogin = () => {
    
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
                value={code} placeholder='Your OTP code'
                onChange={e => setCode(e.currentTarget.value)} 
              />
            </Box>
            <Box mb='5px'>
              <Flex justifyContent='center' mb='20px' >
                <Button w='100%' onClick={handleLogin}>Log me in!</Button>
              </Flex>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )

}
