import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter, selectName } from "../../redux/filters/slice";
import { TextField } from "@mui/material";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const value = useSelector(selectName);

  return (
    <div className={css.container}>
      {/* <p className={css.lable}>Find contacts by name or number</p>
      <input
        className={css.inputSearch}
        type="text"
        value={value}
        onChange={(e) => dispatch(setStatusFilter(e.target.value))}
      /> */}
      <TextField
        variant="standard"
        label="Find contacts by name or number"
        type="text"
        value={value}
        onChange={(e) => dispatch(setStatusFilter(e.target.value))}
        sx={{ width: "330px" }}
      />
    </div>
  );
}
