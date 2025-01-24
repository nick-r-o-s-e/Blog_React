import * as Yup from "yup";

export const postValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(255, "Title must be at most 255 characters"),
  description: Yup.string().required("Description is required"),
  status: Yup.string().oneOf(
    ["draft", "published"],
    "Status must be either draft or published"
  ),
});
