import "@testing-library/jest-dom";
import DetailsPage from "../pages/details/showId/DetailsPage.tsx";
import {render, screen, waitFor} from "@testing-library/react";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useNavigate: () => mockedUsedNavigate,
    useParams: () => ({
        showId: '123',
    }),
}));

describe(DetailsPage, () => {

    it("checking if the component renders the elements", async () => {
        render(<DetailsPage/>);
        await waitFor(() => {
            const goBackBtn = screen.getByRole("button");
            const detailCard = screen.getByTestId("detail-card");
            expect(goBackBtn).toBeInTheDocument();
            expect(detailCard).toBeInTheDocument();
        });
    });

    it("shows error states", () => {
        //TODO: to be implemented
    })

});