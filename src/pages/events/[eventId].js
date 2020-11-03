import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getEvent } from '../../utils/api';

const Event = () => {
  const router = useRouter();

  const { isLoading, error, data } = useQuery(['event', router.query.eventId], getEvent);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      {data && data.location}
    </div>
  );
};

export default Event;
