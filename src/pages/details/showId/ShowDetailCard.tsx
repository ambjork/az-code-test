import Typography from "../../../components/ui/typography/Typography.tsx";
import {DetailedTVShow} from "../../../types/TVShow.ts";
import DOMPurify from 'dompurify';

type Props = {
    show: DetailedTVShow
}
const ShowDetailCard = ({show}: Props) => {
    if (show) {
        return (
            <div className={"m-10 p-10 border border-black"} data-testid={"detail-card"}>
                {/*<img src={show.image.medium} alt={show.name} style={{ width: '100%' }} />*/}
                <Typography variant={"h4"}>{show.name || 'n/a'}</Typography>
                <Typography variant={"body-small"}>Language: {show.language || 'n/a'}</Typography>
                <Typography variant={"body-small"}>Type: {show.type || 'n/a'}</Typography>
                <Typography variant={"body-small"}>Genres: {show.genres.join(', ') || 'n/a'}</Typography>
                <Typography variant={"body-small"}>Status: {show.status || 'n/a'}</Typography>
                <Typography variant={"body-small"}>Runtime: {`${show.runtime} mins` || 'n/a'}</Typography>
                <Typography
                    variant={"body-small"}>Dates: {show.premiered || 'n/a'} to {show.ended || 'n/a'}</Typography>
                <Typography variant={"body-small"}>Average Runtime: {show.averageRuntime || 'n/a'} mins</Typography>
                <Typography variant={"body-small"}>Average Rating: {show.rating?.average || 'n/a'}</Typography>
                <Typography variant={"body-small"}>Official Site: {show.officialSite ?
                    <a href={show.officialSite}>
                        {show.officialSite}
                    </a>
                    : <>n/a</>}
                </Typography>
                <br/>
                <Typography variant={"body-small"}>
                    {show.summary && <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(show.summary)}}/>}
                </Typography>
            </div>
        )
    } else {
        return (
            <div className={"m-10 p-10 border border-black"}>
                <Typography variant={"h6"} color={"text-error"}>
                    Couldn't find show.
                </Typography>
            </div>
        )
    }
}

export default ShowDetailCard;