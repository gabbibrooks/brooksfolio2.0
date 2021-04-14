const type = 'website'
const url = 'https://zacharybrooks.dev'
const title = 'Zachary Brooks'
const description =
  'Zachary Brooks is a Software Developer from Denver, Colorado. This site is a portfolio and blog dedicated primary to frontend focused topics such as Jamstack, along with some other interests!'
const mainImage =
  'https://res.cloudinary.com/zacharybrooks-dev/image/upload/v1605463566/zach_on_mountain.jpg'
const twitterSite = '@zacann0n'
const twitterCard = 'summary_large_image'
export const getMetadata = (meta) => {
  return [
    {
      hid: 'description',
      name: 'description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: (meta && meta.type) || type,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: (meta && meta.url) || url,
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: (meta && meta.title) || title,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: (meta && meta.title) || title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: (meta && meta.url) || url,
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: (meta && meta.title) || title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: (meta && meta.description) || description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: (meta && meta.mainImage) || mainImage,
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: (meta && meta.twitterSite) || twitterSite,
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: (meta && meta.twitterCard) || twitterCard,
    },
  ]
}
