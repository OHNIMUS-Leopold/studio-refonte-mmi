import { defineField, defineType } from "sanity";

export const temoignageType = defineType({
  name: "temoignage",
  title: "Témoignage",
  type: "document",
  fields: [
    defineField({
      name: "firstName",
      type: "string",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "graduationYear",
      type: "number",
      validation: (rule) => rule.required().min(1900).max(new Date().getFullYear()),
    }),

    defineField({
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
});