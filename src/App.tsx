import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.tsx";
import NotFound from "./pages/not-found.tsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
