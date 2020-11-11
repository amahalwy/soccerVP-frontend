import React from 'react';
import TopStack from './TopStack';

export default function TopCards(props) {  
  const newData = props.event;

  return(
    <TopStack event={newData} />
  );
}