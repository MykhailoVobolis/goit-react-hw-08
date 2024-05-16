import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";

import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
    </div>
  );
}
