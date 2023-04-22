import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'favorites',
  title: 'Favorites',
  type: 'document',
  fields: [
    defineField(
      // {
      //   name: 'user',
      //   title: 'User',
      //   type: 'reference',
      //   to: [{type: 'user'}],
      // },
      {
        name: 'topics',
        title: 'Topics',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'topics'}],
          },
        ],
      }
    ),
  ],
})
