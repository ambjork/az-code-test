import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchPage from "../pages/search/SearchPage.tsx";

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => ({
        navigate: mockedNavigator
    }),
}));

describe(SearchPage, () => {
    it("checking if the component renders the elements", () => {
        render(<SearchPage />);
        const searchField = screen.getByText("Title");
        const fetchButton = screen.getByText("Fetch shows");
        expect(searchField).toBeInTheDocument();
        expect(fetchButton).toBeInTheDocument();
    });


});