// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

import {gsap} from "gsap"

document.addEventListener('DOMContentLoaded', () => {

	// Опросник

	const formPayment1 = document.getElementById('form-payment-1')
	const formPayment2 = document.getElementById('form-payment-2')
	const formPayment3 = document.getElementById('form-payment-3')
	const formPayment4 = document.getElementById('form-payment-4')
	const buttonNext = document.querySelectorAll('.form-payment__button-next')
	const buttonPrev = document.querySelectorAll('.form-payment__button-prev')

	buttonNext.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault()
			if (item.parentElement == formPayment1) {
				formPayment1.classList.remove('visibility')
				formPayment1.classList.add('hidden')
				formPayment2.classList.add('visibility')
				formPayment2.classList.remove('hidden')
			} else if (item.parentElement.parentElement == formPayment2) {
				formPayment2.classList.remove('visibility')
				formPayment2.classList.add('hidden')
				formPayment3.classList.add('visibility')
				formPayment3.classList.remove('hidden')
			} else if (item.parentElement.parentElement == formPayment3) {
				formPayment3.classList.remove('visibility')
				formPayment3.classList.add('hidden')
				formPayment4.classList.add('visibility')
				formPayment4.classList.remove('hidden')
			}
		})
	})

	buttonPrev.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.preventDefault()
			if (item.parentElement.parentElement == formPayment2) {
				formPayment2.classList.add('hidden')
				formPayment2.classList.remove('visibility')
				formPayment1.classList.add('visibility')
				formPayment1.classList.remove('hidden')
			} else if (item.parentElement.parentElement == formPayment3) {
				formPayment3.classList.add('hidden')
				formPayment3.classList.remove('visibility')
				formPayment2.classList.add('visibility')
				formPayment2.classList.remove('hidden')
			}
		})
	})

	// Модальное окно

	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector)
		const modal = document.querySelector(modalSelector)
		const close = document.querySelector(closeSelector)

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {e.preventDefault()}
				modal.style.display = "block"
				document.body.style.overflow = "hidden"
				gsap.fromTo(modal, {opacity: 0}, {opacity: 1,	duration: 0.5})
			})
		})

		close.addEventListener('click', () => {
			gsap.fromTo(modal, {opacity: 1}, {opacity: 0,	duration: 0.5})
			setTimeout(() => {
				modal.style.display = "none"
				document.body.style.overflow = ""
			}, 500)
		})

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				gsap.fromTo(modal, {opacity: 1}, {opacity: 0,	duration: 0.5})
				setTimeout(() => {
					modal.style.display = "none"
					document.body.style.overflow = ""
				}, 500)
			}
		})
	}

	bindModal('button[data-modal]', '.overlay', '.form-modal__close')

})