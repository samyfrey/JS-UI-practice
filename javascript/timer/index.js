// const inputTime = document.querySelector('inputTime').value
// console.log(inputTime)

console.log(document.getElementById('time').addEventListener('input', function() {
    console.log(this.value);
}))

