
/* eslint-disable prefer-template, max-len */

export default vo => `

<!DOCTYPE html>
<html lang="en">

  <head>
    <title>Full Stack Blog</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet='utf-8' />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link id="favicon" rel="shortcut icon" href="/favicon.png" sizes="16x16 32x32" type="image/png" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="/megadraft.css">
    ${vo.cssBundle ? '<link rel="stylesheet" type="text/css" href="' + vo.cssBundle + '">' : ''}

    <title>Universal React Starter Kyt</title>
  </head>

  <body>
    <div id="root">${vo.root}</div>
    <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(vo.initialStore)};
        window.__API_URL__ = ${JSON.stringify(vo.apiUrl)};
    </script>
    <script src="${vo.jsBundle}"></script>
  </body>

</html>

`;
