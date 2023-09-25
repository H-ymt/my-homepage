import { createClient } from 'microcms-js-sdk';
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

// カテゴリーの型定義
export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// 実績の型定義
export type Works = {
  thumbnail?: MicroCMSImage;
  title: string;
  content: string;
  url: string;
  source: string;
  created: string;
  category: Category[];
};

// メタ情報の型定義
export type Meta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: MicroCMSImage;
  canonical?: string;
};

export type Article = Works & MicroCMSContentId & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// 実績一覧を取得
export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Works>({
      endpoint: 'works',
      queries,
    })
    .catch(notFound);
  return listData;
};

// カテゴリーの一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Category>({
      endpoint: 'categories',
      queries,
    })
    .catch(notFound);

  return listData;
};

// 実績の詳細を取得
export const getWorksDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client.getListDetail<Works>({
    endpoint: 'works',
    contentId,
    queries,
  });

  return detailData;
};

// カテゴリーの詳細を取得
export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await client
    .getListDetail<Category>({
      endpoint: 'categories',
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

// メタ情報を取得
export const getMeta = async (queries?: MicroCMSQueries) => {
  const data = await client
    .getObject<Meta>({
      endpoint: 'meta',
      queries,
    })
    .catch(() => null);

  return data;
};
