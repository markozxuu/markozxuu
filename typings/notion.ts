type AuthorProfile = {
  firstName: string;
  fullName: string;
  id: string;
  lastLame: string;
  profilePhoto: string;
};

type Author = {
  date: string;
  authorData: AuthorProfile;
};

export type NotionData = {
  id: string;
  Published: boolean | undefined;
  Slug: string[];
  Date: string;
  Page: string;
  Authors: Author;
};
