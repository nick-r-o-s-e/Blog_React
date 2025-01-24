export type Post = {
  id: number;
  description: string;
  title: string;
  status: string;
  created_at: Date;
};

export type ListFilters = {
  status?: "draft" | "published";
  date_sort_order?: "desc" | "asc";
};

export type FetchPostsParams = {
  status: string | undefined;
  date_sort_order: string;
};

export type PostFormData = {
  title: string;
  description: string;
  status: string;
};
