import React from "react";
import { Metadata } from "next";
import {
  CATALOG_QUIERY,
  getCatalog,
  getInfos,
  getTags,
  INFOS_QUIERY,
} from "@/app/utils/sanity-queries";
import website from "@/app/config/website";
import { draftMode } from "next/headers";
import { getClient } from "@/app/utils/sanity.client";
import { Catalog, Infos } from "@/app/types/schema";
import ContentInfos from "@/app/components/ContentInfos";
import { notFound } from "next/navigation";
import ContentCatalog from "@/app/components/ContentCatalog";

export const revalidate = 3600; // revalidate every hour
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const data = await getCatalog();
  return {
    title: `${data?.seo?.metaTitle || data?.title || ""}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

type PageProps = {
  params: {
    slug: string;
  };
};

const Page: ({ params }: PageProps) => Promise<JSX.Element> = async ({
  params,
}) => {
  const { isEnabled: preview } = draftMode();
  let data: Catalog;
  if (preview) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      CATALOG_QUIERY,
      params,
    );
  } else {
    data = await getCatalog();
  }
  const tags = await getTags();

  if (!data) return notFound();
  return (
    <div className='template template--catalog' data-template='catalog'>
      <ContentCatalog input={data} tags={tags} />
    </div>
  );
};

export default Page;
