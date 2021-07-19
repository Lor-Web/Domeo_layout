const tl = gsap.timeline()
const openModal = document.querySelectorAll('[data-target="modal"]')
const modalOverlay = document.querySelector('.fixed-overlay')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close-modal')

window.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal()
  }
})

openModal.forEach((btn) =>
  btn.addEventListener('click', function () {
    modalOverlay.style.display = 'block'
    modalOverlay.dataset.visible = 'true'

    tl.to('.modal', {
      opacity: 1,
      duration: 0.5,
    })
  }),
)

close.addEventListener('click', () => {
  closeModal()
})

function closeModal(event) {
  modalOverlay.style.display = 'none'
  modalOverlay.dataset.visible = 'false'

  modal.style.opacity = '0'
}
