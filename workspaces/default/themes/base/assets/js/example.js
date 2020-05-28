function getTemplateProps () {
  let object = {}
  let params = document.getElementById('params')
  if (!params) {
    return object
  }

  let metaTags = params.getElementsByTagName('meta')
  for (let key in metaTags) {
    object[metaTags[key].name] = metaTags[key].content
  }

  return object
}

console.log(getTemplateProps())
