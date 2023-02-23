import { fetchEventsByName } from '../../services/movieAPI';
import { useSearchParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const eventName = searchParams.get('eventname');

  useEffect(() => {
    if (eventName === '' || eventName === null) return;

    fetchEventsByName(eventName)
      .then(setEvents)
      .catch(error => console.log(error));
  }, [eventName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ eventname: form.elements.eventname.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="eventname" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {events.map(({ id, name }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default SearchPage;
