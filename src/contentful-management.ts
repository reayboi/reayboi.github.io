import { createClient } from 'contentful-management'

export const managementClient = createClient(
  {
    accessToken: import.meta.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN ?? '',
  },
  { type: 'legacy' },
)

export default managementClient
