import {useCallback, useEffect, useState} from "react";
import {DetailedTVShow} from "../types/TVShow.ts";
import {getShowById} from "../api/getShowById.ts";

export const useSelectedShow = (id: string | undefined) => {
    const [result, setResult] = useState<DetailedTVShow>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | undefined>(undefined);

    const getSelectedShowById = useCallback(async () => {
                if (!id) {
                    setError(new Error("Missing show id!"));
                    return;
                }

                setLoading(true);
                try {
                    const response = await getShowById(id);
                    if (response) setResult(response);
                } catch (error) {
                    setError(new Error("An error occurred. Please try again later."));
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            }, [id]
        )
    ;

    useEffect(() => {
        getSelectedShowById();
    }, [getSelectedShowById]);

    return {result, loading, error};
}
