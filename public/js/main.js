const $form = $('form')
const $textInput = $('#text')
const apiClient = axios.create()
const $formSubmit = $('#form-submit')
const $formModal = $('#form-modal')

// progress bars
const $joy = $('#joy')
const $disgust = $('#disgust')
const $sadness = $('#sadness')
const $fear = $('#fear')
const $anger = $('#anger')

$form.on('submit', (evt) => {
  evt.preventDefault()
  $formSubmit.attr('disabled', true)
  const text = $textInput.val()
  apiClient({ method: 'get', url: `/analyze?text=${text}` }).then((apiResponse) => {
    const emotionTone = apiResponse.data.document_tone.tone_categories["0"].tones
    $formSubmit.attr('disabled', false)
    $formModal.modal('hide')

    $joy.css({ width: (emotionTone[3].score * 100) + '%' })
    $disgust.css({ width: (emotionTone[1].score * 100) + '%' })
    $sadness.css({ width: (emotionTone[4].score * 100) + '%' })
    $fear.css({ width: (emotionTone[2].score * 100) + '%' })
    $anger.css({ width: (emotionTone[0].score * 100) + '%' })
  })
})