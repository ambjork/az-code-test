import {useEffect, useState} from "react";
import {TVShow} from "../types/TVShow.ts";
import {getShowById} from "../api/getShowById.ts";

export const useSelectedShow = (id: string | undefined) => {
    const [result, setResult] = useState<TVShow>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | undefined>(undefined);

    const getSelectedShowById = async () => {
        if (!id) throw new Error("Missing show id!")

        setLoading(true);
        try {
            const response = await getShowById(id);
            if (response) setResult(response);
        } catch (error) {
            if (error instanceof Error) {
                setError(error);
            } else {
                setError(new Error("An error occurred"));
            }
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getSelectedShowById();
    }, [id]);

    return {result, loading, error};
}
