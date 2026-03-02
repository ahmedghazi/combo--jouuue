import {RxViewGrid} from 'react-icons/rx'
import modulesList from './modulesList'

export default {
  name: 'listLModulaireUI',
  title: 'List Modulaire UI',
  type: 'object',
  icon: RxViewGrid,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'items',
      type: 'array',
      of: modulesList,
    },
  ],
  preview: {
    select: {
      title: `title`,
      // media: 'items.0.imageCover',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title,
        media: media,
        subtitle: 'List Modulaire UI',
      }
    },
  },
}
