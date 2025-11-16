import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import DashboardMain from "./components/dashboard/DashboardMain";
import Calendar from "./components/calander/Calendar";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Layout from "./components/Layout";
import Review from "./components/review/Review";
import CurrentPatients from "./components/currentPatients/CurrentPatients";
import PatientDetails from "./components/patientDetails/PatientDetails";
import PastPatients from "./components/pastPatients/PastPatients";

import { AuthProvider, useAuth } from "./context/AuthContext";

function PrivateRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout>
                <DashboardMain />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <PrivateRoute>
              <Layout>
                <Calendar />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/doctor-reviews"
          element={
            <PrivateRoute>
              <Layout>
                <Review />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/current-patients"
          element={
            <PrivateRoute>
              <Layout>
                <CurrentPatients />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/patient/:patientName"
          element={
            <PrivateRoute>
              <Layout>
                <PatientDetails />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/past-patients"
          element={
            <PrivateRoute>
              <Layout>
                <PastPatients />
              </Layout>
            </PrivateRoute>
          }
        />

        {/* Catch-all - redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}
