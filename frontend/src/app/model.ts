export type PageDataObject = {
  id: number;
  attributes: {
    heading: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              name: string;
              url: string;
            };
            small: {
              name: string;
              url: string;
            };
            large: {
              name: string;
              url: string;
            };
            medium: {
              name: string;
              url: string;
            };
            url: string;
            name: string;
          };
        };
      };
    };
  };
};

export type RootPageObject = {
  data: PageDataObject;
  meta: Record<string, unknown>;
};
