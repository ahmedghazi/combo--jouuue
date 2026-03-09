import {RxViewGrid} from 'react-icons/rx'
import {defineField} from 'sanity'

export default {
  name: 'listCardImageTextUI',
  title: 'list Card Image Text UI',
  type: 'object',
  icon: RxViewGrid,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Click sur generate, ancre servant au sous menu, pour que la page scroll vers cette section',
      // readOnly: true,
      options: {
        source: (doc, context) => {
          console.log({doc})
          console.log({context})
          return context.parent ? context.parent?.title || 'title' : 'title'
        },
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gridSize',
      type: 'number',
      initialValue: 3,
      description: 'Items par ligne, par défaut 3',
    }),

    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'cardImageText'}],
    }),
    defineField({
      name: 'navTags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    }),
  ],
  preview: {
    select: {
      title: `title`,
      media: 'items.0.image.image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'list Card Image Text UI',
      }
    },
  },
}
