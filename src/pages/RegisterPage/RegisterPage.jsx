import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import { useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/auth/selectors";

export default function RegisterPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
      {loading && <Loader>Loading message</Loader>}
      {error && <Error>Error message</Error>}
    </div>
  );
}
