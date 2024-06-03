import {NestedTVShow} from "../../types/TVShow.ts";
import {useNavigate} from "react-router-dom";
import Typography from "../../components/ui/typography/Typography.tsx";

type Props = {
    item: NestedTVShow
}
const ShowCard = ({item}: Props) => {
    const {show} = item
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/show/${show.id}`)
    }

        return (
            <div className={"m-10 p-10 border border-black rounded hover:cursor-pointer"} onClick={handleClick}>
                <Typography variant={"h4"}>{show?.name || 'n/a'}</Typography>
                <Typography variant={"body-small"}>Genres: {show?.genres?.join(', ') || 'n/a'}</Typography>
                <Typography variant={"body-small"}>Average Rating: {show?.rating?.average || 'n/a'}</Typography>
                <Typography variant={"body-small"}>Official Site: {show?.officialSite ? <a
                    href={show.officialSite}>{show.officialSite}</a> : 'n/a'}</Typography>
            </div>
        );
};

export default ShowCard;