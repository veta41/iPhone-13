// const accordeon = () => {
  
//   const chItems = document.querySelectorAll('characteristics__item')
// console.log(chItems);
  // chItems.forEach(item => {
  //   const chButton = item.querySelector('.characteristics__title')
  //   const chContent = item.querySelector('.characteristics__description')

  //   chButton.addEventListener('click', () => {
  //     if (chContent.classList.contains('open')) {
    
  //       chContent.style.height = ""
  //     } else {
  //       chContent.style.height = chContent.scrollHeight + 'px'
  //     }
      
  //     chButton.classList.toggle('active')
  //     chContent.classList.toggle('open')
  //   })

  // })

// accordeon()

const accordeon = () => {
  const chItems = document.querySelectorAll('.characteristics__item')
  console.log(chItems);
  chItems.forEach(item => {
    const chButton = item.querySelector('.characteristics__title')
    const chContent = item.querySelector('.characteristics__description')
    
    chButton.addEventListener('click', () => {
      if (chContent.classList.contains('open')) {
        // chContent.classList.remove('open')
        chContent.style.height = ''
      } else {
        // chContent.classList.add('open')

      chContent.style.height = chContent.scrollHeight + 'px'
      }
      
      chButton.classList.toggle('active')
      chContent.classList.toggle('open')
    })
  })
}

accordeon()