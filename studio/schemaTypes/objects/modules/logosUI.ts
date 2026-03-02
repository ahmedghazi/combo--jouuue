import {defineField} from 'sanity'
import {PiImagesLight} from 'react-icons/pi'

export default defineField({
  name: 'logosUI',
  title: 'Logo(s) UI',
  type: 'object',
  icon: PiImagesLight,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Module title (displayed only in the admin)',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'figure',
        },
      ],
    }),
    defineField({
      name: 'backgroundColor',
      type: 'string',
      description: 'Couleur de fond',
    }),
    defineField({
      name: 'foregroundColor',
      type: 'string',
      description: 'Couleur de texte',
    }),
  ],
  preview: {
    select: {
      title: `title`,
      items: 'items',
    },
    prepare(selection) {
      const {title, items} = selection
      return {
        title: title,
        media: items?.length > 0 ? items[0].image : undefined,
        subtitle: `Logo(s) UI (${items.length} items)`,
      }
    },
  },
})
