export type NewsItem = {
  id: number;
  attributes: {
    news_title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type NewsData = {
  data: NewsItem[];
  meta: {
    pagination: Pagination;
  };
};
