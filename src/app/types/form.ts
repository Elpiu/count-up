import {z, ZodType} from "zod";
import {IFormData} from "@/app/lib/ui-kit/form/typeFormProps";

export interface FirstFormData extends IFormData {
  eventName: string,
  fontStyle: string,
  bgImage: string,
  date: string,
}


export const formSchema: ZodType<FirstFormData> = z.object({
  eventName: z.string({required_error: "Required field"})
    .min(4, {message: "Too Short"})
    .max(28, {message: "Too Long"}),
  fontStyle: z.string().min(3),
  bgImage: z.string().min(1, {message: "Select One"}),
  date: z.string().min(1, {message: "Insert Date"})
})
