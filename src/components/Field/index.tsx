import { TextField } from "@material-ui/core";

interface IType {
  type: string;
  placeholder?: string;
  name: string;
  value: string;
  label?: string;
  onChange?: () => void;
}

export function Field(props: IType) {
  return props.type === "text" || props.type === "email" ? (
    <TextField
      label={props.label}
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      id={props.name}
      value={props.value}
      variant="outlined"
      onChange={props.onChange}
    />
  ) : (
    <>
      <TextField
        id="outlined-multiline-flexible"
        label={label}
        multiline
        maxRows={4}
        variant="outlined"
        // value={value}
        // onChange={handleChange}
      />
    </>
  );
}
