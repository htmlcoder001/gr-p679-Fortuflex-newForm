const anchors = document.querySelectorAll('a');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector('#custom-regbox').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}