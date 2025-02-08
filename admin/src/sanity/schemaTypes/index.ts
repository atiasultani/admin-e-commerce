import { type SchemaTypeDefinition } from 'sanity'
import orderSchema from '../orders'
import products from '../products' 
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [orderSchema,products],
}
