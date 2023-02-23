import { useFetchEvent } from '../../hooks/useFetchEvent';

const EventsSubPage = () => {
  const event = useFetchEvent();

  return (
    <>
      {event &&
        <div>
          <p>{event.name}</p>
          <img src={event.images[0].url} width="200" />
        </div>
      }
    </>
  );
};

export default EventsSubPage;
