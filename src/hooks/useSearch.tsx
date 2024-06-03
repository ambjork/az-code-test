import {getShows} from "../api/getShows.ts";
import {useCallback, useState} from "react";
import {TVShow} from "../types/TVShow.ts";

const useSearch = () => {
    const [results, setResults] = useState<Array<TVShow>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | undefined>(undefined);


    const search = useCallback(async (query: string) => {
    setLoading(true);
        try {
            const response = await getShows(query);
        if (response) setResults(response);
        } catch (err) {
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(new Error("An error occurred when fetching data."));
            }
        } finally {
        setLoading(false);
        }
    }, []);

    return { results, search, loading, error };
};

export default useSearch;