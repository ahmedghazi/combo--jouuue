import {defineField} from 'sanity'
import {MdConnectWithoutContact} from 'react-icons/md'

export default defineField({
  name: 'contactsUI',
  title: 'Contacts UI',
  type: 'object',
  icon: MdConnectWithoutContact,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titre',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'blockContent'}],
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
        // subtitle: 'Intertitre',
      }
    },
  },
})
