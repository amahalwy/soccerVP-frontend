import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getUser } from '../../utils/api';
import {
  Box,
} from '@chakra-ui/core';

export default function User() {

  const router = useRouter();

  const { isLoading, error, data } = useQuery(['user', router.query.userId], getUser);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  const newData = data.data

  return (
    <Box>
      
    </Box>
  )
}
