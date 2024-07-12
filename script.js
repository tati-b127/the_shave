document.addEventListener("DOMContentLoaded", ()=> {
    const tabs = document.querySelectorAll('.services-tabs__nav')
    const textArea = document.getElementById('message')
    textArea.innerText = ''
    tabs.forEach((tab)=> {
        tab.addEventListener("click", (e)=> {
            tabs.forEach((i)=> {
                i.classList.remove('-active')
            })


            e.target.classList.add('-active')
            const number = e.target.dataset.tab
            const element = `services_tab${number}`
            console.log(element)


            const targetTabs = document.querySelectorAll('.services-tabs__item')
            targetTabs.forEach((i)=> {
                console.log(i)
                i.classList.remove('-active')
            })


            const targetEl = document.getElementById(element)
            targetEl.classList.add('-active')
        })
    })
    const menu = document.querySelector('.menu-pannel')
    const btnMenu = document.querySelector('.menu-pannel__open')
    const menuLinks = document.querySelectorAll('.menu-link')
    btnMenu.addEventListener("click", ()=> {
        menu.classList.toggle('open')
    })
    menuLinks.forEach((link)=> {
        link.addEventListener("click", ()=> {
            menu.classList.remove('open')
        })
    })

    console.log('hiiiiii')
})