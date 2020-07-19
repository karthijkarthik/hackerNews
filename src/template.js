// html skeleton provider
export default function template(title, initialState = {}, content = "") {
  const scripts = ` <script src="assets/bundle.js"> </script> `
  
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link href="assets/style.css" rel="stylesheet">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              `;

  return page;
}
