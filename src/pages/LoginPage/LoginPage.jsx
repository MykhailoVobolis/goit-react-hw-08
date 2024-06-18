import LoginForm from "../../components/LoginForm/LoginForm";
import Loader from "../../components/Loader/Loader";

import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/auth/selectors";

export default function LoginPage() {
  const loading = useSelector(selectLoading);

  return (
    <div>
      <LoginForm />
      {loading && <Loader>Please wait</Loader>}
    </div>
  );
}
