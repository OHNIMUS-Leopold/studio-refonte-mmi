import { defineField, defineType } from "sanity";

export const projetType = defineType({
    name: "projet",
    title: "Projet",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "domaine",
            type: "string",
            options: {
                list: [
                    { title: "Dev", value: "dev" },
                    { title: "Crea", value: "crea" },
                    { title: "Comm", value: "comm" },
                ],
            },
            validation: (rule) => rule.required(),
        }),
    
        defineField({
            name: "description",
            type: "text",
            validation: (rule) => rule.required(),
        }),
    
        defineField({
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "date",
            type: "date",
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: "etiquetteMax2",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "WebDesign", value: "WebDesign" },
                    { title: "Identite", value: "Identite" },
                    { title: "UX/UI", value: "UX/UI" },
                    { title: "Logo", value: "Logo" },
                    { title: "Branding", value: "Branding" },
                    { title: "Print", value: "Print" },
                    { title: "Photographie", value: "Photographie" },
                    { title: "Vidéo", value: "Vidéo" },
                    { title: "Illustration", value: "Illustration" },
                    { title: "Animation", value: "Animation" },
                    { title: "3D", value: "3D" },
                    { title: "WebDev", value: "WebDev" },
                    { title: "Frontend", value: "Frontend" },
                    { title: "Backend", value: "Backend" },
                    { title: "CMS", value: "CMS" },
                    { title: "SEO", value: "SEO" },
                    { title: "SEA", value: "SEA" },
                    { title: "E-commerce", value: "E-commerce" },
                    { title: "Application", value: "Application" },
                    { title: "Site", value: "Site" },
                    { title: "Référencement", value: "Référencement" },
                    { title: "Réseaux sociaux", value: "Réseaux sociaux" },
                    { title: "Community management", value: "Community management" },
                    { title: "Stratégie", value: "Stratégie" },
                    { title: "Marketing", value: "Marketing" },
                    { title: "Publicité", value: "Publicité" },
                    { title: "Evénement", value: "Evénement" },
                    { title: "Formation", value: "Formation" },
                    { title: "Consulting", value: "Consulting" },
                    { title: "Autre", value: "Autre" },
                ],
            },
            validation: (rule) => rule.required().min(1),
        }),
      ],
    
});