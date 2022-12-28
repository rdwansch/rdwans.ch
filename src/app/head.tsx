export default function head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />

      <title>Posts | R. Siddiq</title>
      <meta name="title" content="Ridhwan R Siddiq Blog" />
      <meta name="description" content="Ridhwan R Siddiq Blog" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      {/* <meta property="og:url" content="http://localhost" /> */}
      <meta property="og:title" content="Ridhwan R Siddiq Blog" />
      <meta property="og:description" content="Ridhwan R Siddiq Blog" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      {/* <meta property="twitter:url" content="http://localhost" /> */}
      <meta property="twitter:title" content="Ridhwan R Siddiq Blog" />
      <meta property="twitter:description" content="Ridhwan R Siddiq Blog" />
    </>
  );
}
