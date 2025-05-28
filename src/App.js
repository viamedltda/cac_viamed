
import React from "react";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>+ VIAMED</h1>
        <nav>
          <a href="#inicio">INÍCIO</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </header>

      <section className="about" id="sobre">
        <h3>SOBRE A CLÍNICA</h3>
        <p>A Viamed é uma clínica credenciada pelo DETRAN-SC (credenciamento nº 0047), para avaliação de condutores para primeira habilitação, renovação, adição e mudança de categoria da CNH. Atendemos com horário agendado, buscando agilizar e garantir um processo seguro e eficiente.</p>
      </section>

      <section className="hero" id="inicio">
        <div className="hero-text">
          <p><strong>Agendamento:</strong></p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <a href="https://agendazap.top/p/viamed" target="_blank" rel="noopener noreferrer">
              <button>AGENDAR PELO SITE</button>
            </a>
            <a href="https://wa.me/5547989297591" target="_blank" rel="noopener noreferrer">
              <button>AGENDAR PELO WHATSAPP</button>
            </a>
          </div>
          <p style={{ marginTop: "10px", color: "#333" }}>
            <em>Observação: não atendemos ligações ou áudios pelo WhatsApp. Em caso de dúvidas, entre em contato por ligação no telefone (47) 98929-7591.</em>
          </p>
        </div>
        <img src="/fachada.jpg" alt="Fachada Viamed" />
      </section>

      <section className="info-grid">
        <div className="info-item">
          <h3>HORÁRIO DE ATENDIMENTO</h3>
          <p>Segunda a sexta<br />10:00 — 16:00</p>
        </div>
        <div className="info-item">
          <h3>FORMAS DE PAGAMENTO</h3>
          <p>Cartão de débito<br />Cartão de crédito<br />PIX, Dinheiro</p>
        </div>
        <div className="info-item">
          <h3>ENDEREÇO</h3>
          <p>Rua Rio do Sul, 63 Sala 01<br />Centro, Blumenau - SC<br />CEP: 89012-422</p>
        </div>
      </section>

      <section className="contact" id="contato">
        <h3>CONTATO</h3>
        <p><strong>Ligações:</strong> (47) 98929-7591</p>
        <p><strong>E-mail:</strong> viamed@outlook.com.br</p>
      </section>

      <iframe
        title="Mapa Viamed"
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1424067604187!2d-49.0715!3d-26.9149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1e6c6edcfb2b%3A0x18cba4bb0c3cfc8c!2sRua%20Rio%20do%20Sul%2C%2063%20-%20Centro%2C%20Blumenau%20-%20SC%2C%2089012-422!5e0!3m2!1spt-BR!2sbr!4v1685041474814!5m2!1spt-BR!2sbr"
        allowFullScreen
        loading="lazy"
      ></iframe>

      <footer className="footer">
        <p>Viamed Serviços Médicos LTDA — CNPJ: 57.834.361/0001-50</p>
        <div className="waze-link">
            <a href="https://ul.waze.com/ul?place=ChIJr7SeIAAZ35QRQmrcB58CuTU&ll=-26.91529510%2C-49.07695670&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
               target="_blank" rel="noopener noreferrer">
              <button style={{ background: "#0055cc", color: "#fff", padding: "10px", marginTop: "10px" }}>
                COMO CHEGAR (WAZE)
              </button>
            </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
