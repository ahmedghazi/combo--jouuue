import { groq } from "next-sanity";
import { client } from "./sanity-client";
import {
  Catalog,
  Home,
  Infos,
  PageModulaire,
  Product,
  Publisher,
  Settings,
  Tag,
} from "../types/schema";
import {
  moduleImage,
  modules,
  moduleText,
  moduleTextImage,
  productCard,
  seo,
} from "./fragments";
import { PublisherExtend, TagExtend } from "../types/extend";
// import { cache } from "react";

// const clientFetch = cache(client.fetch.bind(client));

/**
 * SETTINGS
 */
export async function getSettings(): Promise<Settings> {
  return client.fetch(
    groq`*[_type == "settings"][0]{
      ...,

      navPrimary[]{
        ...,
        _type == 'linkInternal' => {
          ...,
          link->{
            _type,
            slug
          }
        },
        _type == 'menuItem' => {
          ...,
          link{
            ...,
            link->{
              _type,
              slug,
              subMenu
            }
          },
          subMenu[]{
            ...,
            _type == 'linkInternal' => {
              ...,
              link->{
                _type,
                slug,
                subMenu
              },
            },
          }
        }
      },
      navPublishers[]{
        ...,
        _type == 'linkInternal' => {
          ...,
          link->{
            _type,
            slug
          }
        }
      }

    }`,
  );
}

/**
 * HOME
 */
// export const HOME_QUIERY = groq`*[_type == "home"][0]{
//   ...,
//   seo{
//     ${seo}
//   },
//   slider[]{
//     ...,
//     image{
//       asset->
//     }
//   },
//   products[]->{
//     ${productCard}
//   },
//   modules[]{
//     ${modules}
//   },
// }`;
export const HOME_QUIERY = groq`*[_type == "pageModulaire" && homePage == true][0]{
  ...,
  seo{
    ${seo}
  },
  modules[]{
    ${modules}
  },
}
  `;

export async function getHome(): Promise<Home> {
  return client.fetch(HOME_QUIERY, {});
}

/**
 * Infos
 */

export const INFOS_QUIERY = groq`*[_type == "infos"][0]{...,
  ...,
  seo{
    ${seo}
  },

  modules[]{
    ...,
    items[]{
      ${modules}
    }
  }
}`;
export async function getInfos(): Promise<Infos> {
  return client.fetch(INFOS_QUIERY, {});
}

export const CATALOG_QUIERY = groq`*[_type == "catalog"][0]{...,
  ...,
  seo{
    ${seo}
  },
  products[]->{
    ${productCard}
  },
}`;
export async function getCatalog(): Promise<Catalog> {
  return client.fetch(CATALOG_QUIERY, {});
}

/**
 * Product
 */
export const PRODUCT_QUIERY = groq`*[_type == "product" && slug.current == $slug][0]{
  ...,
  seo{
    ${seo}
  },
	publisher->{
    title
  },
  imageCover{
    image{
      asset->
    }
  },
  images[]{
    image{
      ...,
      asset->
    }
  },
  "related": *[
    _type == "product"
    && publisher->slug.current == ^.publisher->slug.current
  ] {
    ${productCard}
  }
}`;

export async function getProduct(slug: string): Promise<Product> {
  return client.fetch(PRODUCT_QUIERY, { slug: slug });
}

/**
 * Publisher
 *
 *   // // ...,
    // ${moduleText},
    // ${moduleImage},
    // ${moduleTextImage}
 */
export const PUBLISHER_QUIERY = groq`*[_type == "publisher" && slug.current == $slug][0]{
  ...,
  seo{
    ${seo}
  },
  modules[]{
    ${modules}
  },
  "products": *[
    _type == "product"
    && publisher->slug.current == ^.slug.current
  ] {
    ${productCard}
  }
}`;

export async function getPublisher(slug: string): Promise<PublisherExtend> {
  return client.fetch(PUBLISHER_QUIERY, { slug: slug });
}

/**
 * TAGS
 */
export const TAGS_QUIERY = groq`*[_type == "tag" ]{
  ...
}`;
export async function getTags(): Promise<Tag[]> {
  return client.fetch(TAGS_QUIERY, {});
}

/**
 * TAG
 */
export const TAG_QUIERY = groq`*[_type == "tag" && slug.current == $slug][0]{
  ...,
  "products": *[
    _type == "product"
    && $slug in tags[]->slug.current
  ] {
    ${productCard}
  }
}`;
export async function getTag(slug: string): Promise<TagExtend> {
  return client.fetch(TAG_QUIERY, { slug: slug });
}

/*****************************************************************************************************
 * PAGE MODULAIRE
 */
export const PAGE_MODULAIRE_QUERY = groq`*[_type == "pageModulaire" && slug.current == $slug][0]{
  ...,
  seo{
    ${seo}
  },
  modules[]{
    ${modules}
  },
}`;
export async function getPageModulaire(slug: string): Promise<PageModulaire> {
  // revalidatePath(slug);
  return client.fetch(PAGE_MODULAIRE_QUERY, { slug: slug });
  // return cachedClient(PAGE_MODULAIRE_QUERY, { slug: slug });
}
