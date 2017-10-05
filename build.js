const watch = require('watch')
const fs = require('fs')

watch.watchTree(__dirname + '/example', () => {
  console.log('chicken...')
  let content = fs.readFileSync('./example/index.chicken.html', 'utf8')
  fs.writeFileSync('./example/index.html', content
    .replace('<!doctype chicken>', '<!doctype html>')
    .replace(/<chicken>([\s\S]*)<\/chicken>/i, `
<html>
  <head>
    <script src="../chicken.js"></script>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  $1
  </body>
</html>`))
  fs.writeFileSync('./example/style.css',
    fs.readFileSync('./example/chicken.chicken', 'utf8')
      .replace(/chicken \{([\s\S]+)\}/i, 'body { $1 }')
      .replace(/chicken: (.+);/i, 'color: $1;')
      .replace(/chicken-chicken: (.+);/i, 'font-family: sans-serif;')
  )
  console.log('chicken ✓')
})