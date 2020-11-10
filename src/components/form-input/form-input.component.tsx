import React, { ChangeEvent } from "react";

import "./form-input.styles.scss";

export interface FormInputProps {
  label?: string;
  name: string;
  value?: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  onChange,
  label,
  ...otherProps
}) => (
  <div className="group">
    <input
      className="form-input"
      onChange={onChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps.value && otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
