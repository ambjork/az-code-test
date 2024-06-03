import React from "react";
import Container from "../../components/ui/container/Container.tsx";

type Props = {
    children: React.ReactNode;
};
const SearchPageLayout: React.FC<Props> = ({children}) => {

    return (
        <Container>
            <section className="flex flex-col items-center">
                {children}
            </section>
        </Container>
    )
}

export default SearchPageLayout;