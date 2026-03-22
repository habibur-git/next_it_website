//define interface for PageParams props
export interface PageParamsProps {
  params: Promise<{ id: number | string }>;
}

// Fetch the data based on the provided 'id' prop
export interface IdProps {
  id: number;
};

export interface IBlog {
  _id: string;
  title: string;
  slug: string;
  contentHtml: string;
  content: string;
  coverImage: string;
  published: boolean;
  categories: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IService {
  _id: string;
  title: string;
  slug: string;
  description: string;
  banner: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPortfolio {
  _id: string;
  title: string;
  slug: string;
  category: string;
  bannerImage: string;
  sliderImages: string[];
  description: string;
  clientName: string;
  projectDate: string;
  services: string[];
  content: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}
