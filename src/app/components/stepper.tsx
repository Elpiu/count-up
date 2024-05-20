import React from "react";
import {FieldError, useForm} from "react-hook-form";
import FormField from "@/app/lib/ui-kit/form/FormField";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema} from "@/app/types/form";
import clsx from "clsx";
import {IFormData} from "@/app/lib/ui-kit/form/typeFormProps";
import FormSelect from "@/app/lib/ui-kit/form/FormSelect";
import SelectableImageList from "@/app/components/SelectableImageList";


export function StepperCustom() {


  const {
    register,
    handleSubmit,
    formState: {errors,},
    setError,
    control
  } = useForm<IFormData>({resolver: zodResolver(formSchema)});


  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  }

  const handleClickOfImage =  (event: string | undefined) => {
    console.log("Click of image", event);
  }


  return <div className="">
    <div className="px-2 pb-4 lg:px-52">
      <div className="bg-gray-200 p-4 mb-4 rounded-2xl">
        <div>
          <h2 className="sr-only">Steps</h2>
          <div>
            <p className="text-2xl font-medium text-center align-center">Create your counter</p>

          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 p-4 rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            type="text"
            placeholder="Event Name"
            name="eventName"
            label="What is the name of the Event?"
            register={register}
            error={errors.eventName as FieldError}
            control={control}
          />
          <FormSelect
            name="fontStyle"
            register={register}
            error={errors.eventName as FieldError}
            options={["we", "as"]}
            control={control}
          />

          <FormField
            type="datetime-local"
            placeholder="Date and Time"
            name="date"
            label="What is the date and time of the Event?"
            register={register}
            error={errors.date as FieldError}
            control={control}
          />
          <SelectableImageList
            handleClickOfImage={handleClickOfImage}
            listImages={[
              {alt:"Image",label:"Party", src:"/countdown-design/website-banner/party.jpg"},
              {alt:"Image",label:"Birthday", src:"/countdown-design/website-banner/birthday.jpg"},
              {alt:"Image",label:"Holiday", src:"/countdown-design/website-banner/holiday.jpg"},
            ]}

            name="image" />
          <button
            type="submit"
            className={clsx("submit-button btn btn-primary")}
          >
            Create!
          </button>
        </form>
      </div>

    </div>
  </div>

}