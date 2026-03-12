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
      // Select one or more fields
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      // Those fields are available in the resolve callback function
      resolve: (doc) => ({
        locations: [{title: doc?.title || 'Home', href: `/${doc?.slug}`}],
      }),
    }),
    catalog: defineLocations({
      // Select one or more fields
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      // Those fields are available in the resolve callback function
      resolve: (doc) => ({
        locations: [{title: doc?.title || 'Home', href: `/${doc?.slug}`}],
      }),
    }),

    pageModulaire: defineLocations({
      // Select one or more fields
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      // Those fields are available in the resolve callback function
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/${doc?.slug}`,
          },
          // {title: 'Home', href: `/`},
        ],
      }),
    }),
    product: defineLocations({
      // Select one or more fields
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      // Those fields are available in the resolve callback function
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/product/${doc?.slug}`,
          },
          // {title: 'Home', href: `/`},
        ],
      }),
    }),
  },
}
