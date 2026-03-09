import {BsInfoSquare} from 'react-icons/bs'
import {defineField} from 'sanity'

export default defineField({
  name: 'cardImageText',
  title: 'Card Image Text',
  type: 'object',
  icon: BsInfoSquare,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'title',
    }),
    defineField({
      name: 'tag',
      type: 'string',
      title: 'Tag',
    }),
    defineField({
      name: 'tagsFilter',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
      title: 'Tag Filter',
      description: 'Pour créer la nav filter sur la grille de Card Image Text',
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
      title: 'text',
    }),
    defineField({
      name: 'image',
      type: 'figure',
      title: 'image',
    }),
  ],
  preview: {
    select: {
      title: `title`,
      subtitle: `tag`,
      media: 'image.image',
    },
    // prepare(selection) {
    //   const {title} = selection
    //   return {
    //     title: title,
    //     subtitle: 'Inter Titre avec index',
    //   }
    // },
  },
})
