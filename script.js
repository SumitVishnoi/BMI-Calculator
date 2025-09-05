const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const text = document.querySelector("#text")
const btn = document.querySelector("#btn")

function bmi(weight, height) {
    return weight / (height * height)
}

btn.addEventListener("click", function(e) {
    e.preventDefault()
    let weightInput = weight.value
    let heightInput = height.value
    text.textContent = bmi(weightInput, heightInput).toFixed(2)

})