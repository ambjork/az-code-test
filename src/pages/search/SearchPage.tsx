import Layout from "./layout.tsx";
import Inputfield from "../../components/ui/inputfield/Inputfield.tsx";
import React, {useEffect, useState} from "react";
import useSearch from "../../hooks/useSearch.tsx";
import {TVShow} from "../../types/TVShow.ts";
import ShowContainer from "./ShowContainer.tsx";
import Button from "../../components/ui/button/Button.tsx";

const SearchPage: React.FC = () => {
    const [searchStr, setSearchStr] = useState<string>("");
    const [shows, setShows] = useState<Array<TVShow>>([]);
    const {results, search, loading, error} = useSearch();
    const [searchFieldTouched, setSearchFieldTouched] = useState<boolean>();

    useEffect(() => {
        setShows(results);
    }, [results]);

    function handleClick() {
        if (!searchStr) {
            return;
        }
        setSearchFieldTouched(true);
        search(searchStr);
    }

    function handleSearch(event: React.ChangeEvent) {
        const string = (event.target as HTMLInputElement).value
        setSearchStr(string);
    }


    return (
        <Layout>
            <div className={"flex flex-row items-baseline"}>
                <div className={"mb-2 mr-3"}>
                    <Inputfield label={"Title"} value={searchStr} placeholder={"Suits"}
                                onChange={(event: React.ChangeEvent) => handleSearch(event)}/>
                </div>
                <Button label={"Fetch shows"} onClick={handleClick} />
            </div>
            <div className={"flex flex-row items-baseline"}>
                {searchFieldTouched && <ShowContainer loading={loading} error={error} shows={shows}/>}
            </div>
        </Layout>
    )
}

export default SearchPage;