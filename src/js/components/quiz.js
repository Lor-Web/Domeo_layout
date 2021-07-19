window.addEventListener('DOMContentLoaded', () => {
  const oneQuiz = document.querySelector('.oneQuiz')
  const twoQuiz = document.querySelector('.twoQuiz')
  const threeQuiz = document.querySelector('.threeQuiz')
  const goBtn = document.querySelectorAll('.quiz-btn-go')
  const quizBtn = document.querySelectorAll('.quiz-btn')
  const tl = gsap.timeline()

  goBtn.forEach((goBtn) =>
    goBtn.addEventListener('click', (event) => {
      event.preventDefault()

      const thisQuiz = goBtn.parentNode.parentNode
      const nextQuiz = thisQuiz.nextElementSibling

      tl.to(thisQuiz, { x: -300, opacity: 0, display: 'none' }).fromTo(
        nextQuiz,
        { x: 300, opacity: 0, display: 'none' },
        { x: 0, opacity: 1, display: 'block' },
      )
    }),
  )

  quizBtn.forEach((btn) =>
    btn.addEventListener('click', (event) => {
      event.preventDefault()

      const thisQuiz = btn.parentNode.parentNode
      const lastQuizz = thisQuiz.previousElementSibling

      tl.to(thisQuiz, {
        x: 300,
        opacity: 0,
        display: 'none',
      }).to(lastQuizz, {
        x: 0,
        opacity: 1,
        display: 'block',
      })
    }),
  )
})
