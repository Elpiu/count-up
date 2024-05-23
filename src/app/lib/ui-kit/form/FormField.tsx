import React, {HTMLInputTypeAttribute} from "react";
import clsx from "clsx";
import {Control, FieldError, UseFormRegister} from "react-hook-form";
import {IFormData} from "@/app/lib/ui-kit/form/typeFormProps";
import ErrorLabel from "@/app/lib/ui-kit/ErrorLabel";

export type FormFieldProps = {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
  label?: string;
  register: UseFormRegister<IFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  control?: Control<IFormData, any>
};

/**
 * How to use
 * 1. Declare in your component
 *   const {
 *     register,
 *     handleSubmit,
 *     formState: {errors},
 *     setError,
 *     control
 *   } = useForm<FirstFormData>({resolver: zodResolver(formSchema)});
 *
 * 2. Extends this interface with your controls
 * export interface FirstFormData extends IFormData {
 *   eventName: string,
 *   fontStyle: string,
 * }
 *
 * 3. Create your validation data with Zod
 * export const formSchema: ZodType<FormData> = z.object({
 *   eventName: z.string({required_error: "Required field"})
 *     .min(4, {message: "Too Short"})
 *     .max(28, {message: "Too Long"}),
 *   fontStyle: z.string().min(3),
 *   bgImage: z.string(),
 *   date: z.date()
 * })
 *
 *
 * @param ffp
 * @constructor
 */
const FormField: React.FC<FormFieldProps> = (ffp) => {

  const isDirty = ffp.control?._getDirty(ffp.name)

  const inputStyle = clsx({
    ["input input-bordered w-full"]: true,
    ['input-error']: ffp.error,
    ['input-primary']: (isDirty && !ffp.error)
  })


  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{ffp.label}</span>
      </div>
      <input className={inputStyle}
             type={ffp.type}
             placeholder={ffp.placeholder}
             {...ffp.register(ffp.name, {valueAsNumber: ffp.valueAsNumber})}
      />
      <ErrorLabel error={ffp.error}/>
    </label>
  )
}

export default FormField