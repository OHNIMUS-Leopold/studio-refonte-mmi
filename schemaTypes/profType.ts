import { defineField, defineType } from "sanity";

export const profType = defineType({
    name: "prof",
    title: "Prof",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
    
        defineField({
            name: "specialization",
            type: "string",
            validation: (rule) => rule.required(),
        }),
    
        defineField({
            name: "roundImage",
            type: "image",
            validation: (rule) => rule.required(),
        }),
      ],
    
});