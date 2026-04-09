import { createClient } from 'contentful-management'

export const managementClient = createClient(
  {
    accessToken:
      import.meta.env.VITE_CONTENTFUL_MANAGEMENT_API_PERSONAL_ACCESS_TOKEN ??
      '',
  },
  { type: 'legacy' },
)

export default managementClient
