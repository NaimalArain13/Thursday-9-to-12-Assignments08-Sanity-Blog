import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockType'
import { categoryType } from './categoryType'
import { authorType } from './authorType'
import { postType } from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType,categoryType,authorType,postType],
}
