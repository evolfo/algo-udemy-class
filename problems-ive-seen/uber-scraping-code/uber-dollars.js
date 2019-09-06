
// INSTRUCTIONS:
// 1.) start on the page that has the first transaction of the year you want to look at
// 2.) paste this code into your console
// 3.) type in uberDollars(2018, 1234) for example, with 2018 being replaced by whatever year you want to look at and 1234 being the last 4 of your card
// 4.) the last amount that shows up in your console will be the total amount of US dollars that you spent!

const uberDollars = (year, card, final = 0) => {
  let shmoney = ''
  let lastElement

  for (let element of document.querySelectorAll('.bk')) {
	if(element.innerText.includes('$') && element.parentElement.parentElement.lastElementChild.lastElementChild.innerText.includes(card)) {
	  if(element.previousElementSibling.innerText.includes(year)) {
		shmoney = element.innerText.replace('$', '')
		if (!isNaN(parseFloat(shmoney))) {
		  final += parseFloat(shmoney)
		}
	  }
	}

	if(!!element.previousElementSibling) {
	  lastElement = element.previousElementSibling.innerText
	}
  }

  document.querySelector('div[data-identity="pagination-next"]').click()

  if(lastElement.includes(year)) {
	setTimeout(() => {
	  return uberDollars(year, card, final)
	}, 4000)
  }

  console.log(final)
  return final
}
