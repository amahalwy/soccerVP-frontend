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
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";
import { useMutation } from 'react-query';

const API_HOST = process.env.NODE_ENV === 'production' ? 'production_url' : 'http://localhost:5000';

const makeUrl = (path) => `${API_HOST}${path}`;

const postUser = (user) => fetch(makeUrl('/users'), {
  method: 'POST',
  headers: {
    Authorization: localStorage.jwtToken,
  },
  body: user
}).then(r => r.json())

export default function Signup(props) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const createUser = (user) => {
    postUser(user)
    .then(r => {
      if (r.message === 'Success') {
        props.showAuth();
      }
    })
  }
  const [mutate] = useMutation(createUser)

  const handleSignup = async (e) => {
    e.preventDefault();
    const user = new FormData();
    user.append("user[first_name]", firstName);
    user.append("user[last_name]", lastName);
    user.append("user[age]", age);
    user.append("user[gender]", gender);
    user.append("user[phone_number]", number);
    user.append("user[email]", email);
    user.append("user[password]", password);

    try {
      await mutate(user)

    } catch (error) {  
      console.log(error)
    }
  }

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setAge('');
    setGender('');
    setNumber('');
    setEmail('');
    setPassword('');
  }

  return (
    <Modal isOpen={props.openSignupModal} onClose={() => {
      clearFields();
      props.closeSignup();
      }}>
        <ModalOverlay/>
        <ModalContent mt='200px' borderRadius='20px'>
          <ModalHeader mt='10px'>Create your profile</ModalHeader>
          <ModalCloseButton 
            focusBorderColor='none'
            border='none'
            mt='15px'
            mr='5px'
          />
          <ModalBody>
            <Box w='100%' h='100%' className='show-modal'>
              <Box>
                <Flex m='20px 0px'>
                  <Box mr='10px'>
                    <Input
                      value={firstName} placeholder="First Name"
                      onChange={e => setFirstName(e.currentTarget.value)}
                      />
                  </Box>
                  <Box>
                    <Input
                      value={lastName} placeholder="Last Name" 
                      onChange={e => setLastName(e.currentTarget.value)}/>
                  </Box>
                </Flex>
                <Flex m='20px 0px'>
                  <Box mr='10px'>
                    <Input 
                      value={age} placeholder="Age" 
                      onChange={e => setAge(e.currentTarget.value)}
                    />
                  </Box>
                  <Box>
                    <Input 
                      value={gender} placeholder="Gender" 
                      onChange={e => setGender(e.currentTarget.value)}  
                    />
                  </Box>
                </Flex>
                <Box m='20px 0px'>
                  <Input
                    value={number} placeholder="Phone Number" 
                    onChange={e => setNumber(e.currentTarget.value)} 
                  />
                </Box>
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
                  <Button w='100%' onClick={handleSignup}>Get me started!</Button>
                </Flex>
                <Box fontSize='14px'>
                  <p>Already have an account? <strong>Log in</strong></p>
                </Box>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}
