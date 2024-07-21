const crypto = require('node:crypto')

let opration = process.argv[2]
let a = process.argv[3]
let b = process.argv[4]

if (opration == 'Add') {
  Add(Number(4), Number(2))
}
else if (opration == 'Sub') {
  Sub(Number(5), Number(2))
}
else if (opration == 'Mult') {
  Mult(Number(2), Number(2))
}
else if (opration == 'Div') {
  Div(Number(4), Number(2))
}
else if (opration == 'Sine') {
  Sine(Number(6), Number(2))
}
else if (opration == 'Cosine') {
  Cosine(Number(3), Number(2))
}
else if (opration == 'Tangent') {
  Tangent(Number(5), Number(2))
}
else if (opration == 'Random') {
  Random(Number(5), Number(2))
}
else{
  console.log("Invalid Operation")
}



function Add (a, b) {
  console.log(`Node index.js add ${a + b}`)
}
function Sub (a, b) {
  console.log(`Node index.js sub ${a - b}`)
}
function Mult (a, b) {
  console.log(`Node index.js mult ${a * b}`)
}
function Div (a, b) {
  console.log(`Node index.js div ${a / b}`)
}
function Sine (a, b) {
  console.log(`Node index.js sine ${Math.sin(a)}`)
}
function Cosine (a, b) {
  console.log(`Node index.js cosine ${Math.cos(a)}`)
}
function Tangent (a, b) {
  console.log(`Node index.js tangent ${Math.tan(a)}`)
}
function Random (a, b) {
  // Asynchronous
  const { randomBytes } = require('node:crypto')

  randomBytes(a, (err, buf) => {
    if (err) throw err
    console.log(`node index.js random ${buf.toString('hex')}`)
  })
}

