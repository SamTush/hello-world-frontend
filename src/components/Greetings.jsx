import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

function Greetings() {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div className="flex justify-center font-bold text-5xl mt-9">
      <h1>
        Random Greeting:
        {loading ? 'Loading...' : greeting}
      </h1>
      {error && (
      <p>
        Error:
        {error}
      </p>
      )}
    </div>
  );
}

export default Greetings;
