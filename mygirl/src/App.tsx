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

// --- Tipos para los hitos de la línea del tiempo ---
interface HitoHistoria {
  titulo: string;
  descripcion: string;
  icono: string;
  fecha: string;
  imagenUrl: string; // Nueva propiedad para imágenes
}

const personajesData: CartaPersonaje[] = [
  {
    id: 'edward',
    nombre: 'Edward',
    imagenUrl: '/juntosh.jpeg', 
    descripcion: 'El dueño de este corazón, el que hace brillar cada anillo de Saturno. Eres mi persona favorita en este universo, y siempre lo seras te amo mas que a nadie en el mundo my girl',
    fraseIconica: '"Contigo, hasta el infinito sabe a poco."',
    colorPrimario: '#071e17',
    colorSecundario: '#0a2a21',
    colorAcento: '#34d399',
    colorFondo: '#071e17',
  },
  {
    id: 'kuromi',
    nombre: 'Kuromi',
    imagenUrl: '/Kuromi.jpg',
    descripcion: '¿Pensaste que Edward era todo seriedad? ¡Ja! Soy su lado rebelde. Aunque me haga la ruda, sé que este chico solo tiene ojos para Sofia. ¡Es un romántico irremediable y no puede ocultarlo!',
    fraseIconica: '"Edward es un tonto por Sofia, ¡pero es NUESTRO tonto favorito!"',
    colorPrimario: '#2d1b2e',
    colorSecundario: '#1a0f1a',
    colorAcento: '#e91e63',
    colorFondo: '#2d1b2e',
  },
  {
    id: 'pucca',
    nombre: 'Pucca',
    imagenUrl: 'pucca.jpg',
    descripcion: '¡Garuuu! Digo... ¡Edward! Él es igual que yo: cuando se trata de Sofia, ¡no hay nada que lo detenga! Su amor es como un salto infinito, siempre buscando darle todo el cariño del mundo. ¡Sofia es su persona favorita en toda la aldea y más allá!',
    fraseIconica: '"¡Un amor tan fuerte que hace temblar toda la galaxia!"',
    colorPrimario: '#ff3366',
    colorSecundario: '#cc0022',
    colorAcento: '#ffcc00',
    colorFondo: '#ff3366',
  },
  {
    id: 'meliodas',
    nombre: 'Meliodas',
    imagenUrl: 'meliodas.jpg',
    descripcion: '¡Sate sate sate! Parece que Edward encontró un tesoro más valioso que cualquier espada sagrada. Su amor por Sofia es como mi maldición: ¡eterno e inquebrantable! No importa cuántos enemigos aparezcan, él siempre regresará al lado de su princesa.',
    fraseIconica: '"¡Incluso si tuviera que enfrentar a los Diez Mandamientos, mi lealtad es solo para ella!"',
    colorPrimario: '#1a3c5e',
    colorSecundario: '#0d2135',
    colorAcento: '#c9a03d',
    colorFondo: '#1a3c5e',
  },
  {
    id: 'manolo',
    nombre: 'Manolo Sánchez',
    imagenUrl: 'descarga (20).jpg',
    descripcion: 'He tocado mil canciones, pero ninguna tan bella como la historia de Edward y Sofia. El amor que él siente es como una serenata eterna que brota del corazón; un amor tan valiente que no le teme ni al olvido. ¡Eres un verdadero romántico, amigo mío!',
    fraseIconica: '"¡Que el mundo entero lo sepa: mi canción favorita siempre será el amor de Edward por Sofia!"',
    colorPrimario: '#5c3a21',
    colorSecundario: '#3a2210',
    colorAcento: '#e8c4a0',
    colorFondo: '#5c3a21',
  },
];

const FECHA_INICIO = new Date(2026, 1, 13, 15, 0, 0);

function calcularDiferencia() {
  const ahora = new Date();
  const inicio = new Date(2026, 1, 13, 15, 0, 0); 

  let años = ahora.getFullYear() - inicio.getFullYear();
  let meses = ahora.getMonth() - inicio.getMonth();
  let dias = ahora.getDate() - inicio.getDate();
  let horas = ahora.getHours() - inicio.getHours();
  let minutos = ahora.getMinutes() - inicio.getMinutes();
  let segundos = ahora.getSeconds() - inicio.getSeconds();

  // Ajuste de segundos
  if (segundos < 0) {
    minutos--;
    segundos += 60;
  }

  // Ajuste de minutos
  if (minutos < 0) {
    horas--;
    minutos += 60;
  }

  // Ajuste de horas
  if (horas < 0) {
    dias--;
    horas += 24;
  }

  // Ajuste de días
  if (dias < 0) {
    meses--;
    const ultimoDiaMesPasado = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
    dias += ultimoDiaMesPasado;
  }

  // Ajuste de meses
  if (meses < 0) {
    años--;
    meses += 12;
  }

  return { años, meses, dias, horas, minutos, segundos };
}

const ContadorTiempo: React.FC<{ colorAcento: string }> = ({ colorAcento }) => {
  const [tiempo, setTiempo] = useState(calcularDiferencia);

  useEffect(() => {
    // Actualizamos cada segundo ahora
    const intervalo = setInterval(() => setTiempo(calcularDiferencia()), 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="countdown-grid" style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
      gap: '1rem' 
    }}>
      <div className="countdown-card" style={{ border: `1px solid ${colorAcento}`, background: 'rgba(0,0,0,0.6)', padding: '1rem', borderRadius: '15px', textAlign: 'center' }}>
        <div className="countdown-number" style={{ color: colorAcento, fontSize: '2rem', fontWeight: 'bold' }}>{tiempo.años}</div>
        <div className="countdown-label" style={{ color: 'white', fontSize: '0.8rem' }}>Años</div>
      </div>
      <div className="countdown-card" style={{ border: `1px solid ${colorAcento}`, background: 'rgba(0,0,0,0.6)', padding: '1rem', borderRadius: '15px', textAlign: 'center' }}>
        <div className="countdown-number" style={{ color: colorAcento, fontSize: '2rem', fontWeight: 'bold' }}>{tiempo.meses}</div>
        <div className="countdown-label" style={{ color: 'white', fontSize: '0.8rem' }}>Meses</div>
      </div>
      <div className="countdown-card" style={{ border: `1px solid ${colorAcento}`, background: 'rgba(0,0,0,0.6)', padding: '1rem', borderRadius: '15px', textAlign: 'center' }}>
        <div className="countdown-number" style={{ color: colorAcento, fontSize: '2rem', fontWeight: 'bold' }}>{tiempo.dias}</div>
        <div className="countdown-label" style={{ color: 'white', fontSize: '0.8rem' }}>Días</div>
      </div>
      <div className="countdown-card" style={{ border: `1px solid ${colorAcento}`, background: 'rgba(0,0,0,0.6)', padding: '1rem', borderRadius: '15px', textAlign: 'center' }}>
        <div className="countdown-number" style={{ color: colorAcento, fontSize: '2rem', fontWeight: 'bold' }}>{tiempo.horas}</div>
        <div className="countdown-label" style={{ color: 'white', fontSize: '0.8rem' }}>Horas</div>
      </div>
      {/* Nuevos campos de Minutos y Segundos */}
      <div className="countdown-card" style={{ border: `1px solid ${colorAcento}`, background: 'rgba(0,0,0,0.6)', padding: '1rem', borderRadius: '15px', textAlign: 'center' }}>
        <div className="countdown-number" style={{ color: colorAcento, fontSize: '2rem', fontWeight: 'bold' }}>{tiempo.minutos}</div>
        <div className="countdown-label" style={{ color: 'white', fontSize: '0.8rem' }}>Minutos</div>
      </div>
      <div className="countdown-card" style={{ border: `1px solid ${colorAcento}`, background: 'rgba(0,0,0,0.6)', padding: '1rem', borderRadius: '15px', textAlign: 'center' }}>
        <div className="countdown-number" style={{ color: colorAcento, fontSize: '2rem', fontWeight: 'bold' }}>{tiempo.segundos}</div>
        <div className="countdown-label" style={{ color: 'white', fontSize: '0.8rem' }}>Segundos</div>
      </div>
    </div>
  );
};

const TimelineHitos: React.FC<{ colorAcento: string }> = ({ colorAcento }) => {
  const [hitoSeleccionado, setHitoSeleccionado] = useState<HitoHistoria | null>(null);

  const hitos: HitoHistoria[] = [
    { 
      titulo: "Nuestra primera llamada", 
      descripcion: "El día en el que la historia comenzó, donde las voces se volvieron una.", 
      icono: "📞", 
      fecha: "20/12/2025 · 15:00", 
      imagenUrl: "/primera_llamada.jpeg" 
    },
    { 
      titulo: "La persona más importante", 
      descripcion: "Ese momento especial cuando me presentaste a Alex.", 
      icono: "👥", 
      fecha: "02/02/2026", 
      imagenUrl: "/conoci_alex.jpeg" 
    },
    { 
      titulo: "¿Puedo ser tu novio?", 
      descripcion: "El destello que inició la órbita. El día que te pedí permiso de caminar a tu lado.", 
      icono: "💌", 
      fecha: "13/02/2026 · 15:00", 
      imagenUrl: "" // Lo dejamos vacío para activar el diseño especial
    },
    { 
      titulo: "Nuestra boda en Among Us", 
      descripcion: "La unión de dos sombras para vivir juntos incluso en la oscuridad del espacio.", 
      icono: "💍", 
      fecha: "29/03/2026", 
      imagenUrl: "/boda_amongu.jpeg" 
    },
  ];

  return (
    <div className="timeline">
      <div className="timeline-line" style={{ background: colorAcento }}></div>
      
      {hitos.map((hito, idx) => (
        <div key={idx} className="timeline-item" onClick={() => setHitoSeleccionado(hito)} style={{ cursor: 'pointer' }}>
          <div className="timeline-card" style={{ 
            borderColor: colorAcento, 
            background: 'rgba(0,0,0,0.7)', 
            overflow: 'hidden', 
            padding: 0,
            borderRadius: '15px',
            border: `1px solid ${colorAcento}`,
            transition: 'transform 0.3s'
          }}>
            {/* LÓGICA DE IMAGEN O FRASE ESPECIAL */}
            {hito.imagenUrl ? (
              <img src={hito.imagenUrl} alt={hito.titulo} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            ) : (
              <div style={{ 
                width: '100%', 
                height: '150px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                background: `linear-gradient(45deg, ${colorAcento}22, rgba(0,0,0,0.5))`,
                padding: '1rem',
                textAlign: 'center'
              }}>
                <p style={{ color: colorAcento, fontStyle: 'italic', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  "No hay fotos, pero sí bonitos recuerdos"
                </p>
              </div>
            )}
            
            <div style={{ padding: '1rem' }}>
              <h3 style={{ color: colorAcento, fontSize: '1.1rem', margin: 0 }}>{hito.titulo}</h3>
              <p style={{ color: 'white', fontSize: '0.85rem', marginTop: '0.5rem' }}>Ver más...</p>
            </div>
          </div>
          <div className="timeline-dot" style={{ background: colorAcento }}></div>
        </div>
      ))}

      {/* --- MODAL --- */}
      {hitoSeleccionado && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center',
            alignItems: 'center', zIndex: 2000, padding: '20px', backdropFilter: 'blur(10px)'
          }}
          onClick={() => setHitoSeleccionado(null)}
        >
          <div 
            style={{
              background: '#111', border: `2px solid ${colorAcento}`,
              borderRadius: '20px', maxWidth: '450px', width: '95%',
              overflow: 'hidden', position: 'relative',
              boxShadow: `0 0 30px ${colorAcento}44`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setHitoSeleccionado(null)}
              style={{
                position: 'absolute', top: '10px', right: '10px',
                background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none',
                borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer',
                fontSize: '1.2rem', zIndex: 10
              }}
            >
              ✕
            </button>

            {hitoSeleccionado.imagenUrl ? (
              <img 
                src={hitoSeleccionado.imagenUrl} 
                alt={hitoSeleccionado.titulo} 
                style={{ width: '100%', maxHeight: '50vh', objectFit: 'contain', background: '#000' }} 
              />
            ) : (
              <div style={{ 
                width: '100%', 
                height: '300px', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center', 
                background: `linear-gradient(180deg, rgba(0,0,0,0.8), ${colorAcento}11)`,
                padding: '2rem',
                textAlign: 'center'
              }}>
                <i className="fas fa-heart" style={{ color: colorAcento, fontSize: '3rem', marginBottom: '1rem' }}></i>
                <h3 style={{ color: 'white', fontStyle: 'italic', fontSize: '1.4rem' }}>
                  "No hay fotos, pero sí bonitos recuerdos"
                </h3>
              </div>
            )}

            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '2rem' }}>{hitoSeleccionado.icono}</span>
                <h2 style={{ color: colorAcento, margin: 0 }}>{hitoSeleccionado.titulo}</h2>
              </div>
              <p style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.5' }}>{hitoSeleccionado.descripcion}</p>
              <p style={{ color: colorAcento, marginTop: '1.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>{hitoSeleccionado.fecha}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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
    <div className="secret-box" style={{ borderColor: colorAcento, background: `linear-gradient(135deg, ${colorPrimario}99, #0f172a99)`, border: '1px solid', borderRadius: '1.5rem', padding: '2rem' }}>
      {!mensajeMostrado ? (
        <div className="text-center">
          <i className="fas fa-lock" style={{ fontSize: '2.5rem', color: colorAcento }}></i>
          <h3 style={{ color: colorAcento, margin: '1rem 0' }}>Mensaje Estelar Bajo Sello</h3>
          <input
            type="text"
            value={codigoIngresado}
            onChange={(e) => setCodigoIngresado(e.target.value)}
            placeholder="Ingresa la frase secreta..."
            style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'rgba(0,0,0,0.7)', color: 'white', border: `1px solid ${colorAcento}`, marginBottom: '1rem' }}
            onKeyDown={(e) => e.key === 'Enter' && handleVerificar()}
          />
          <button onClick={handleVerificar} style={{ background: colorAcento, color: 'black', padding: '0.8rem 2rem', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}>
            Revelar Corazón
          </button>
          {error && <p style={{ color: '#fca5a5', marginTop: '1rem' }}>Esa no es la frase, intenta de nuevo.</p>}
        </div>
      ) : (
        <div className="mensaje-revelado text-center">
          <h3 style={{ fontStyle: 'italic', color: colorAcento, fontSize: '2rem' }}>Para mi luz eterna,</h3>
          <div style={{ background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '15px', borderLeft: `6px solid ${colorAcento}`, margin: '1.5rem 0' }}>
            <p style={{ color: 'white', fontSize: '1.2rem', lineHeight: '1.6' }}>
              "Te amo hoy, mañana y siempre. Cada 13 de febrero es un recordatorio de que nuestro encuentro fue escrito entre las estrellas. Eres mi victoria favorita, eres la persona que mas amo y que quiero a mi lado para siempre, me disculpo por todo lo malo, pero que sepas que siempre seras la mejor persona para mi y siempre te quiero a vos a mi lado, desde hoy hasta que Saturno y el color verde dejen de existir.🪐"
            </p>
          </div>
          <button onClick={() => setMensajeMostrado(false)} style={{ color: colorAcento, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Cerrar Sello</button>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'principal' | 'cartas' | 'mensaje'>('principal');
  const [personajeActual, setPersonajeActual] = useState<CartaPersonaje>(personajesData[0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const overlayStyle = {
    background: `linear-gradient(180deg, rgba(0,0,0,0.3) 0%, ${personajeActual.colorPrimario}99 100%)`,
    minHeight: '100vh',
    transition: 'background 0.5s ease',
  };

  return (
    <div style={overlayStyle}>
      <nav className="navbar" style={{ background: 'rgba(0,0,0,0.85)', borderBottom: `2px solid ${personajeActual.colorAcento}`, position: 'fixed', width: '100%', top: 0, zIndex: 1000, backdropFilter: 'blur(10px)' }}>
        <div className="nav-container" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', padding: '1rem' }}>
          <button onClick={() => scrollTo('seccion-principal')} className="nav-link" style={{ color: activeSection === 'principal' ? personajeActual.colorAcento : 'white', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Principal</button>
          <button onClick={() => scrollTo('seccion-cartas')} className="nav-link" style={{ color: activeSection === 'cartas' ? personajeActual.colorAcento : 'white', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Cartas</button>
          <button onClick={() => scrollTo('seccion-mensaje')} className="nav-link" style={{ color: activeSection === 'mensaje' ? personajeActual.colorAcento : 'white', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Secreto</button>
        </div>
      </nav>

      <main className="container" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
        <section id="seccion-principal">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
             <div style={{ display: 'inline-flex', gap: '0.75rem', background: 'rgba(0,0,0,0.5)', borderRadius: '9999px', padding: '0.5rem 1.5rem', border: `1px solid ${personajeActual.colorAcento}`, marginBottom: '1.5rem' }}>
              <i className="fas fa-saturn" style={{ color: personajeActual.colorAcento }}></i>
              <span style={{ color: 'white', fontWeight: 'bold' }}>Anillos de eternidad</span>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 10vw, 4.5rem)', 
              fontWeight: '900', 
              color: 'white',
              textShadow: `0 0 20px ${personajeActual.colorAcento}, 2px 2px 5px black`,
              margin: '1rem 0',
              lineHeight: '1.1'
            }}>
              13 de Febrero <br/> Eterno amor
            </h1>
            
            <div style={{ background: 'rgba(0,0,0,0.8)', display: 'inline-block', padding: '0.6rem 2rem', borderRadius: '15px', border: `2px solid ${personajeActual.colorAcento}`, color: personajeActual.colorAcento, fontWeight: 'bold', fontSize: '1.5rem', marginTop: '1rem' }}>
              15:00
            </div>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '2rem', padding: '2rem', border: `1px solid ${personajeActual.colorAcento}33`, backdropFilter: 'blur(8px)' }}>
            <ContadorTiempo colorAcento={personajeActual.colorAcento} />
          </div>

          <div style={{ marginTop: '6rem' }}>
            <h2 className="text-center" style={{ color: 'white', fontSize: '2.5rem', marginBottom: '3rem', textShadow: `0 0 10px ${personajeActual.colorAcento}` }}>Nuestra Historia Cósmica</h2>
            <TimelineHitos colorAcento={personajeActual.colorAcento} />
          </div>
        </section>

       <section id="seccion-cartas" style={{ marginTop: '8rem', perspective: '1000px' }}>
  <div className="text-center" style={{ marginBottom: '3rem' }}>
    <h2 style={{ 
      color: 'white', 
      fontSize: '2.5rem', 
      textShadow: `0 0 15px ${personajeActual.colorAcento}`,
      fontFamily: 'Georgia, serif' 
    }}>
      Cartas de Colección
    </h2>
    <div style={{ position: 'relative', display: 'inline-block', marginTop: '1.5rem' }}>
      <select 
        value={personajeActual.id} 
        onChange={(e) => setPersonajeActual(personajesData.find(p => p.id === e.target.value)!)}
        style={{ 
          background: 'rgba(0,0,0,0.9)', 
          color: personajeActual.colorAcento, 
          border: `2px solid ${personajeActual.colorAcento}`, 
          padding: '0.8rem 2rem', 
          borderRadius: '12px', 
          fontSize: '1.1rem', 
          cursor: 'pointer',
          appearance: 'none',
          textAlign: 'center',
          boxShadow: `0 0 10px ${personajeActual.colorAcento}44`
        }}
      >
        {personajesData.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
      </select>
    </div>
  </div>
  
  {/* CONTENEDOR DE LA CARTA */}
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    padding: '0 1rem' 
  }}>
    <div className="carta-especial" style={{ 
      background: `linear-gradient(135deg, ${personajeActual.colorPrimario}dd, #000)`, 
      border: `3px solid ${personajeActual.colorAcento}`, 
      borderRadius: '25px', 
      padding: '1.5rem', 
      maxWidth: '450px', 
      width: '100%',
      boxShadow: `0 20px 50px ${personajeActual.colorPrimario}, 0 0 20px ${personajeActual.colorAcento}33`,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Efecto de Brillo/Holograma */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: `radial-gradient(circle, ${personajeActual.colorAcento}11 0%, transparent 70%)`,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Encabezado de la Carta */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '1rem',
          borderBottom: `1px solid ${personajeActual.colorAcento}44`,
          paddingBottom: '0.5rem'
        }}>
          <span style={{ color: 'white', fontWeight: '900', fontSize: '1.2rem', textTransform: 'uppercase' }}>
            {personajeActual.nombre}
          </span>
          <div style={{ display: 'flex', gap: '5px' }}>
            <i className="fas fa-star" style={{ color: personajeActual.colorAcento, fontSize: '0.8rem' }}></i>
            <i className="fas fa-star" style={{ color: personajeActual.colorAcento, fontSize: '0.8rem' }}></i>
            <i className="fas fa-star" style={{ color: personajeActual.colorAcento, fontSize: '0.8rem' }}></i>
          </div>
        </div>

        {/* Imagen de la Carta */}
        <div style={{ 
          background: '#000', 
          borderRadius: '15px', 
          padding: '5px', 
          border: `1px solid ${personajeActual.colorAcento}66`,
          marginBottom: '1.5rem',
          boxShadow: 'inset 0 0 15px rgba(0,0,0,0.5)'
        }}>
           <img 
            src={personajeActual.imagenUrl} 
            alt={personajeActual.nombre} 
            style={{ 
              width: '100%', 
              height: '300px', 
              borderRadius: '10px', 
              objectFit: 'cover',
              display: 'block'
            }} 
          />
        </div>

        {/* Info de la Carta */}
        <div style={{ 
          background: 'rgba(0,0,0,0.5)', 
          padding: '1.5rem', 
          borderRadius: '15px', 
          border: `1px solid ${personajeActual.colorAcento}22` 
        }}>
          <p style={{ 
            color: '#fff', 
            fontSize: '1rem', 
            lineHeight: '1.5', 
            marginBottom: '1rem',
            textAlign: 'center',
            minHeight: '60px'
          }}>
            {personajeActual.descripcion}
          </p>
          
          <div style={{ 
            marginTop: '1rem', 
            padding: '0.8rem', 
            background: `${personajeActual.colorPrimario}44`, 
            borderRadius: '10px', 
            borderLeft: `4px solid ${personajeActual.colorAcento}`,
            textAlign: 'center'
          }}>
            <p style={{ 
              color: personajeActual.colorAcento, 
              fontStyle: 'italic', 
              fontWeight: 'bold',
              fontSize: '0.95rem'
            }}>
              {personajeActual.fraseIconica}
            </p>
          </div>
        </div>

        {/* Pie de Carta */}
        <div style={{ 
          marginTop: '1rem', 
          display: 'flex', 
          justifyContent: 'center', 
          fontSize: '0.7rem', 
          color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          <span>Edición Especial Saturno 2026</span>
        </div>
      </div>
    </div>
  </div>
</section>

        <section id="seccion-mensaje" style={{ marginTop: '8rem' }}>
          <MensajeSecretoPanel colorAcento={personajeActual.colorAcento} colorPrimario={personajeActual.colorPrimario} />
        </section>

        <footer style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', marginTop: '6rem', fontSize: '0.9rem' }}>
          <p>Hecho con amor bajo los anillos de Saturno 💚</p>
        </footer>
      </main>
    </div>
  );
};

export default App;