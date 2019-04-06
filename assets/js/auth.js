$(() => {
  const password = '5tarlight'
  $('#submitbtn').on('click', (event) => {
    event.preventDefault()
    const userPW = $('#passwordinput').val()

    if(password == userPW) {
      $('.secretbox').hide()
    } else return
  })
})