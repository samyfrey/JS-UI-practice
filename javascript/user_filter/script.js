import axios from 'axios'

const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))``
async function getData() {
	const res = await fetch('https://randomuser.me/api?results=50')
	const { results } = await res.json()

	result.innerHTML = ''
	results.forEach((user) => {
		const li = document.createElement('li')
		listItems.push(li)
		li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
		result.appendChild(li)
	})
}

function filterData(searchTerm) {
	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
			item.classList.remove('hide')
		} else {
			item.classList.add('hide')
		}
	})
}

let slideIndex = 1
showSlides(slideIndex)

function plusSlides(selectIndex) {
	showSlides((slideIndex += selectIndex))
}

function showSlides(selectIndex) {
	let slides = document.getElementsByClassName('slide')
	if (selectIndex > slides.length) {
		slideIndex = 1
	}
	if (selectIndex < 1) {
		slideIndex = slides.length
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}
	slides[slideIndex - 1].style.display = 'block'
	console.log('slide index is', slideIndex)
}

export const indexClients = () => {
	return axios.get('http://localhost:4741/clients')
}
indexClients()

console.log('index client is', indexClients)