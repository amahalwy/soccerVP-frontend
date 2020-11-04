import React from 'react';
import {
  Box,
  List, 
  ListItem, 
  Heading,
} from "@chakra-ui/core";

export function ProfileFeature({ title, desc, ...rest }) {
  return (
    <Box w='30%' h='60vh' backgroundColor='white' p={8} shadow="md" borderWidth="1px" flex="1" rounded="md" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
    </Box>
  );
}

export function ListFeature({ title, desc, ...rest }) {
  return (
    <Box backgroundColor='white' p={8} shadow="md" borderWidth="1px" flex="1" rounded="md" {...rest} className='feature-list'>
      <Heading fontSize="xl">{title}</Heading>
      <List styleType="disc" className='pf-ft-list'>
        {/* props.user.RSVPs.map(RSVP => {
          return (
            <ListItem> ..... RSVP details ..... </ListItem>
          )
        }) */}

        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </List>
    </Box>
  );
}
