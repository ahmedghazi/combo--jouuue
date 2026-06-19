import {defineLocations, PresentationPluginOptions} from 'sanity/presentation'

export const linkResolver: PresentationPluginOptions['resolve'] = {
  locations: {
    // Add locations for documents of type 'post'
    home: defineLocations({
      // Select one or more fields
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      // Those fields are available in the resolve callback function
      resolve: (doc) => ({
        locations: [{title: doc?.title || 'Home', href: `/`}],
      }),
    }),
    infos: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) =>
        doc?.slug
          ? {locations: [{title: doc?.title || 'Infos', href: `/${doc.slug}`}]}
          : {locations: []},
    }),
    catalog: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) =>
        doc?.slug
          ? {locations: [{title: doc?.title || 'Catalog', href: `/${doc.slug}`}]}
          : {locations: []},
    }),

    pageModulaire: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) =>
        doc?.slug
          ? {locations: [{title: doc?.title || 'Untitled', href: `/${doc.slug}`}]}
          : {locations: []},
    }),
    product: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) =>
        doc?.slug
          ? {locations: [{title: doc?.title || 'Untitled', href: `/product/${doc.slug}`}]}
          : {locations: []},
    }),
  },
}
