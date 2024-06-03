import Typography from "../../components/ui/typography/Typography.tsx";
import ShowCard from "./ShowCard.tsx";
import {TVShow} from "../../types/TVShow.ts";

type Props = {
    shows: Array<TVShow>
    loading: boolean,
    error: Error | undefined,
}
const ShowContainer = ({shows, loading, error}: Props) => {
    if (loading) {
        return (
            <div className="container">
                <Typography variant={"h6"}>Loading...</Typography>
            </div>
        )
    }

    if (error) {
        console.error(error);
        return (
            <div className="container">
                <Typography variant={"h6"} color={"text-error"}>Something went wrong. Please try again later.</Typography>
            </div>
        );
    }

    if (shows) {
        if (shows.length === 0) {
            return (
                <div className="container">
                    <Typography variant={"h6"}>
                        Your search didn't match any tv shows. Try something else.
                    </Typography>
                </div>
            )
        }
        return (
            <div className="w-full">
                {shows.map((item: TVShow) => {
                    return <ShowCard item={item} key={item.show.id}/>
                })}
            </div>
        )
    }


}

export default ShowContainer;