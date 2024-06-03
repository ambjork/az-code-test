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
                <Typography variant={"h6"}>Searching...</Typography>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container">
                <Typography variant={"h6"} color={"text-error"}>{error.message}</Typography>
            </div>
        )
    }

    if (shows) {
        //TODO: on the first search, don't show this message
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