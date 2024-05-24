import React from "react";
import {FieldError, SubmitHandler, useForm} from "react-hook-form";
import FormField from "@/app/lib/ui-kit/form/FormField";
import {zodResolver} from "@hookform/resolvers/zod";
import {FirstFormData, formSchema} from "@/app/types/form";
import clsx from "clsx";
import {IFormData} from "@/app/lib/ui-kit/form/typeFormProps";
import {useRouter} from 'next/navigation';

export function StepperCustom() {
  const router = useRouter();


  const {
    register,
    handleSubmit,
    formState: {errors,},
    setError,
    setValue,
    control
  } = useForm<IFormData>({resolver: zodResolver(formSchema)});

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    const {date, eventName, fontStyle} = data;
    const serializedParams = new URLSearchParams({date, eventName, fontStyle}).toString();
    router.push(`/countdown?${serializedParams}`);
  }

  const handleClickOfImage = (event: string | undefined) => {
    setValue("bgImage", event)
  }
  //const imageList = [
  //  {alt: "Image", label: "Party", src: "/countdown-design/website-banner/party.jpg"},
  //  {alt: "Image", label: "Birthday", src: "/countdown-design/website-banner/birthday.jpg"},
  //  {alt: "Image", label: "Holiday", src: "/countdown-design/website-banner/holiday.jpg"},
  //];


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

          <FormField
            type="datetime-local"
            placeholder="Date and Time"
            name="date"
            label="What is the date and time of the Event?"
            register={register}
            error={errors.date as FieldError}
            control={control}
          />

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

//<FormSelect
//  name="fontStyle"
//  register={register}
//  error={errors.eventName as FieldError}
//  options={["wasde", "aasds"]}
//  control={control}
///>

//<SelectableImageList
//  handleClickOfImage={handleClickOfImage}
//  listImages={imageList}
//  error={errors.bgImage as FieldError}
//  name="image"
///>