import React from 'react'
import { 
  Box,
  Heading, 
  Flex, 
  Text, 
  Button,
  InputGroup,
  Input,
  InputRightElement
} from "@chakra-ui/core";

const handleClick = () => {
  // handle submission of an event search
}

export default function Search() {

  return (
    <Flex 
      border="1px solid black"
      m="40px auto"
      w='60%'
      h='42px'
      borderRadius='20px'
      alignItems='center'
    >
      <InputGroup width="96%" ml='14px'>
        <Input
          border='none'
          pr="4.5rem"
          pl='0'
          placeholder="Search by name"
          focusBorderColor='none'
        />
        <Input
          border='none'
          pr="4.5rem"
          pl='0'
          placeholder="Search by location"
          focusBorderColor='none'
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick} focusBorderColor='none'>
            *Search logo*
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}
