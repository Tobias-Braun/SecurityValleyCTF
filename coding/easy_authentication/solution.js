const { curly } = require('node-libcurl')

// The function validate() just exposes the password in charcode format, we can just extract it.

// reuse their code:
const pass = [106, 117, 115, 116, 95, 119, 97, 114, 109, 105, 110, 103, 95, 117, 112];

// extract password string
const password = pass.map(charcode => String.fromCharCode(charcode)).join("")

console.log("password is:", password)

// now get the flag with curl:
curly.post('http://ctf.securityvalley.org:7777/api/v1/validate', {
    postFields: JSON.stringify({ pass: password }),
    httpHeader: [
        'Content-Type: application/json',
    ],
}).then((res) => {
    console.log("solution is:", res.data)
})
