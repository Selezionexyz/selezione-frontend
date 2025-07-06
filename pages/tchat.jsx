import { useEffect, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Remplace ta clé ici (NE PAS exposer en prod, utiliser variable d'environnement !)
const SUPABASE_URL = "https://gwcatbpsjbbhwekcsvkr.supabase.co";
const SUPABASE_KEY = "eyJhbGci…"; // <--- remplace par ta vraie clé sécurisée !
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default function ModuleTchat() {
  const [pseudo, setPseudo] = useState("Selezione");
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [debug, setDebug] = useState("");
  const resultRef = useRef(null);

  // Récupère les messages à l'ouverture + subscribe aux changements
  useEffect(() => {
    let ignore = false;
    setDebug("Chargement…");
    supabase
      .from("message")
      .select("*")
      .order("created_at", { ascending: true })
      .then(({ data, error }) => {
        if (ignore) return;
        if (error) {
          setDebug("Erreur : " + error.message);
          return;
        }
        setMessages(data || []);
        setDebug(`OK — ${data?.length || 0} msg`);
      });

    // Live updates Supabase (si tu veux le "temps réel")
    const subscription = supabase
      .channel("public:message")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "message" },
        (payload) => {
          setMessages((msgs) => [...msgs, payload.new]);
        }
      )
      .subscribe();

    return () => {
      ignore = true;
      supabase.removeChannel(subscription);
    };
  }, []);

  // Scroll auto en bas
  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollTop = resultRef.current.scrollHeight;
    }
  }, [messages]);

  // Envoi message
  async function envoyer(e) {
    if (e) e.preventDefault();
    if (!pseudo.trim() || !msg.trim()) return;
    const newMsg = { pseudo: pseudo.trim(), content: msg.trim() };
    setMessages((msgs) => [...msgs, { ...newMsg, id: Date.now() }]); // Ajout local optimiste
    setMsg("");
    const { error } = await supabase.from("message").insert([newMsg]);
    if (error) {
      setDebug("Erreur : " + error.message);
    }
  }

  // Styles inline (reprend ton CSS)
  return (
    <div
      className="tchat-card"
      style={{
        width: "90vw",
        maxWidth: 600,
        height: "90vh",
        background: "#1f1f1f",
        borderRadius: 18,
        boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <div
        id="tchat-header"
        style={{
          background: "linear-gradient(90deg, #fbb034, #ffdd00)",
          color: "#222",
          padding: "1.2em",
          display: "flex",
          alignItems: "center",
          gap: ".8em",
          fontWeight: "bold",
          fontSize: "1.2em",
          letterSpacing: ".5px",
          borderRadius: "18px 18px 0 0",
        }}
      >
        <span
          className="avatar"
          style={{
            background: "rgba(255,255,255,0.3)",
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4em",
          }}
        >
          👑
        </span>
        Tchat SELEZIONE PRO
      </div>
      <div
        id="result"
        ref={resultRef}
        style={{
          flex: 1,
          margin: "0 1.5em",
          background: "#161616",
          border: "1px solid #333",
          borderRadius: 12,
          padding: ".8em",
          overflowY: "auto",
          boxShadow: "inset 0 2px 6px rgba(0,0,0,0.4)",
        }}
      >
        {messages.length === 0 && (
          <div style={{ color: "#fff", opacity: .7 }}>Aucun message.</div>
        )}
        {messages.map((m, i) => {
          const isMe = m.pseudo === pseudo;
          const cls = isMe ? "msg-bubble msg-me" : "msg-bubble msg-other";
          return (
            <div
              key={m.id || m.created_at || i}
              className={cls}
              style={{
                position: "relative",
                padding: ".7em 1em",
                margin: ".4em 0",
                borderRadius: 8,
                maxWidth: "70%",
                wordBreak: "break-word",
                lineHeight: 1.3,
                marginLeft: isMe ? "auto" : undefined,
                marginRight: !isMe ? "auto" : undefined,
                background: isMe ? "#dcf8c6" : "#2a2a2a",
                color: isMe ? "#000" : "#eee",
                borderTopRightRadius: isMe ? 0 : 8,
                borderTopLeftRadius: !isMe ? 0 : 8,
              }}
            >
              <b>{m.pseudo}</b>
              <br />
              {m.content}
              <span
                style={{
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  right: isMe ? -6 : undefined,
                  left: !isMe ? -6 : undefined,
                  width: 0,
                  height: 0,
                  border: "6px solid transparent",
                  borderTopColor: isMe ? "#dcf8c6" : "#2a2a2a",
                  borderRight: isMe ? 0 : undefined,
                  borderLeft: !isMe ? 0 : undefined,
                  marginBottom: -6,
                  display: "block",
                }}
              ></span>
            </div>
          );
        })}
      </div>
      <form
        className="tchat-form"
        style={{
          position: "sticky",
          bottom: 0,
          background: "#1f1f1f",
          padding: "1em 1.5em",
          display: "grid",
          gridTemplateColumns: "1fr 1fr auto",
          gap: ".6em",
          alignItems: "center",
          boxShadow: "0 -4px 8px rgba(0,0,0,0.5)",
          zIndex: 10,
        }}
        onSubmit={envoyer}
        autoComplete="off"
      >
        <input
          type="text"
          id="pseudo"
          placeholder="Pseudo"
          value={pseudo}
          autoComplete="off"
          onChange={(e) => setPseudo(e.target.value)}
          style={{
            background: "#191919",
            border: "2px solid transparent",
            color: "#fff",
            padding: ".7em 1em",
            borderRadius: 10,
            fontSize: "1em",
            outline: "none",
            transition: "border-color .2s",
          }}
        />
        <input
          type="text"
          id="msg"
          placeholder="Message"
          autoComplete="off"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) {
              envoyer(e);
            }
          }}
          style={{
            background: "#191919",
            border: "2px solid transparent",
            color: "#fff",
            padding: ".7em 1em",
            borderRadius: 10,
            fontSize: "1em",
            outline: "none",
            transition: "border-color .2s",
          }}
        />
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #ffe259 60%, #ffa751 100%)",
            color: "#181818",
            fontWeight: "bold",
            border: "none",
            borderRadius: "10px 10px 10px 0",
            padding: ".7em 1.5em",
            fontSize: "1.05em",
            cursor: "pointer",
            transition: "filter .15s",
          }}
        >
          Envoyer
        </button>
      </form>
      <div
        id="debug"
        style={{
          margin: ".8em 1.5em",
          color: "#ffb300",
          fontSize: ".9em",
          minHeight: "1.5em",
        }}
      >
        {debug}
      </div>
    </div>
  );
}
