// selectDOM elements

const mainPage = document.querySelector('.main-page')
const loginPage = document.querySelector('.login-page')
const middleContent = document.querySelector('.middle-content')
const btnTop = document.querySelector('.btn-top')
const newFeedsPage = document.querySelector('.feeds-page')
const loginModal = document.querySelector('.login-modal')
const loginModalCloseBtn = document.querySelector('#login-modal-close')

// handlers

const goToLoginPage = () => {
  changeElementDisplay(mainPage, 'none')
  changeElementDisplay(loginPage, 'grid')
}

middleContent.addEventListener('click', (e) => {
  if (e.target.classList[1] === 'main-btn') goToLoginPage()
})

loginModalCloseBtn.addEventListener('click', () => {
  changeElementDisplay(loginModal, 'none')
})

btnTop.addEventListener('click', (e) => {
  const inputUserInfo = document.querySelector('.user-info')
  const inputUserPassword = document.querySelector('.user-password')

  if (inputUserInfo.value && inputUserPassword) {
    changeElementDisplay(newFeedsPage, 'block')
    changeElementDisplay(mainPage, 'none')
    return
  }
  goToLoginPage()
  changeElementDisplay(loginModal, 'block')
})

function changeElementDisplay(element, newDisplay) {
  element.style.display = newDisplay
}
