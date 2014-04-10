var cssmin = require('cssmin')
var fs = require('fs')

var html = fs.readFileSync('source.html', {
    encoding: 'utf-8'
})

var css = fs.readFileSync('basic.min.css', {
    encoding: 'utf-8'
})

var min_html = html.replace(/\{basicStyle\}/g, css).replace(/\n+/g, '').replace(/>(\s+)</g, '><')

fs.writeFile('index.html', min_html, {
    encoding: 'utf-8'
})
