// import supportedLanguages from "../locale/supportedLanguages";
import {defineField} from 'sanity'

export default defineField({
  title: 'Menu Item (avec sous menu)',
  name: 'menuItem',
  type: 'object',
  preview: {
    select: {
      title: `link.label`,
    },
  },
  fields: [
    defineField({
      name: 'link',
      type: 'linkInternal',
    }),
    defineField({
      name: 'subMenu',
      title: 'Sub menu',
      type: 'array',
      of: [
        {
          type: 'linkInternal',
        },
        {
          type: 'linkExternal',
        },
      ],
    }),
  ],
})
