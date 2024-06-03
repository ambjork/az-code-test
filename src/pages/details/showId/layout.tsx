import React from "react";
import Container from "../../../components/ui/container/Container.tsx";
import Button from "../../../components/ui/button/Button.tsx";
import {useNavigate} from "react-router-dom";

type Props = {
    children: React.ReactNode;
};
const DetailsLayout: React.FC<Props> = ({children}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }
    return (
        <Container>
            <section className="flex flex-col items-center">
                <Button label={"< Go back to search"} onClick={handleClick}/>
                {children}
            </section>
        </Container>
    )
}

export default DetailsLayout;