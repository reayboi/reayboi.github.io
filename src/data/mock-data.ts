import type { ContentfulImage } from '../types/types'

export const mockImageResponse = {
  metadata: {
    tags: [],
    concepts: [],
  },
  sys: {
    space: {
      sys: {
        type: 'Link',
        linkType: 'Space',
        id: 'zrnc370zxj1q',
      },
    },
    id: '5xjMgegQL4vD29efM819lh',
    type: 'Asset',
    createdAt: '2026-04-06T05:05:57.941Z',
    updatedAt: '2026-04-06T05:05:57.941Z',
    environment: {
      sys: {
        id: 'master',
        type: 'Link',
        linkType: 'Environment',
      },
    },
    publishedVersion: 6,
    revision: 1,
    locale: 'en-US',
  },
  fields: {
    title: 'Leading line in Ballarat',
    description: 'Landscape photo taken on iPhone 13 Pro',
    file: {
      url: '//images.ctfassets.net/zrnc370zxj1q/5xjMgegQL4vD29efM819lh/658f3e4985bba3c459da6efe755d4487/leading-lines.jpg',
      details: {
        size: 2446545,
        image: {
          width: 4032,
          height: 3024,
        },
      },
      fileName: 'leading-lines.jpg',
      contentType: 'image/jpeg',
    },
  },
} as ContentfulImage
