import { fetchEvents } from '../../services/movieAPI';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  const links = events.map(({ id, name }) => (
    <li key={id}>
      <Link to={id}>{name}</Link>
    </li>
  ));

  return (
    <>
      <ul>{links}</ul>
      <Outlet />
    </>
  );
};

export default EventsPage;
