import { defineType, defineField } from 'sanity';

export const contactType = defineType({
  name: 'contactMessage',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      type: 'string',
    }),
    defineField({
      name: 'message',
      type: 'text',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
  ],
});