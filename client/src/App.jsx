import React from "react";

export default function App() {
  return (
    <>
      <header className="header">
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div className="brand">GroomKart<span className="dot">.</span></div>
          <button className="btn-primary">Book a Service</button>
        </div>
      </header>

      <main className="container">
        <div className="spacer" />
        <span className="tag">Indigo + Peach</span>
        <div className="spacer" />
        <div className="card">
          <h2 style={{marginTop:0}}>Welcome to GroomKart</h2>
          <p className="hint">
            This page is using your brand theme. Now start building real screens here.
          </p>
          <div className="spacer" />
          <button className="btn-primary">Explore Services</button>
        </div>
      </main>
    </>
  );
}
