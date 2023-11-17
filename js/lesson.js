// PHONE CHEKER
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    } else {
        phoneSpan.innerHTML =  'NOT OK'
        phoneSpan.style.color = 'red'
    }
})

//tap slider
const tabsContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

let currentIndex = 0

const hideTabsContent = ()=> {
    tabsContent.forEach(tabContent => {
        tabContent.style.display = 'none'
    })
    tabs.forEach(tab=>{
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabsContent = (index) => {
    tabsContent[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active')
}

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tabElement, tabIndex) => {
            if (event.target === tabElement){
                hideTabsContent()
                showTabsContent(tabIndex)
            }
        })
    }
}

const showNextTab = () => {
    currentIndex = (currentIndex + 1) % tabs.length
    hideTabsContent()
    showTabsContent(currentIndex)
};

showTabsContent(currentIndex)

setInterval(showNextTab, 3000)

