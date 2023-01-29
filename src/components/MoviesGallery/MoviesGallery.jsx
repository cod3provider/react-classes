const MoviesGallery = ({movies, showModal}) => {
  return (
    <ul>
      {movies.map(({title, id, vote_count: votes, backdrop_path: image}) => (
        <li key={id}>
          <p>{title}</p>
          <p>Votes: {votes}</p>
          <button
            type="button"
            onClick={
              () => {showModal({src: image, alt: title})}
            }
          >Show Post</button>
        </li>))
      }
    </ul>
  )
}

export default MoviesGallery;
