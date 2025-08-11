// client/src/App.jsx
import { useEffect, useState } from "react";

export default function App() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/services")
      .then((r) => {
        if (!r.ok) throw new Error("Network response not ok");
        return r.json();
      })
      .then((data) => setServices(data))
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div style={{padding:20}}>Loading...</div>;
  if (err) return <div style={{padding:20,color:"red"}}>Error: {err}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>GroomKart — Services</h1>
      <ul>
        {services.map((s) => (
          <li key={s.id}>
            {s.title} — ₹{s.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
