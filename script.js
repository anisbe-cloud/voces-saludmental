
/*
  STREAMING:
  Cuando tengas el enlace de YouTube, reemplaza el valor de STREAM_URL.
  Ejemplo:
  const STREAM_URL = "https://www.youtube.com/watch?v=XXXXXXXXXXX";
*/
const STREAM_URL = "";

function youtubeEmbed(url) {
  if (!url) return "";
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return "https://www.youtube.com/embed/" + u.pathname.replace("/", "");
    }
    const id = u.searchParams.get("v");
    if (id) return "https://www.youtube.com/embed/" + id;
    if (u.pathname.includes("/live/")) {
      return "https://www.youtube.com/embed/" + u.pathname.split("/live/")[1].split("/")[0];
    }
  } catch (e) {}
  return url;
}

const frame = document.getElementById("stream-frame");
const placeholder = document.getElementById("video-placeholder");
const embed = youtubeEmbed(STREAM_URL);

if (embed) {
  frame.src = embed;
  frame.hidden = false;
  placeholder.hidden = true;
}

const reseñasPonentes = {
  "paveleden": {
    nombre: "Dr. Pavel Edén Arenas Castañeda",
    cargo: "Presidente de “Ama Salud Mental” A.C.",
    tema: "Riesgo suicida",
    foto: "dr.paveleden.jpg",
    parrafos: [
      `Médico Cirujano egresado de la Universidad Nacional Autónoma de México (UNAM), especialista en Psiquiatría
       por el Hospital Fray Bernardino Álvarez y en Psiquiatría Infantil y de la Adolescencia por el Hospital 
       Psiquiátrico Infantil Dr. Juan N. Navarro`,

      `Es miembro de la Asociación Psiquiátrica Mexicana y cuenta con trayectoria en investigación y atención de la 
       conducta suicida, con publicaciones en revistas científicas de alto impacto y participación en iniciativas 
       nacionales para su prevención y abordaje integral, en colaboración con instituciones como la UNAM, CONASAMA y la OPS`,

      `Actualmente mantiene colaboración con especialistas internacionales en salud mental y es presidente y 
      fundador de AMA Salud Mental A.C., asociación sin fines de lucro dedicada a brindar atención integral y 
      gratuita a personas en alto riesgo de suicidio.`
     
    ]
  },


  "dianairis": {
    nombre: "Dra. Diana Iris Tejadilla Orozco",
    cargo: "Psic. especializada en el Hospital Psiquiátrico Infantil Dr. Juan N. Navarro",
    tema: "Abuso sexual",
    foto: "dianatejadilla.jpeg",
    parrafos: [
      `Doctora en Alta Dirección en Establecimientos de Salud, cuenta con una maestría en Ciencias, 
      con especialidad en Neurobiología, por el Instituto de Neurobiología de la Universidad Nacional 
      Autónoma de México (UNAM), y es licenciada en Psicología Fisiológica por la Facultad de Psicología 
      de la misma institución.`,

      `En su trayectoria profesional, se ha desempeñado como secretaria técnica del Secretariado 
      Técnico del Consejo Nacional de Salud Mental de la Secretaría de Salud Federal, directora de 
      Investigación en BrainScan Group, asesora especializada en Salud Mental en Laboratorios Roche y 
      docente en el Ministerio Francés de Educación. Asimismo, cuenta con experiencia como terapeuta 
      cognitivo-conductual en la práctica privada.`,

      `Su formación académica y experiencia profesional integran conocimientos en neurobiología, psicología 
      y gestión de servicios de salud, con una trayectoria vinculada a la investigación, la atención y la promoción de la salud mental.`
      
    ]
  },
  "jose-luis": {
    nombre: "PICD. José Luis Ángeles Gómez",
    cargo: "Dir. Gral. CECOSAMÁ Pachuca",
    tema: "Dinámica vivencial",
    foto: "fotospanelistas/drjoseluisangeles.png",
    parrafos: [
      `Médico Cirujano egresado de la Universidad Autónoma del
      Estado de Hidalgo (UAEH), con una sólida trayectoria
      profesional en el ámbito de la salud mental, la prevención
      y el tratamiento integral de las adicciones.`,

      `Cuenta con una Maestría en Prevención Integral del Consumo
      de Drogas por la Universidad Veracruzana, un Diplomado en
      Familia y Codependencia por Monte Fénix, un Diplomado en
      Tratamiento Integral de las Adicciones por el Instituto
      Politécnico Nacional y Estudios Superiores de Logoterapia,
      enfocados en el sentido de vida, por la Universidad La Salle
      Pachuca. Asimismo, ha realizado cursos de actualización en
      salud mental, prevención de la violencia, prevención del
      suicidio y consumo de sustancias psicoactivas.`,

      `En el ámbito de la gestión pública, se desempeñó como
      director del Instituto Municipal contra las Adicciones de
      Pachuca, Hidalgo, durante el periodo 2002-2007. En 2007
      ingresó a la Secretaría de Salud, donde fue responsable del
      programa de adicciones y participó en la elaboración del
      modelo de atención del entonces CEAIA, actualmente
      CECOSAMA Pachuca. Posteriormente, ocupó el cargo de
      subdirector de dicha institución de 2011 a 2014 y se
      desempeñó como coordinador médico del CECOSAMA Pachuca
      durante el periodo 2022-2026.`,

      `Actualmente, colabora con asociaciones civiles comprometidas
      con la atención de las adicciones en mujeres y la prevención
      de la violencia, entre ellas IXHUA y Familia Rompamos el
      Silencio, contribuyendo al acompañamiento y la atención de
      personas y familias en situación de vulnerabilidad.`,

      `En el ámbito académico, cuenta con 15 años de experiencia
      docente en la Escuela de Medicina Intermédica, donde imparte
      las asignaturas de Introducción a la Salud Mental y
      Medicina Psicológica.`,

      `Su trayectoria se distingue por su compromiso con la salud
      mental, la prevención y atención de las adicciones, el
      fortalecimiento familiar y la promoción del bienestar integral,
      combinando la experiencia clínica, la gestión institucional,
      la docencia y el trabajo con organizaciones de la sociedad civil.`
    ]
  },
  "cristianmolina": {
    nombre: "Dr. Cristian Molina Pizarro",
    cargo: "Investigador especializado en temas de salud mental · España",
    tema: "Tecnología y salud mental",
    foto: "fotospanelistas/drcristianmolina.jpg",
    parrafos: [
      `Es médico especialista en Psiquiatría, con experiencia clínica 
      en el Hospital Virgen de los Lirios y en el Centro de Salud Mental (CSM) 
      La Fábrica, en Alcoy, Alicante, España, donde participa en la atención 
      de pacientes y en la Unidad de Primeros Episodios Psicóticos.`,

      `Cuenta con un doctorado en Medicina por la Universidad Autónoma de Madrid, 
      con mención Cum Laude, cuya investigación se centra en la prevención, 
      monitorización, seguimiento e intervención en el comportamiento suicida.`,

      `En México, se ha desempeñado como asesor del Programa Nacional de 
      Prevención del Suicidio y coordinador del Programa de Brigadas de 
      Apoyo en Salud Mental del Gobierno de México, contribuyendo al desarrollo 
      de estrategias de prevención y atención en este ámbito.`,

      `Asimismo, participa en el desarrollo de soluciones de inteligencia 
      artificial aplicadas a la detección, prevención, atención y seguimiento 
      de problemas de salud mental, mediante el proyecto Memind, con presencia 
      en España, Estados Unidos, México y Chile.`,

      `Entre sus líneas de trabajo destaca el cribado de población mayor 
      de 15 años para la prevención de la conducta suicida mediante 
      el uso de teléfonos inteligentes, con experiencia en proyectos 
      desarrollados en Alcoy, España.`,


      `Su trayectoria integra la práctica clínica, la investigación científica
       y la innovación tecnológica, con especial énfasis en la prevención 
       del suicidio y el desarrollo de estrategias para fortalecer la atención en salud mental.`
    ]
  },

  "andromeda-valencia": {
    nombre: "Dra. Andrómeda Ivette Valencia Ortíz",
    cargo: "Investigadora y Jefa del Área Académica de Psicología UAEH.",
    tema: "Bienestar universitario",
    foto: "fotospanelistas/andromeda-valencia.jpg",
    parrafos: [
      `Licenciada en Psicología y doctora en Psicología de la Salud por la 
      Universidad Nacional Autónoma de México (UNAM), con formación especializada 
      en el estudio de las enfermedades crónico-degenerativas en la infancia, 
      particularmente en el ámbito de la psicooncología pediátrica.`,

      `Actualmente, se desempeña como profesora investigadora de tiempo completo, categoría B, 
      en el Instituto de Ciencias de la Salud de la Universidad Autónoma del Estado de Hidalgo (UAEH), 
      donde también funge como jefa del Área Académica de Psicología. Es integrante del Cuerpo Académico 
      Salud Emocional e investigadora del Sistema Nacional de Investigadoras e Investigadores, nivel I. 
      Cuenta con una amplia trayectoria docente en programas de licenciatura, maestría y doctorado, 
      así como experiencia académica en instituciones como la UNAM y diversas universidades del país.`,

      `Su labor científica se centra en la psicología de la salud, la psicooncología infantil, la obesidad, 
      la diabetes, la epilepsia, la ansiedad, la depresión y los problemas de conducta. Es creadora del 
      programa de intervención psicológica El Juego del Optimismo, dirigido a niñas, niños y sus familias, 
      que integra principios de la terapia cognitivo-conductual y la psicología positiva. Es autora de libros, capítulos y 
      más de 30 artículos científicos y de divulgación, además de participar en procesos de estandarización nacional de 
      instrumentos de evaluación psicológica.`,

      `En el ámbito profesional y académico, ha ocupado cargos de responsabilidad en instituciones de 
      atención psicológica, ha dirigido tesis de distintos niveles educativos y participa como editora 
      y revisora de publicaciones científicas. Asimismo, es integrante de asociaciones nacionales e internacionales 
      de psicología y psicoterapias cognitivo-conductuales. Ha representado a México ante la Federación Latinoamericana de 
      Psicoterapias Cognitivas y Conductuales (ALAPCCO) y preside la Asociación Nacional de Profesionales de Ciencias Cognitivas y 
      del Comportamiento (ANProCCC)`,

      `Su trayectoria ha sido reconocida con diversas distinciones, entre ellas la medalla Dr. Juan Romero Romo, otorgada 
      en 2007 por su programa de intervención psicológica para niñas y niños con cáncer y sus familias, así como reconocimientos 
      por su contribución a la investigación y la formación de profesionales de la psicología.`,

      `Su experiencia en investigación, docencia, intervención clínica y desarrollo de programas de atención psicológica 
      la consolida como una destacada especialista en psicología de la salud y bienestar emocional.`,

      
    ]
  }
  
};

const modal = document.getElementById("bio-modal");
const foto = document.getElementById("bio-photo");
const nombre = document.getElementById("bio-name");
const cargo = document.getElementById("bio-role");
const tema = document.getElementById("bio-topic");
const contenido = document.getElementById("bio-content");

let botonAnterior = null;

document.querySelectorAll(".read-more").forEach((boton) => {
  boton.addEventListener("click", () => {
    const ponente = reseñasPonentes[boton.dataset.speaker];
    if (!ponente) return;

    botonAnterior = boton;

    foto.src = ponente.foto;
    foto.alt = ponente.nombre;
    nombre.textContent = ponente.nombre;
    cargo.textContent = ponente.cargo;
    tema.textContent = ponente.tema;

    contenido.replaceChildren();

    ponente.parrafos.forEach((texto) => {
      const parrafo = document.createElement("p");
      parrafo.textContent = texto;
      contenido.appendChild(parrafo);
    });

    modal.hidden = false;
    document.body.classList.add("modal-open");

    modal.querySelector(".bio-close").focus();
  });
});

function cerrarResena() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");

  if (botonAnterior) botonAnterior.focus();
}

modal.querySelectorAll("[data-close-modal]").forEach((elemento) => {
  elemento.addEventListener("click", cerrarResena);
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && !modal.hidden) {
    cerrarResena();
  }
});

