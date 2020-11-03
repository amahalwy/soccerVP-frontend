import React from 'react'
import { 
  Box,
  Heading, 
  Flex, 
  Text, 
  Button,
  IconButton,
  InputGroup,
  Input,
  InputRightElement
} from "@chakra-ui/core";

export default function Search() {
  const [eventName, setName] = React.useState('');
  const [eventLocation, setLocation] = React.useState('');

  const handleSearch = () => {
  // handle submission of an event search
    const event = new FormData();
    event.append('event[name]', eventName);
    // event.append('event[location]', eventLocation)
  }

  return (
    <Flex 
      m="200px auto"
      w='60%'
      h='50px'
      borderRadius='20px'
      justifyContent='center'
      alignItems='center'
    >
      <InputGroup 
        h='100%' w="100%" ml='10px' 
        zIndex='3' border='1px solid black'
        borderRadius='20px'
      >
        <Input
          h='100%'
          w='80%'
          border='none'
          borderRight='1px solid black'
          borderRadius='20px 0 0 20px'
          pl='1rem'
          placeholder="Search by name"
          focusBorderColor='none'
          value={eventName}
          onChange={e => setName(e.currentTarget.value)}
        />
        <Input
          h='100%'
          border='none'
          borderRight='1px solid black'
          borderRadius='0 20px 20px 0'
          pr="4.5rem"
          pl='1rem'
          placeholder="Search by location"
          focusBorderColor='none'
          value={eventLocation}
          onChange={e => setLocation(e.currentTarget.value)}
        />
        <InputRightElement width="4.5rem" h="70%" m='7px 15px' >
          {/* <Button 
            h="100%" 
            size="sm" 
            focusBorderColor='none'
            zIndex='100'
            onClick={handleSearch} 
          >
            *Search logo*
          </Button> */}

          <IconButton aria-label="Search database" icon="search" />
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}
