import { fetchTeams } from '../../services/teams';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);
  console.log(teams);

  return (
    <ul>
      {teams.map((team) => (
        <li key={team.id}>
          <Link key={team.id} to={`/teams/${team.id}`}>
            {team.name}
          </Link>
        </li>
      ))}
    </ul>
    // <div>
    //   <p>i am the Teams component</p>
    //   {teams.map((team) => {
    //     return team.name;
    //   })}
    // </div>
  );
}

{
  /* <ul className="book-list" aria-label="book list">
      {books.map((book) => (
        <li key={book.book_id}>
          <Link key={book.book_id} to={`/books/${book.book_id}`}>
            <Book book={book} />
          </Link>
        </li>
      ))}
    </ul> */
}
