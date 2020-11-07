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
import Datetime from "react-datetime";
import { useMutation, useQuery } from 'react-query';

const API_HOST = process.env.NODE_ENV === 'production' ? 'production_url' : 'http://localhost:5000';

const makeUrl = (path) => `${API_HOST}${path}`;

const postEvent = (event) => fetch(makeUrl('/events'), {
  method: 'POST',
  headers: {
    Authorization: localStorage.jwtToken,
  },
  body: event
}).then(r => r.json())



export default function CreateEvent(props) {
  const [location, setLocation] = React.useState('');
  const [max, setMax] = React.useState(null);
  const [cost, setCost] = React.useState(null);
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);

  const createEvent = (event) => {
    postEvent(event)
    .then(r => {
      if (r.message === 'Success') {
        props.showAuth();
      }
    })
  }
  const [mutate] = useMutation(createEvent);

  const handleCreate = async (e) => {
    e.preventDefault();
    const event = new FormData();
    
    event.append('event[user_id]', localStorage.currentUserId)
    event.append('event[location]', location);
    event.append('event[max_participants]', max);
    event.append('event[cost_per_participant]', cost);
    event.append('event[starts_at]', start);
    event.append('event[ends_at]', end)

     try {
      await mutate(event)

    } catch (error) {  
      console.log(error)
    }
  }

  const clearFields = () => {
    setLocation('');
    setMax('');
    setCost('');
    setStart('');
    setEnd('');
  }

  return (
    <Modal isOpen={props.openCreate} onClose={() => {
        clearFields();
        props.closeCreate();
      }
    }>
      <ModalOverlay/>
      <ModalContent mt='300px' borderRadius='20px'>
        <ModalHeader mt='10px'>Create a new event</ModalHeader>
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


              <Flex m='20px 0' w='100%'>
                <Datetime
                  inputProps={{placeholder: "Start date and time"}}
                  onChange={e => setStart(e._d)}
                />
                <Datetime
                  dateFormat={false}
                  value={undefined}
                  inputProps={{ placeholder: "Time Picker Here" }}
                  onChange={e => setEnd(e._d)}
                />
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
