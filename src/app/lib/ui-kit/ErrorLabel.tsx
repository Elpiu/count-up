import {FieldError} from "react-hook-form";
import React from "react";


export type ErrorLabelProps = {
  error?: FieldError | string;
}

const ErrorLabel = (props: ErrorLabelProps) => {


  return <div className="label">
    {props.error &&
        <span className="label-text-alt error-message text-error">
          {typeof props.error === "string" ? props.error : props.error.message}
        </span>
    }
  </div>
}

export default ErrorLabel;