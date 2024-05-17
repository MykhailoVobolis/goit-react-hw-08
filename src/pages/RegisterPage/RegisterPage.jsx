import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Loader from "../../components/Loader/Loader";

import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/auth/selectors";

export default function RegisterPage() {
  const loading = useSelector(selectLoading);

  return (
    <div>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
      {loading && <Loader>Please wait</Loader>}
    </div>
  );
}
