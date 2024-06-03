import {TVShow} from "../../types/TVShow.ts";
import {useNavigate} from "react-router-dom";
import Typography from "../../components/ui/typography/Typography.tsx";

type Props = {
    item: TVShow
}
const ShowCard = ({item}: Props) => {
    const {show} = item
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/show/${show.id}`)
    }

    if (show) {
        return (
            <div className={"m-10 p-10 border border-black rounded hover:cursor-pointer"} onClick={handleClick}>
                {/*<img src={show.image.medium} alt={show.name} style={{ width: '100%' }} />*/}
                <Typography variant={"h4"}>{show.name}</Typography>
                <Typography variant={"body-small"}>Genres: {show.genres?.join(', ')}</Typography>
                <Typography variant={"body-small"}>Average Rating: {show.rating?.average}</Typography>
                <Typography variant={"body-small"}>Official Site: <a
                    href={show.officialSite}>{show.officialSite}</a></Typography>
            </div>
        );
    } else {
        return (
            <div className={"m-10 p-10 border border-black"}>
                Nothing to show
            </div>
        )
    }
};

export default ShowCard;