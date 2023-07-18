import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_REPOS } from '../graphql/queries';

const useRepositories = () => {
  const { loading, error, data } = useQuery(ALL_REPOS, {
    fetchPolicy: 'cache-and-network',
  });
  const [repositories, setRepositories] = useState();

  const fetchRepositories = async () => {
    if (loading) return

    console.log(data)

    const result = data.repositories
    setRepositories(result);
  };

  useEffect(() => {
    fetchRepositories();
  }, [loading]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;