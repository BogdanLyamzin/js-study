import {useState, useEffect} from "react";

const useFetch = ({fetchApi, initialState = []})=> {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            setLoading(true);
            const data = await fetchApi();
            setState(data);
          } catch (error) {
            setError(error.response?.data?.message || error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchPosts();
      }, [fetchApi]);

      return {
        state,
        setState,
        loading,
        setLoading,
        error,
        setError,
      }
}

export default useFetch;