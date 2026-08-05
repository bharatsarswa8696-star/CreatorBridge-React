import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";

import CreatorLayout from "./layouts/CreatorLayout";

import CreatorDashboard from "./pages/Creator/Dashboard/CreatorDashboard";

function App() {

    return (

        <Routes>

            <Route

                path="/"

                element={<Home />}

            />

            <Route

                path="/creator"

                element={<CreatorLayout />}

            >

                <Route

                    path="dashboard"

                    element={<CreatorDashboard />}

                />

            </Route>

            <Route

                path="*"

                element={<Navigate to="/" replace />}

            />

        </Routes>

    );

}

export default App;