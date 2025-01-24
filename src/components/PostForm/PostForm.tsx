import { useState, useEffect } from "react";
import { createPost, fetchPost, updatePost } from "../../api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postValidationSchema } from "../../utils/validation";
import { Field, Form, Formik } from "formik";
import FormSkeleton from "./components/FormSkeleton";
import ErrorInfo from "../../components/ErrorInfo";
import LoadingOverlay from "./components/LoadingOverlay";
import TextField from "./components/TextField";

type Props = { isEdit: boolean };

const PostForm = ({ isEdit }: Props) => {
  const [initialValues, setInitialValues] = useState({
    title: "",
    description: "",
    status: "draft",
  });

  const [loading, setLoading] = useState<boolean>(isEdit);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [sendingPost, setSendingPost] = useState(false);

  useEffect(() => {
    if (isEdit && id) {
      const fetch = async () => {
        try {
          const { title, description, status } = await fetchPost(Number(id));

          setInitialValues({
            title,
            description,
            status,
          });
        } catch {
          setError("Post not found or an error occurred.");
        } finally {
          setLoading(false);
        }
      };
      fetch();
    }
  }, [isEdit, id]);

  const handleSubmit = async (values: {
    title: string;
    description: string;
    status: string;
  }) => {
    setSendingPost(true);
    console.log(values);
    
    try {
      if (isEdit && id) {
        await updatePost(Number(id), values);
      } else {
        await createPost(values);
      }
      navigate("/");
    } catch {
      setError("Failed To Perform Action.");
    }
  };

  if (error) {
    return (
      <div className="pt-32">
        <ErrorInfo title="Error Occurred" description={error} />
      </div>
    );
  }

  return loading ? (
    <FormSkeleton />
  ) : (
    <>
      <div className="relative overflow-hidden mx-4 w-full p-4 md:p-8 rounded-lg mt-9 bg-slate-800 max-w-[600px] h-fit">
        {sendingPost && <LoadingOverlay />}

        <Formik
          initialValues={initialValues}
          validationSchema={postValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="mx-auto ">
              <TextField errors={errors} touched={touched} target={"title"} />

              <div className="mb-5 ">
                <label
                  htmlFor="select"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Status
                </label>
                <Field
                  as="select"
                  id="status"
                  name="status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </Field>
              </div>
              <TextField
                errors={errors}
                touched={touched}
                target={"description"}
                textarea
              />

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={sendingPost}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {isEdit ? "Update" : "Create"} Post
                </button>
                <Link
                  to="/"
                  className="inline-flex items-center  font-medium border-2 border-blue-700 rounded-lg px-5 py-2.5 text-sm text-blue-600 dark:text-blue-500 hover:bg-blue-900/20"
                >
                  Back to Home{" "}
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default PostForm;
