import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SearchPage from "./pages/search/SearchPage.tsx";
import {ErrorBoundary} from "react-error-boundary";
import ErrorBoundaryFallback from "./pages/error-boundary-fallback/ErrorBoundaryFallback.tsx";
import DetailsPage from "./pages/details/showId/DetailsPage.tsx";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <ErrorBoundary fallback={<ErrorBoundaryFallback/>}>
                            <SearchPage/>
                        </ErrorBoundary>
                    }/>
                    <Route path="/show/:showId" element={
                        <ErrorBoundary fallback={<ErrorBoundaryFallback/>}>
                            <DetailsPage/>
                        </ErrorBoundary>
                    }/>
                </Routes>
            </Router>
        </>
    )
}

export default App
