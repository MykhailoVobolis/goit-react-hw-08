import PageTitle from "../../components/PageTitle/PageTitle";

import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={css.container}>
        <PageTitle>
          Phone book welcome page{" "}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </PageTitle>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ea, error quos exercitationem sequi eum
          impedit sint blanditiis accusantium omnis praesentium pariatur, labore perspiciatis consectetur nesciunt!
          Delectus excepturi nostrum obcaecati!
        </p>
      </div>
    </>
  );
}
