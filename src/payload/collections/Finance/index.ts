import type { CollectionConfig } from 'payload/types'

const Finance: CollectionConfig = {
  slug: 'finance',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,

  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'Amount',
      type: 'text',
    },
    {
      name: 'Date',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export default Finance
