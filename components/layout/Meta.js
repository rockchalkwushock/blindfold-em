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
