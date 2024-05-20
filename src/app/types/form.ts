import {z, ZodType} from "zod";
import {IFormData} from "@/app/lib/ui-kit/form/typeFormProps";

export interface FirstFormData extends IFormData {
  eventName: string,
  fontStyle: string,
  bgImage: string,
  date: Date,
}


export const formSchema: ZodType<FirstFormData> = z.object({
  eventName: z.string({required_error: "Required field"})
    .min(4, {message: "Too Short"})
    .max(28, {message: "Too Long"}),
  fontStyle: z.string().min(3),
  bgImage: z.string(),
  date: z.date()
})
