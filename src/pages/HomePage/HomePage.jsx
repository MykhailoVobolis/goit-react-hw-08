import PageTitle from "../../components/PageTitle/PageTitle";

import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={css.container}>
        <PageTitle>
          Hello! This is your phone book{" "}
          <span role="img" aria-label="Greeting icon">
            💁🏼
          </span>
        </PageTitle>
        <p>
          To start using, please register. After registration, you will be able to add, store and delete your friends'
          phone numbers. Now your contacts are always with you!
        </p>
      </div>
    </>
  );
}
