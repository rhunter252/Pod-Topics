import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'topics',
  title: 'Topics',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
