import {FieldError} from "react-hook-form";
import React from "react";


export type FieldErrorLabelProps = {
  error?: FieldError;
}

const FieldErrorLabel = (props: FieldErrorLabelProps) => {

  return <div className="label">
    {props.error &&
        <span className="label-text-alt error-message text-error">
              {props.error.message}
            </span>
    }
  </div>
}

export default FieldErrorLabel;