import { Field, FormikErrors, FormikTouched } from "formik";
import { PostFormData } from "../../../utils/types";

type Props = {
  errors: FormikErrors<PostFormData>;
  touched: FormikTouched<PostFormData>;
  target: "title" | "description";
  textarea?: boolean;
};

function TextField({ errors, touched, target, textarea }: Props) {
  const error = touched[target] && errors[target];

  return (
    <div className="mb-5">
      <label
        htmlFor={target}
        className={`block mb-2 text-sm font-medium  ${
          error ? "text-red-500" : "text-gray-900 dark:text-white"
        }`}
      >
        {target == "title" ? "Post Titile" : "Description"}
      </label>
      <Field
        id={target}
        name={target}
        component={textarea ? "textarea" : "input"}
        rows="4"
        className={`block p-2.5 w-full text-sm  rounded-lg border border-gray-300 text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 ${
          error
            ? "text-red-900 placeholder-red-700 border-red-500 dark:text-red-700 focus:ring-red-500 focus:border-red-500 dark:placeholder-red-700 dark:border-red-500"
            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }`}
        placeholder={target == "title" ? "Title" : "Content"}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Oops! </span>
          {errors[target]}
        </p>
      )}
    </div>
  );
}

export default TextField;
