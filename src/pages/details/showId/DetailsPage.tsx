import {useSelectedShow} from "../../../hooks/useSelectedShow.tsx";
import Layout from "./layout.tsx";
import Typography from "../../../components/ui/typography/Typography.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {TVShow} from "../../../types/TVShow.ts";
import ShowDetailCard from "./ShowDetailCard.tsx";

const DetailsPage = () => {
    const {showId} = useParams();
    const {result, loading, error} = useSelectedShow(showId);
    const [show, setShow] = useState<TVShow>();

    useEffect(() => {
        setShow(result);
    }, [result]);

    if (loading) {
        return (
            <Layout>
                <Typography variant={"h6"}>
                    Loading...
                </Typography>
            </Layout>
        )
    }

    if (error) {
        return (
            <Layout>
                <Typography variant={"h6"}>
                    {error.message}
                </Typography>
            </Layout>
        )
    }

    if (show) {
        return (
        <Layout>
            <ShowDetailCard show={show}/>
        </Layout>
        )
    }
}

export default DetailsPage