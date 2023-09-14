let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length)
secretMessage.pop()
console.log(secretMessage.length)

secretMessage.splice(secretMessage.length, 0, 'to', 'program')
secretMessage[7] = 'right'
secretMessage.shift()
secretMessage.unshift('Programming')
secretMessage.splice(6, 5, "know")

console.log(secretMessage.join(' '))
