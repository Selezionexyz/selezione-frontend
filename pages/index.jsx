import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>SELEZIONE - SaaS Luxe & IA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        {/* Polices */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap" rel="stylesheet" />
        {/* Meta SEO */}
        <meta name="description" content="SELEZIONE est une plateforme SaaS dédiée à la revente haut de gamme, à l’intelligence artificielle et à la formation dans la mode de luxe." />
        <meta name="author" content="Selezione Xyzweb" />
        <meta property="og:title" content="SELEZIONE" />
        <meta property="og:description" content="SaaS Luxe, Formation, Revente, Intelligence Artificielle" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="/cover.png" />
        <meta name="theme-color" content="#000000" />
        {/* CSS (optionnel si tu utilises Tailwind ou un CSS global) */}
        <link rel="stylesheet" href="/index.css" />
      </Head>
      <main
        style={{
          minHeight: "100vh",
          background: "#000",
          color: "#fff",
          fontFamily: "'Outfit','Segoe UI',Arial,sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            color: "#fbb034",
            fontSize: "2.5rem",
            marginBottom: ".8em",
            letterSpacing: "2px",
          }}
        >
          SELEZIONE
        </h1>
        <h2
          style={{
            color: "#00ffff",
            fontWeight: 400,
            fontSize: "1.5rem",
            marginBottom: "1em",
          }}
        >
          SaaS Luxe, Formation, Revente & Intelligence Artificielle
        </h2>
        <p style={{ maxWidth: 540, margin: "0 auto 2em auto", lineHeight: 1.6, opacity: 0.85 }}>
          SELEZIONE est la plateforme dédiée à la revente haut de gamme, à la formation dans la mode de luxe et à l’intelligence artificielle appliquée au business.
        </p>
        <img
          src="/cover.png"
          alt="SELEZIONE cover"
          style={{
            maxWidth: "340px",
            borderRadius: "16px",
            boxShadow: "0 4px 32px #000a",
            marginBottom: "2em",
          }}
        />
        <div style={{ marginBottom: "2em" }}>
          <a
            href="/contact"
            style={{
              background: "linear-gradient(90deg, #fbb034, #ffdd00)",
              color: "#222",
              fontWeight: "bold",
              borderRadius: "10px",
              padding: "1em 2em",
              textDecoration: "none",
              fontSize: "1.1em",
              margin: "0 1em",
              boxShadow: "0 2px 8px #0005",
              transition: "filter 0.2s",
            }}
          >
            Contact
          </a>
          <a
            href="/CGU"
            style={{
              background: "linear-gradient(90deg, #00ffff, #00bfae)",
              color: "#222",
              fontWeight: "bold",
              borderRadius: "10px",
              padding: "1em 2em",
              textDecoration: "none",
              fontSize: "1.1em",
              margin: "0 1em",
              boxShadow: "0 2px 8px #0005",
              transition: "filter 0.2s",
            }}
          >
            CGU
          </a>
          <a
            href="/Mentions"
            style={{
              background: "linear-gradient(90deg, #fff, #aaa)",
              color: "#111",
              fontWeight: "bold",
              borderRadius: "10px",
              padding: "1em 2em",
              textDecoration: "none",
              fontSize: "1.1em",
              margin: "0 1em",
              boxShadow: "0 2px 8px #0005",
              transition: "filter 0.2s",
            }}
          >
            Mentions légales
          </a>
        </div>
        <footer style={{ opacity: 0.6, fontSize: ".95em" }}>
          &copy; {new Date().getFullYear()} SELEZIONE – SaaS Luxe & IA
        </footer>
      </main>
    </>
  );
}
