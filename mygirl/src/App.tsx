import React, { useState, useEffect } from 'react';

// --- Tipos para las cartas de personajes ---
interface CartaPersonaje {
  id: string;
  nombre: string;
  imagenUrl: string;
  descripcion: string;
  fraseIconica: string;
  colorPrimario: string;
  colorSecundario: string;
  colorAcento: string;
  colorFondo: string;
}

// --- Lista de personajes (Edward es el primero, colores normales Saturno) ---
const personajesData: CartaPersonaje[] = [
  {
    id: 'edward',
    nombre: 'Edward',
    imagenUrl: 'https://i.imgur.com/mvH7hqE.png',
    descripcion: 'El dueño de este corazón, el que hace brillar cada anillo de Saturno. Eres mi persona favorita en este universo.',
    fraseIconica: '"Contigo, hasta el infinito sabe a poco."',
    colorPrimario: '#071e17',
    colorSecundario: '#0a2a21',
    colorAcento: '#34d399',
    colorFondo: '#071e17',
  },
  {
    id: 'kuromi',
    nombre: 'Kuromi',
    imagenUrl: 'https://i.pinimg.com/564x/8b/9c/2d/8b9c2d8a4e8c8e4c8e8c4e8c8e8c4e8c.jpg',
    descripcion: 'Traviesa pero tierna, con un corazón gigante. Como ella, eres mi dulce rebelión.',
    fraseIconica: '"El negro y rosa combinan mejor cuando estamos juntos."',
    colorPrimario: '#2d1b2e',
    colorSecundario: '#1a0f1a',
    colorAcento: '#e91e63',
    colorFondo: '#2d1b2e',
  },
  {
    id: 'pucca',
    nombre: 'Pucca',
    imagenUrl: 'https://i.pinimg.com/564x/3c/2e/8d/3c2e8d0a4e8c8e4c8e8c4e8c8e8c4e8c.jpg',
    descripcion: 'Energía pura, amor incondicional y determinación. Nunca te suelto.',
    fraseIconica: '"Te daré besos hasta que el mundo termine."',
    colorPrimario: '#ff3366',
    colorSecundario: '#cc0022',
    colorAcento: '#ffcc00',
    colorFondo: '#ff3366',
  },
  {
    id: 'meliodas',
    nombre: 'Meliodas',
    imagenUrl: 'https://i.pinimg.com/564x/8c/3e/2d/8c3e2d8a4e8c8e4c8e8c4e8c8e8c4e8c.jpg',
    descripcion: 'Fuerte, leal y eterno. Haría cualquier cosa por protegerte.',
    fraseIconica: '"El pecado de la ira se convierte en amor cuando te veo."',
    colorPrimario: '#1a3c5e',
    colorSecundario: '#0d2135',
    colorAcento: '#c9a03d',
    colorFondo: '#1a3c5e',
  },
  {
    id: 'manolo',
    nombre: 'Manolo Sánchez',
    imagenUrl: 'https://i.pinimg.com/564x/4c/3e/2d/4c3e2d8a4e8c8e4c8e8c4e8c8e8c4e8c.jpg',
    descripcion: 'Romántico, apasionado y con alma de músico. Tú eres mi canción favorita.',
    fraseIconica: '"Te recordaré siempre, incluso en la otra vida."',
    colorPrimario: '#5c3a21',
    colorSecundario: '#3a2210',
    colorAcento: '#e8c4a0',
    colorFondo: '#5c3a21',
  },
];

// --- Fecha de inicio: 13 de Febrero de 2026 a las 15:00 (3:00 PM) ---
const FECHA_INICIO = new Date(2026, 1, 13, 15, 0, 0);

function calcularDiferencia() {
  const ahora = new Date();
  let diffMs = ahora.getTime() - FECHA_INICIO.getTime();
  if (diffMs < 0) diffMs = 0;

  const totalHoras = Math.floor(diffMs / (1000 * 60 * 60));
  const totalDias = Math.floor(totalHoras / 24);

  const años = Math.floor(totalDias / 365.25);
  let diasRestantes = totalDias - Math.floor(años * 365.25);
  if (diasRestantes < 0) diasRestantes = 0;
  const meses = Math.floor(diasRestantes / 30.44);
  const dias = Math.floor(diasRestantes - meses * 30.44);
  const horas = totalHoras % 24;

  return { años, meses, dias, horas };
}

// --- Componente Contador ---
const ContadorTiempo: React.FC<{ colorAcento: string }> = ({ colorAcento }) => {
  const [tiempo, setTiempo] = useState(calcularDiferencia);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularDiferencia());
    }, 60000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="countdown-grid">
      <div className="countdown-card" style={{ borderColor: colorAcento }}>
        <div className="countdown-number" style={{ color: colorAcento }}>{tiempo.años}</div>
        <div className="countdown-label">Años</div>
      </div>
      <div className="countdown-card" style={{ borderColor: colorAcento }}>
        <div className="countdown-number" style={{ color: colorAcento }}>{tiempo.meses}</div>
        <div className="countdown-label">Meses</div>
      </div>
      <div className="countdown-card" style={{ borderColor: colorAcento }}>
        <div className="countdown-number" style={{ color: colorAcento }}>{tiempo.dias}</div>
        <div className="countdown-label">Días</div>
      </div>
      <div className="countdown-card" style={{ borderColor: colorAcento }}>
        <div className="countdown-number" style={{ color: colorAcento }}>{tiempo.horas}</div>
        <div className="countdown-label">Horas</div>
      </div>
    </div>
  );
};

// --- Componente Timeline con colores dinámicos ---
const TimelineHitos: React.FC<{ colorAcento: string }> = ({ colorAcento }) => {
  const hitos = [
    { titulo: "Nuestro primer encuentro", descripcion: "El destello que inició la órbita", icono: "✨", fecha: "13/02/2026 · 15:00" },
    { titulo: "Nuestra primera victoria", descripcion: "Un logro compartido, cómplice", icono: "🏆", fecha: "Bajo el mismo cielo" },
    { titulo: "Nuestra primera aventura", descripcion: "Risas y latidos al unísono", icono: "🗺️", fecha: "Sendero infinito" },
    { titulo: "Nuestra mítica del viento", descripcion: "Susurros que el viento guarda", icono: "🍃", fecha: "Eterna melodía" },
  ];

  return (
    <div className="timeline">
      <div className="timeline-line" style={{ background: `linear-gradient(to bottom, ${colorAcento}, rgba(52, 211, 153, 0.3), transparent)` }}></div>
      {hitos.map((hito, idx) => (
        <div key={idx} className="timeline-item">
          <div className="timeline-card" style={{ borderColor: colorAcento }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '2rem' }}>{hito.icono}</span>
              <h3 className="timeline-title" style={{ color: colorAcento }}>{hito.titulo}</h3>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '0.5rem' }}>{hito.descripcion}</p>
            <p style={{ fontSize: '0.75rem', color: `${colorAcento}cc`, fontFamily: 'monospace' }}>{hito.fecha}</p>
          </div>
          <div className="timeline-dot" style={{ background: colorAcento, borderColor: colorAcento }}></div>
          <div style={{ width: '100%', maxWidth: '24rem' }}></div>
        </div>
      ))}
    </div>
  );
};

// --- Componente Cartas de Personajes ---
const CartasPersonajes: React.FC<{ 
  personajeSeleccionado: CartaPersonaje;
  onSelectPersonaje: (personaje: CartaPersonaje) => void;
}> = ({ personajeSeleccionado, onSelectPersonaje }) => {
  const [animacion, setAnimacion] = useState(false);

  useEffect(() => {
    setAnimacion(true);
    const timer = setTimeout(() => setAnimacion(false), 150);
    return () => clearTimeout(timer);
  }, [personajeSeleccionado]);

  return (
    <div>
      <div className="select-wrapper">
        <select
          value={personajeSeleccionado.id}
          onChange={(e) => {
            const found = personajesData.find(p => p.id === e.target.value);
            if (found) onSelectPersonaje(found);
          }}
          style={{
            background: `${personajeSeleccionado.colorFondo}cc`,
            borderColor: personajeSeleccionado.colorAcento,
            color: personajeSeleccionado.colorAcento
          }}
        >
          {personajesData.map(p => (
            <option key={p.id} value={p.id}>{p.nombre}</option>
          ))}
        </select>
      </div>

      <div className="carta" style={{ opacity: animacion ? 0 : 1, transition: 'opacity 0.15s' }}>
        <div style={{ 
          background: `linear-gradient(135deg, ${personajeSeleccionado.colorPrimario}, ${personajeSeleccionado.colorSecundario})`, 
          borderRadius: '1.5rem', 
          overflow: 'hidden',
          border: `1px solid ${personajeSeleccionado.colorAcento}`
        }}>
          <div className="carta-content">
            <div className="carta-imagen">
              <div className="carta-img-circle" style={{ borderColor: personajeSeleccionado.colorAcento }}>
                <img
                  src={personajeSeleccionado.imagenUrl}
                  alt={personajeSeleccionado.nombre}
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://i.imgur.com/mvH7hqE.png'; }}
                />
              </div>
            </div>
            <div className="carta-texto">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <i className="fas fa-star" style={{ color: personajeSeleccionado.colorAcento, fontSize: '0.875rem' }}></i>
                <h2 className="carta-nombre" style={{ color: 'white' }}>{personajeSeleccionado.nombre}</h2>
              </div>
              <p className="carta-descripcion" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{personajeSeleccionado.descripcion}</p>
              <div className="carta-frase" style={{ borderTopColor: `${personajeSeleccionado.colorAcento}40` }}>
                <p style={{ color: personajeSeleccionado.colorAcento }}>{personajeSeleccionado.fraseIconica}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', background: 'rgba(0,0,0,0.4)', padding: '0.25rem 0.75rem', borderRadius: '9999px', color: personajeSeleccionado.colorAcento }}>
                  {personajeSeleccionado.id} · carta digital
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Componente Mensaje Secreto ---
const MensajeSecretoPanel: React.FC<{ colorAcento: string; colorPrimario: string }> = ({ colorAcento, colorPrimario }) => {
  const [codigoIngresado, setCodigoIngresado] = useState('');
  const [mensajeMostrado, setMensajeMostrado] = useState(false);
  const [error, setError] = useState(false);

  const codigoCorrecto = "te amo hoy mañana y siempre";

  const handleVerificar = () => {
    if (codigoIngresado.trim().toLowerCase() === codigoCorrecto.toLowerCase()) {
      setMensajeMostrado(true);
      setError(false);
    } else {
      setError(true);
      setMensajeMostrado(false);
    }
  };

  return (
    <div className="secret-box" style={{ borderColor: colorAcento, background: `linear-gradient(135deg, ${colorPrimario}99, #0f172a99)` }}>
      {!mensajeMostrado ? (
        <div>
          <div className="text-center">
            <i className="fas fa-lock" style={{ fontSize: '2.5rem', color: colorAcento }}></i>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: colorAcento, marginTop: '0.5rem' }}>Acceso al mensaje estelar</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Ingresa la frase secreta para desbloquear palabras solo para ti.</p>
          </div>
          <div className="secret-input-group">
            <input
              type="text"
              value={codigoIngresado}
              onChange={(e) => setCodigoIngresado(e.target.value)}
              placeholder="Escribe el código..."
              className="secret-input"
              style={{ borderColor: colorAcento }}
              onKeyDown={(e) => e.key === 'Enter' && handleVerificar()}
            />
            <button onClick={handleVerificar} className="secret-button" style={{ background: colorAcento }}>
              <i className="fas fa-key" style={{ marginRight: '0.5rem' }}></i> Revelar
            </button>
          </div>
          {error && <p className="error-message" style={{ color: '#fca5a5' }}>Código incorrecto, intenta de nuevo, corazón.</p>}
        </div>
      ) : (
        <div className="mensaje-revelado">
          <div className="mensaje-corazon" style={{ background: `${colorAcento}33` }}>
            <i className="fas fa-envelope-open-text" style={{ fontSize: '2rem', color: colorAcento }}></i>
          </div>
          <h3 style={{ fontSize: '1.875rem', fontFamily: 'Georgia, serif', fontStyle: 'italic', color: colorAcento, marginTop: '1rem' }}>Para mi luz,</h3>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.6', color: 'white' }}>Eres el anillo más brillante de mi Saturno, el norte en mi universo.</p>
            <div className="mensaje-texto-especial" style={{ background: 'rgba(0, 0, 0, 0.3)', borderLeftColor: colorAcento }}>
              <p style={{ color: colorAcento }}>"Te amo hoy, mañana y siempre. Cada 13 de febrero es un recordatorio de que nuestro encuentro fue escrito entre las estrellas. Eres mi victoria favorita, mi aventura eterna. 💚"</p>
            </div>
            <p style={{ fontSize: '0.875rem', color: `${colorAcento}cc`, marginTop: '0.5rem' }}>— Tu otra mitad cósmica</p>
          </div>
          <button
            onClick={() => { setMensajeMostrado(false); setCodigoIngresado(''); setError(false); }}
            style={{ color: colorAcento, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', marginTop: '1rem' }}
          >
            <i className="fas fa-arrow-left" style={{ marginRight: '0.25rem' }}></i> Cerrar mensaje
          </button>
        </div>
      )}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL App ---
const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'principal' | 'cartas' | 'mensaje'>('principal');
  const [personajeActual, setPersonajeActual] = useState<CartaPersonaje>(personajesData[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-target');
      let current: 'principal' | 'cartas' | 'mensaje' = 'principal';
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 100) {
          const id = sec.getAttribute('id');
          if (id === 'seccion-principal') current = 'principal';
          if (id === 'seccion-cartas') current = 'cartas';
          if (id === 'seccion-mensaje') current = 'mensaje';
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const globalStyles = {
    background: `linear-gradient(135deg, ${personajeActual.colorPrimario} 0%, ${personajeActual.colorSecundario} 50%, #03100c 100%)`,
  };

  return (
    <div style={{ minHeight: '100vh', ...globalStyles, transition: 'background 0.5s ease' }}>
      {/* Navbar */}
      <nav className="navbar" style={{ 
        background: `${personajeActual.colorPrimario}cc`, 
        backdropFilter: 'blur(12px)',
        borderBottomColor: personajeActual.colorAcento 
      }}>
        <div className="nav-container">
          <button
            onClick={() => scrollTo('seccion-principal')}
            className="nav-link"
            style={activeSection === 'principal' ? { background: `${personajeActual.colorAcento}66`, boxShadow: `0 0 0 1px ${personajeActual.colorAcento}` } : {}}
          >
            <i className="fas fa-ring"></i> Principal
          </button>
          <button
            onClick={() => scrollTo('seccion-cartas')}
            className="nav-link"
            style={activeSection === 'cartas' ? { background: `${personajeActual.colorAcento}66`, boxShadow: `0 0 0 1px ${personajeActual.colorAcento}` } : {}}
          >
            <i className="fas fa-envelope"></i> Cartas
          </button>
          <button
            onClick={() => scrollTo('seccion-mensaje')}
            className="nav-link"
            style={activeSection === 'mensaje' ? { background: `${personajeActual.colorAcento}66`, boxShadow: `0 0 0 1px ${personajeActual.colorAcento}` } : {}}
          >
            <i className="fas fa-secret"></i> Mensaje Secreto
          </button>
        </div>
      </nav>

      <main className="container">
        {/* SECCIÓN PRINCIPAL */}
        <section id="seccion-principal" className="section-target" style={{ scrollMarginTop: '90px', marginBottom: '5rem' }}>
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(0,0,0,0.3)', borderRadius: '9999px', padding: '0.5rem 1.5rem', border: `1px solid ${personajeActual.colorAcento}`, marginBottom: '1rem' }}>
              <i className="fas fa-saturn" style={{ color: personajeActual.colorAcento }}></i>
              <span style={{ color: personajeActual.colorAcento }}>Anillos de eternidad</span>
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: '400', fontFamily: 'Georgia, serif', fontStyle: 'italic', background: `linear-gradient(135deg, ${personajeActual.colorAcento}, white)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              13 de Febrero · Eterno amor
            </h1>
            <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{ background: `${personajeActual.colorPrimario}66`, fontFamily: 'monospace', fontSize: '1.5rem', padding: '0.5rem 1.5rem', borderRadius: '9999px', border: `1px solid ${personajeActual.colorAcento}` }}>
                15:00
              </div>
            </div>
          </div>

          {/* Contador */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ background: `${personajeActual.colorPrimario}4d`, borderRadius: '1.5rem', padding: '1.5rem', backdropFilter: 'blur(8px)', border: `1px solid ${personajeActual.colorAcento}` }}>
              <div className="text-center" style={{ marginBottom: '1rem', color: personajeActual.colorAcento, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.875rem' }}>
                <i className="fas fa-hourglass-half" style={{ marginRight: '0.5rem' }}></i> Tiempo a tu lado <i className="fas fa-heart" style={{ fontSize: '0.75rem', marginLeft: '0.5rem' }}></i>
              </div>
              <ContadorTiempo colorAcento={personajeActual.colorAcento} />
              <p className="text-center" style={{ color: `${personajeActual.colorAcento}cc`, fontSize: '0.75rem', marginTop: '1rem' }}>Desde nuestro primer encuentro · 13/02/2026 15:00</p>
            </div>
          </div>

          {/* Timeline */}
          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: '700', color: personajeActual.colorAcento, textAlign: 'center', marginBottom: '2rem' }}>
              <i className="fas fa-chart-line" style={{ marginRight: '0.5rem' }}></i> Nuestra Historia Cósmica
            </h2>
            <TimelineHitos colorAcento={personajeActual.colorAcento} />
          </div>
        </section>

        {/* SECCIÓN CARTAS */}
        <section id="seccion-cartas" className="section-target" style={{ scrollMarginTop: '90px', marginBottom: '5rem' }}>
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '600', color: personajeActual.colorAcento }}>
              <i className="fas fa-envelope-open-text" style={{ marginRight: '0.75rem' }}></i> Cartas digitales
            </h2>
            <p style={{ color: `${personajeActual.colorAcento}cc`, maxWidth: '28rem', margin: '0.5rem auto 0' }}>Elige un personaje y toda la página cambiará a sus colores</p>
          </div>
          <CartasPersonajes 
            personajeSeleccionado={personajeActual}
            onSelectPersonaje={setPersonajeActual}
          />
        </section>

        {/* SECCIÓN MENSAJE SECRETO */}
        <section id="seccion-mensaje" className="section-target" style={{ scrollMarginTop: '90px' }}>
          <div className="text-center" style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: '600', color: personajeActual.colorAcento }}>
              <i className="fas fa-lock" style={{ marginRight: '0.75rem' }}></i> Mensaje Secreto
            </h2>
            <p style={{ color: `${personajeActual.colorAcento}cc` }}>Introduce el código único para abrir el sello</p>
          </div>
          <MensajeSecretoPanel colorAcento={personajeActual.colorAcento} colorPrimario={personajeActual.colorPrimario} />
        </section>

        <footer style={{ textAlign: 'center', color: `${personajeActual.colorAcento}99`, fontSize: '0.75rem', padding: '3rem 0 1rem', marginTop: '2.5rem', borderTop: `1px solid ${personajeActual.colorAcento}40` }}>
          <i className="fas fa-saturn"></i> Saturno testigo · Nuestro vínculo infinito <i className="fas fa-heart" style={{ color: personajeActual.colorAcento }}></i>
        </footer>
      </main>
    </div>
  );
};

export default App;