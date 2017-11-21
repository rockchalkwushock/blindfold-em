import Head from 'next/head'

import { styles } from '../../lib'

/**
 * @description
 * <Meta /> component holds all global styling,
 * external stylesheet links, meta data for
 * the application.
 */
export default () => (
  <div>
    <Head>
      {/* COMMON TAGS */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge,chrome=1" />
      <title>Blindfold'em</title>
      {/* SEO */}
      <meta name="author" content="RCWS Development" />
      <meta
        name="description"
        content="Blindfold'em is a productivity management tool in the form of a Pomodoro-esque web application."
      />
      {/* EXTERNAL STYLESHEETS */}
      {/* Normalize CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        async
      />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Kalam|Permanent+Marker"
        rel="stylesheet"
        async
      />
      {/* Animate CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        rel="stylesheet"
        async
      />
      {/* FAVICONS & TOUCH ICONS */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://blindfold-em.now.sh/static/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://blindfold-em.now.sh/static/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://blindfold-em.now.sh/static/icons/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="https://blindfold-em.now.sh/static/icons/manifest.json"
      />
      <link
        rel="mask-icon"
        href="https://blindfold-em.now.sh/static/icons/safari-pinned-tab.svg"
        color="#3a2a41"
      />
      <link
        rel="shortcut icon"
        href="https://blindfold-em.now.sh/static/icons/favicon.ico"
      />
      <meta name="apple-mobile-web-app-title" content="Blindfold-em" />
      <meta name="application-name" content="Blindfold-em" />
      <meta
        name="msapplication-config"
        content="https://blindfold-em.now.sh/static/icons/browserconfig.xml"
      />
      <meta name="theme-color" content="#3a2a41" />
    </Head>
    <style jsx global>{`
      * {
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html,
      body {
        min-height: 100vh;
        overflow-x: hidden;
      }
      body {
        background-color: ${styles.colors.highLight};
        color: ${styles.colors.text};
        font-family: ${styles.fonts.kalam};
        font-size: 1em;
        line-height: 1.5em;
      }
    `}</style>
  </div>
)
