function doGet() {
  const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      button {
        width: 100%;
        height: 100%;
        font-size: 100px;
        border: none;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <button onmouseover="
      fetch('https://cdn.jsdelivr.net/gh/outbrowsed/syntralite21k@main/index.html')
        .then(r => r.text())
        .then(text => {
          document.open();
          document.write(text);
          document.close();
        });
    ">
      math homework
    </button>
  </body>
</html>
  `;

  return HtmlService.createHtmlOutput(html)
    .setTitle('syntraLite')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

