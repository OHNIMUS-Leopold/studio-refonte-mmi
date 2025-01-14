import { defineField, defineType } from "sanity";

export const alumniType = defineType({
    name: "alumni",
    title: "Alumni",
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