const ReadLine = require('readline/promises')
const rl = ReadLine.createInterface({output: process.stdout, input: process.stdin})
const Router = require('./src/Router')

rl.on('line', Router)

