const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(str) {
    str = ('q' +str).split('')
    let arr = []
    let word = ''
    let slicer = 0
    for (let i = 1; i < str.length; i++) {
        word += str[i]
        if (i % 10 === 0) {
            slicer = word.indexOf('1')
            if (slicer >= 0) {
                word = word.slice(slicer)
                for (let j = 0; j < 5; j++) {
                    word = word.replace('10','.')
                }
                for (let j = 0; j < 5; j++) {
                    word = word.replace('11','-')
                }
            } else word = ' ';
            arr.push(word)
            word = ''
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === ' ') word+= ' '
        else word+=MORSE_TABLE[arr[i]]
    }
    return word
}


module.exports = {
    decode
}