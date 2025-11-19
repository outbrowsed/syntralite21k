function doGet() {
  const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body style="margin:0;padding:0;">
    <script>
      window.onload = () => {
        fetch('https://cdn.jsdelivr.net/gh/outbrowsed/syntralite21k@main/index.html')
          .then(r => r.text())
          .then(text => {
            document.open();
            document.write(text);
            document.close();
          })
          .catch(err => console.error('Failed to load:', err));
      };
    </script>
  </body>
</html>
  `;

  return HtmlService.createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

