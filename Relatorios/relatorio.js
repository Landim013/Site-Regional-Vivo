function onload() {
    const doll1 = document.getElementById("doll-1")
    const doll2 = document.getElementById("doll-2")
    const doll3 = document.getElementById("doll-3")
    const doll4 = document.getElementById("doll-4")
    const doll5 = document.getElementById("doll-5")
    const doll6 = document.getElementById("doll-6")


    const doAnimation = () => {

        doll1.classList.add('doll-entrance')

        setTimeout(() => doll1.classList.add("doll-entrance"), 1000)
        setTimeout(() => doll2.classList.add("doll-entrance"), 1000)
        setTimeout(() => doll3.classList.add("doll-entrance"), 2000)
        setTimeout(() => doll4.classList.add("doll-entrance"), 3000)
        setTimeout(() => doll5.classList.add("doll-entrance"), 4000)
        setTimeout(() => doll6.classList.add("doll-entrance"), 6000)

        setTimeout(() => [doll1, doll2, doll3, doll4, doll5, doll6].map(el => el.classList.remove("doll-entrance")), 6000)

        setTimeout(doAnimation, 8000)
    }

    doAnimation()
}