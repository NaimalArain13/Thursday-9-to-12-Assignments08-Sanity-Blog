import {DocumentTextIcon} from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
export const postType = defineType({
    name:"post",
    title:"Post",
    type:"document",
    icon: DocumentTextIcon,
    fields:[
        defineField({
            name:"title",
            type:"string",
        }),
        defineField({
            name:"description",
            type:"string",
            title:"Post Description",
        }),
        defineField({
            name:"slug",
            type:"slug",
            options:{
                source:"title",
                maxLength: 96,
            },
            description: "The unique identifier for the post (auto-generated from title)",
        }),
        defineField({
            name:"author",
            type:"reference",
            to:{type:"author"},
            description: "Select the author for this post",
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
              }
            ]
          }),
          defineField({
            name: 'categories',
            type: 'array',
            of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
            description: "Select one or more categories for this post",
          }),
          defineField({
            name: 'publishedAt',
            type: 'datetime',
            description: "Specify the date and time when the post was published",
          }),
          defineField({
            name: 'body',
            type: 'blockContent',
            description: "Write the main content of the post here",
          }),
        ],
        preview: {
          select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
          },
          prepare(selection) {
            const {author} = selection
            return {...selection, subtitle: author && `by ${author}`}
          },
        }
    
})