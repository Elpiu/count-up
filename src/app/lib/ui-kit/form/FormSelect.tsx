import React from "react";
import clsx from "clsx";
import {Control, FieldError, UseFormRegister} from "react-hook-form";
import {IFormData} from "@/app/lib/ui-kit/form/typeFormProps";
import ErrorLabel from "@/app/lib/ui-kit/ErrorLabel";


export type FormSelectProps = {
  placeholder?: string;
  name: string;
  register: UseFormRegister<IFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  control?: Control<IFormData, any>
  options: string[]
};

const FormSelect: React.FC<FormSelectProps> = (ffp) => {

  const isDirty = ffp.control?._getDirty(ffp.name)

  const inputStyle = clsx({
    ["select w-full"]: true,
    ['select-error']: ffp.error,
    ['select-success']: (isDirty && !ffp.error)
  })

  return (

    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">Select Font</span>
      </div>
      <select className={inputStyle}
              {...ffp.register(ffp.name, {valueAsNumber: ffp.valueAsNumber})}
      >
        {ffp.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ErrorLabel error={ffp.error}/>
    </label>
  )
}

export default FormSelect