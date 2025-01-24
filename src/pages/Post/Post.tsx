import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPost } from "../../api";
import { deletePost } from "../../api";
import ErrorInfo from "../../components/ErrorInfo";
import PostSkeleton from "./components/PostSkeleton";
import PostDetails from "./components/PostDetails";
import { PostFormData } from "../../utils/types";

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostFormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (id && loading) {
      const fetch = async () => {
        await fetchPost(Number(id)).then((data) => {

          setPost(data);
        });

        setLoading(false);
      };

      fetch();
    }
  }, [id]);

  const handleDelete = async () => {
    setLoading(true);

    try {
      await deletePost(Number(id));
      navigate("/posts");
    } catch {
      setError("Failed to delete Post. Try Again Later.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div
        onClick={() => {
          console.log(post);
        }}
      >
        <PostSkeleton />
      </div>
    );
  }

  if (error || !post || !id) {
    return (
      <div className="pt-32">
        <ErrorInfo
          title="Post not found"
          description={error || "Error fetching post"}
        />
      </div>
    );
  }

  return <PostDetails post={post} handleDelete={handleDelete} id={id} />;
};

export default Post;
