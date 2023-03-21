export default function head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />

      <title>Posts | Rdwansch</title>
      <meta name="title" content="Rdwansch" />
      <meta name="description" content="Read an Articles from R" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://rdwans.ch" />
      <meta property="og:title" content="Ridhwan R Siddiq Blog" />
      <meta property="og:description" content="Read an Articles from R" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://rdwans.ch" />
      <meta property="twitter:title" content="Read an Articles from R" />
      <meta property="twitter:description" content="Read an Articles from R" />
    </>
  );
}
