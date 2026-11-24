export default function App() {
  return (
    <>
<a className="skip" href="#inicio">Ir para o conteúdo</a>
  <header className="top">
    <div className="wrap top-inner">
      <a className="logo" href="#inicio" aria-label="VIAMED, início">+ VIAMED</a>
      <nav aria-label="Navegação principal"><a href="#localizacao">Como chegar</a></nav>
    </div>
  </header>
  <main id="inicio" tabIndex="-1" className="wrap">
    <section className="hero" aria-labelledby="titulo">
      <div className="intro">
        <p className="credential">Clínica credenciada pelo DETRAN-SC</p>
        <h1 id="titulo">Avaliação médica<br />para a CNH</h1>
        <p className="lead">Para quem vai tirar a primeira habilitação, renovar a CNH, adicionar ou mudar de categoria.</p>
        <a className="button" href="https://wa.me/5547989297591" target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp</a>
        <p className="notice">Atendimento somente com horário agendado.</p>
      </div>
      <aside className="visit" aria-labelledby="visita">
        <h2 id="visita">Sua visita à VIAMED</h2>
        <div>
          <h3>Endereço</h3>
          <address>Rua Rio do Sul, 63, sala 01<br />Centro, Blumenau – SC</address>
          <a href="#localizacao">Ver fachada e mapa</a>
        </div>
        <div>
          <h3>Pagamento</h3>
          <p>Pix, dinheiro, débito e crédito.</p>
        </div>
      </aside>
    </section>

    <section className="location" id="localizacao" aria-labelledby="local-title">
      <div className="location-copy">
        <div>
          <h2 id="local-title">Como chegar</h2>
          <p>Na Rua João Pessoa, logo após o radar de velocidade, vire à direita na Rua Rio do Sul.</p>
          <p>Há estacionamento em frente à clínica.</p>
        </div>
        <a className="route" href="https://www.google.com/maps/dir/?api=1&amp;destination=Rua+Rio+do+Sul%2C+63%2C+Centro%2C+Blumenau%2C+SC%2C+89012-422" target="_blank" rel="noopener noreferrer">Ver rota no Google Maps</a>
      </div>
      <div className="location-visuals">
        <iframe title="Mapa da Rua Rio do Sul, 63, Blumenau" src="https://maps.google.com/maps?q=Rua%20Rio%20do%20Sul%2C%2063%2C%20Centro%2C%20Blumenau%20SC%2C%2089012-422&amp;z=17&amp;output=embed" loading="lazy" allowFullScreen></iframe>
        <figure className="facade">
          <img src="fachada.jpg" alt="Fachada da clínica VIAMED em Blumenau" loading="lazy" />
          <figcaption>Referência da entrada</figcaption>
        </figure>
      </div>
    </section>
  </main>
  <footer className="wrap footer">
    <p>Viamed Serviços Médicos LTDA · CNPJ 57.834.361/0001-50</p>
    <a href="https://www.detran.sc.gov.br/" target="_blank" rel="noopener noreferrer">Dúvidas sobre a CNH no DETRAN-SC</a>
  </footer>
    </>
  );
}
