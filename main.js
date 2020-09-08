// selectDOM elements

const mainPage = document.querySelector('.main-page')
const loginPage = document.querySelector('.login-page')
const middleContent = document.querySelector('.middle-content')
const btnTop = document.querySelector('.btn-top')
const newFeedsPage = document.querySelector('.feeds-page')
const loginModal = document.querySelector('.login-modal')
const loginModalCloseBtn = document.querySelector('#login-modal-close')
const loginFormBtn = document.querySelector('.login-form-btn')
const postBtn = document.querySelector('.post-btn')
const modalWrapper = document.querySelector('.modal-wrapper')
const postModal = document.querySelector('.modal')
const postModalX = document.querySelector('.modal-header i')
const modalPostBtn = document.querySelector('.modal-header button')
const modalFooterPlus = document.querySelector('.modal-text-wrapper span')
const modalInput = document.querySelector('.modal-input')
const user = document.querySelector('.user')
const sidebar = document.querySelector('.sidebar')
const sidebarWrapper = document.querySelector('.sidebar-wrapper')
const sidebarX = document.querySelector('.sidebar i')
const toggle = document.querySelector('.toggle')
const circle = document.querySelector('.toggle .circle')

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

  if (inputUserInfo.value && inputUserPassword.value) {
    changeElementDisplay(newFeedsPage, 'block')
    changeElementDisplay(mainPage, 'none')
    return
  }
  goToLoginPage()
  changeElementDisplay(loginModal, 'block')
})

loginFormBtn.addEventListener('click', (e) => {
  const loginUserInfo = document.querySelector('.login-user-info')
  const loginUserPassword = document.querySelector('.login-user-password')
  if (loginUserInfo.value && loginUserPassword.value) {
    changeElementDisplay(newFeedsPage, 'block')
    changeElementDisplay(loginPage, 'none')
    return
  }
  changeElementDisplay(loginModal, 'block')
})

// post modal

postBtn.addEventListener('click', (e) => {
  changeElementDisplay(postModal, 'block')
  modalWrapper.classList.add('modal-wrapper-display')
})

postModalX.addEventListener('click', () => {
  closePostModal()
})

modalInput.addEventListener('keypress', (e) => {
  if (e.target.value !== '') changeModalBtnOpacity(1)
})

modalInput.addEventListener('blur', (e) => {
  if (e.target.value === '') changeModalBtnOpacity(0.5)
})

// post btns

modalPostBtn.addEventListener('click', () => {
  displayDummyMessage()
  closePostModal()
})

modalFooterPlus.addEventListener('click', () => {
  displayDummyMessage()
  closePostModal()
})

// sidebar
user.addEventListener('click', () => {
  sidebar.classList.add('sidebar-display')
  sidebarWrapper.classList.add('sidebar-wrapper-display')
})

sidebarX.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-display')
  sidebarWrapper.classList.remove('sidebar-wrapper-display')
})

// dark mode
toggle.addEventListener('click', () => {
  circle.classList.toggle('move')
})

// utils

function changeElementDisplay(element, newDisplay) {
  element.style.display = newDisplay
}

function changeModalBtnOpacity(value) {
  modalPostBtn.style.opacity = value
  modalFooterPlus.style.opacity = value
}

function displayDummyMessage() {
  alert(
    "You've add a new tweet! \nBut unfortunately in this project the tweet function doesn't really work\nIt's just a simple demo.\nSorry if that's an issue for you😢"
  )
}

function closePostModal() {
  changeElementDisplay(postModal, 'none')
  modalWrapper.classList.remove('modal-wrapper-display')
  if (modalInput.value !== '') {
    modalInput.value = ''
    changeModalBtnOpacity(0.5)
  }
}
