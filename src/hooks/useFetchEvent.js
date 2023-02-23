import { fetchEventById } from '../services/movieAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);

  return event;
};
