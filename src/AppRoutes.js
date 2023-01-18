import React, { createContext, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardIndex from './components/dashboard';

export const AppContent = createContext({});

export const ProtectedRoute = ({ children }) => {
    const token = '35467890';
    if (!token) {
        // user is not authenticated
        return <Navigate to="/" />;
    }
    return children;
};

const AppRoutes = () => {
    const toastRef = useRef(null);
    return (
        <AppContent.Provider value={{ toastRef }}>
            <Router>
                <Routes>
                    {/*NON PROTECTED ROUTES*/}
                    <Route path="/" exact element={<DashboardIndex />} />
                    <Route
                        path="/dashboard-new"
                        exact
                        element={
                            <ProtectedRoute>
                                <DashboardIndex />
                            </ProtectedRoute>
                        }
                    />
                    {/*<Route path="*" exact element={<NotFoundPage />} />*/}
                </Routes>
            </Router>
        </AppContent.Provider>
    );
};

export default AppRoutes;
