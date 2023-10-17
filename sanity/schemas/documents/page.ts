import { Browser } from 'phosphor-react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: Browser,
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'sections',
      title: 'Sections',
      of: [
        defineArrayMember({ type: 'MainHero' }),
        defineArrayMember({ type: 'Quote' }),
        defineArrayMember({ type: 'CtaBanner' }),
        defineArrayMember({ type: 'FeaturedItems' }),
        defineArrayMember({ type: 'FeaturedText' }),
      ],
      validation: (rule) => rule.required(),
    }),
    // TODO: Create fields to input slug and sections
  ],
  // TODO: BONUS! Configure the preview for this schema to display slug as the title and 'Page' as the subtitle
  // preview: {
  //   select: {},
  //   prepare({}) {
  //     return {}
  //   },
  // },
})
