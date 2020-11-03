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


export default function CreateEvent(props) {
  const [location, setLocation] = React.useState('');
  const [max, setMax] = React.useState(0);
  const [cost, setCost] = React.useState(0);
  const [start, setStart] = React.useState('');
  const [end, setEnd] = React.useState('');

  const handleCreate = () => {

  }

  return (
    <Modal isOpen={props.openCreateModal} onClose={() => {
        clearFields();
        props.closeCreate();
      }
    }>
      <ModalOverlay/>
      <ModalContent mt='300px' borderRadius='20px'>
        <ModalHeader mt='10px'>Create a New Event</ModalHeader>
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
                  value={location} placeholder="Location"
                  onChange={e => setLocation(e.currentTarget.value)} 
                />
              </Box>
              <Flex m='20px 0'>
                <Box mr='10px'>
                  <Input
                    value={max} placeholder='Max players'
                    onChange={e => setMax(e.currentTarget.value)} 
                  />
                </Box>
                <Box>
                  <Input
                    value={cost} placeholder='Cost per player'
                    onChange={e => setCost(e.currentTarget.value)} 
                  />
                </Box>
              </Flex>
              <Flex m='20px 0'>
                <Box mr='10px'>
                  {/* <Input
                    value={start} placeholder='Start time' type=''
                    onChange={e => setStart(e.currentTarget.value)} 
                  />  */}

                </Box>
                <Box>
                  <Input
                    value={end} placeholder='Password' type="password"
                    onChange={e => setEnd(e.currentTarget.value)} 
                  />
                </Box>
              </Flex>
            </Box>
            <Box mb='5px'>
              <Flex justifyContent='center' mb='20px' >
                <Button w='100%' onClick={handleCreate}>Create event!</Button>
              </Flex>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
