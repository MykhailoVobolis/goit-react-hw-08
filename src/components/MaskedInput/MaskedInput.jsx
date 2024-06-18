import { IMaskInput } from "react-imask";
import { TextField } from "@mui/material";
import { forwardRef } from "react";

const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      inputRef={ref}
      mask="+{38}(000)000-00-00"
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const MaskedInput = ({ field, form, ...props }) => {
  return (
    <TextField
      {...props}
      {...field}
      InputProps={{
        inputComponent: TextMaskCustom,
        inputProps: {
          name: field.name,
          value: field.value,
          onChange: field.onChange,
          onBlur: field.onBlur,
        },
      }}
    />
  );
};

// Обов'язкове додавання відображуваного ім'я у визначені компонента на вимогу eslint
TextMaskCustom.displayName = "ContactsCollection";

export default MaskedInput;
