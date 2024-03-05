//usando o module.exports, podemos exportar o arquivo para ser
//utilizado em outro local!
module.exports = ()=> {
    return  `
      <!DOCTYPE html>
  <html lang="pt-br">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="public/css/style.css">
  
  </head>
  <body>
  
  <h3>Using CSS to style an HTML Form</h3>
  
  <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>
</form>
  
  </body>
  </html>
      `
  }