//Utility method used to strip the image version number from the forestry reference
export const getCloudinaryId = imageUrl => {
  return imageUrl.replace(/\/(v1.+\/)/g, '')
}
