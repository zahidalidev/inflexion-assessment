export const isValidUrl = (urlString) => {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?'
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'
    + '((\\d{1,3}\\.){3}\\d{1,3}))'
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'
    + '(\\?[;&a-z\\d%_.~+=-]*)?'
    + '(\\#[-a-z\\d_]*)?$',
    'i',
  )
  return !!urlPattern.test(urlString)
}

export const formValidate = (fields) => {
  const tempFields = [...fields]
  if (tempFields[0].value.length <= 5) {
    tempFields[0].error = 'Name should have more then 5 characters.'
  } else {
    tempFields[0].error = ''
  }

  if (tempFields[1].value.length <= 10) {
    tempFields[1].error = 'Street should have more then 10 characters.'
  } else {
    tempFields[1].error = ''
  }

  if (tempFields[2].value.length <= 3) {
    tempFields[2].error = 'City Name should have more then 3 characters.'
  } else {
    tempFields[2].error = ''
  }

  if (tempFields[3].value.length <= 2) {
    tempFields[3].error = 'Zip code should have more then 2 characters.'
  } else {
    tempFields[3].error = ''
  }

  if (!isValidUrl(tempFields[4].value)) {
    tempFields[4].error = 'URL is not valid'
  } else {
    tempFields[4].error = ''
  }

  return tempFields
}
