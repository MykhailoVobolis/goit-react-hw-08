import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, selectName } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const value = useSelector(selectName);

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.inputSearch}
        type="text"
        value={value}
        onChange={(e) => dispatch(setStatusFilter(e.target.value))}
      />
    </div>
  );
}
