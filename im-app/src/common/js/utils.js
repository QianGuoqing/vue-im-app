export function redirectToPath(type, avatar) {
  let url = ''
  if (type.toLowerCase() === 'boss') {
    url = '/boss'
  } else if (type.toLowerCase() === 'genius') {
    url = '/genius'
  }
  if (!avatar) {
    url += '-info'
  }
  return url
}