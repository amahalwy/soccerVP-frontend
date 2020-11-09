import React from 'react';
import {
  Flex,
  Stack, 
} from "@chakra-ui/core";
import BottomFeature from './BottomFeature';
import BottomFeaturePaypal from './BottomFeaturePaypal';

export default function StackEx(props) {

  const owner = props.event.owner;

  const ownerBox = `This event is organized by ${owner.first_name + ' ' + owner.last_name}. 
                    Reach out to them at ${owner.phone_number} for any questions.`;
  const payBox = `It's easy. Simply use paypal's quick checkout!`

  return (
    <Stack >
      <Flex>
        <BottomFeature
          title="Organizer"
          desc={ownerBox}
        />
        <BottomFeaturePaypal
          title="How to register"
          desc={payBox}
          event={props.event}
        />
      </Flex>
    </Stack>
  );
}