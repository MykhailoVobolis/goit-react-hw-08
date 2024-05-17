import PageTitle from "../../components/PageTitle/PageTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import Loader from "../../components/Loader/Loader";

import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/auth/selectors";

export default function LoginPage() {
  const loading = useSelector(selectLoading);

  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
      {loading && <Loader>Please wait</Loader>}
    </div>
  );
}
