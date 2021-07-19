const tl = gsap.timeline()
const openModal = document.querySelectorAll('[data-target="modal"]')
const modalOverlay = document.querySelector('.fixed-overlay')
const modal = document.querySelector('.modal-form')
const close = document.querySelector('.close-modal')
const modalRequest = document.querySelector('.request')
const formBtn = document.querySelectorAll('.btn-form')

window.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal()
  }
})

openModal.forEach((btn) =>
  btn.addEventListener('click', function () {
    modalOverlay.style.display = 'block'
    modalOverlay.dataset.visible = 'true'

    tl.to('.modal-form', {
      opacity: 1,
      duration: 0.5,
    })
  }),
)

formBtn.forEach((btn) =>
  btn.addEventListener('click', (event) => {
    event.preventDefault()

    modalOverlay.style.display = 'block'
    gsap.to(modalRequest, {
      opacity: 1,
    })

    setTimeout(closeModal, 2000)
  }),
)

close.addEventListener('click', () => {
  closeModal()
})

function closeModal(event) {
  modalOverlay.style.display = 'none'
  modalOverlay.dataset.visible = 'false'

  modal.style.opacity = '0'

  gsap.to(modalRequest, {
    opacity: 0,
  })
}
