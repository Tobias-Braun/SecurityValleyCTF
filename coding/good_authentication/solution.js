const { curly } = require('node-libcurl')

// the (xored) password (sontTbxTjffe) is stored in plain text as a check in the validate() function.
// however, the xoring with the numbers of the blocks must be reversed.
// we can do this by applying the same transformation that has been performed on the passwrod on the string used in validate()

const password = "sontTbxTjffe"

const block1 = Array.from(password).slice(0, 4)
const block2 = Array.from(password).slice(4, 8)
const block3 = Array.from(password).slice(8, 12)

const block = [
    block1,
    block2,
    block3
]

let crafted = "";

for (let i = 0; i < block.length; i++) {
    for (let a = 0; a < block[i].length; a++) {
        if (i == 0) {
            crafted += String.fromCharCode(String(block[i][a]).charCodeAt(0) ^ 7)
        } else if (i == 1) {
            crafted += String.fromCharCode(String(block[i][a]).charCodeAt(0) ^ 11)
        } else {
            crafted += String.fromCharCode(String(block[i][a]).charCodeAt(0) ^ 9)
        }
    }
}

console.log("password is:", crafted)

// now get the flag with curl:
curly.post('http://ctf.securityvalley.org:7777/api/v1/validate', {
    postFields: JSON.stringify({ pass: crafted }),
    httpHeader: [
        'Content-Type: application/json',
    ],
}).then((res) => {
    console.log("solution is:", res.data)
})
