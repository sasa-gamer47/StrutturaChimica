const dropdownMenu = document.getElementById('dropdown-menu')
const droppedList = document.getElementById('dropped-list')

dropdownMenu.addEventListener('click', () => {
    if (droppedList.classList.contains('hide')) {
        droppedList.classList.remove('hide')
    } else {
        droppedList.classList.add('hide')
    }
})

const dropdownMenu1 = document.getElementById('dropdown-menu1')
const droppedList1 = document.getElementById('dropped-list1')

dropdownMenu1.addEventListener('click', () => {
    if (droppedList1.classList.contains('hide')) {
        droppedList1.classList.remove('hide')
    } else {
        droppedList1.classList.add('hide')
    }
})

const checkbox = document.getElementById('checkbox')


checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
        document.body.classList.add('dark-theme')
        localStorage.setItem('theme', 'dark')
        ball.style.transform = 'translate(40px, -50%)'
        ball.style.backgroundColor = '#d6d1d1'
        label.style.backgroundColor = '#fff5f5'
    } else {
        document.body.classList.remove('dark-theme')
        document.body.classList.add('light-theme')
        localStorage.setItem('theme', 'light')
        ball.style.transform = 'translate(0px, -50%)'
        ball.style.backgroundColor = '#353333'
        label.style.backgroundColor = '#1b1a1a'
    }
})

const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu')

hamburger.addEventListener('click', () => {
    if (menu.classList.contains('opened-menu')) {
        menu.classList.remove('opened-menu')
    } else {
        menu.classList.add('opened-menu')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') == 'light') {
        console.log('light');
        document.body.classList.remove('dark-theme')
        document.body.classList.add('light-theme')
        ball.style.transform = 'translate(0px, -50%)'
        ball.style.backgroundColor = '#353333'
        label.style.backgroundColor = '#1b1a1a'
        
        
    } else {
        console.log('dark');
        const ball = document.getElementById('ball')
        const label = document.getElementById('label')
        document.body.classList.remove('light-theme')
        document.body.classList.add('dark-theme')
        ball.style.transform = 'translate(40px, -50%)'
        ball.style.backgroundColor = '#d6d1d1'
        label.style.backgroundColor = '#fff5f5'
    }
})