import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../Layout/ Layout";
import Loader from "../Loader/Loader";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader>Refreshing user please wait</Loader>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo="/" />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
