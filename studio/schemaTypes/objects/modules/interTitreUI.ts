import {defineField} from 'sanity'
import {PiTextAaBold} from 'react-icons/pi'

export default defineField({
  name: 'moduleInterTitre',
  title: 'Intertitre',
  type: 'object',
  icon: PiTextAaBold,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre',
    }),
  ],
  preview: {
    select: {
      title: `title`,
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
        subtitle: 'Intertitre',
      }
    },
  },
})
