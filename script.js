// Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    header_brand: "Data Science Portfolio",
    hero_title: "Hi, I’m David Suarez",
    hero_lead: "M. Sc. in Sciences | Specialized in Data Science.\n9 years in biotechnology, immunology, and transcriptomics.\n3 years creating solutions with data, programming, and web development.",
    hero_caption_1: "Master's Graduation",
    hero_caption_2: "Struggling for a bachelor's",
    hero_prev: "Previous",
    hero_next: "Next",
    hero_cta_work: "See my work",
    hero_cta_contact: "Contact me",
    about_title: "About me",
    about_text: "Over 9 years, I delved deep into biological sciences, from molecular biotechnology to immunology and transcriptomics. This path led me to found Vida en bebida, a company promoting probiotic superfoods with positive health impact. In the last 3 years, I expanded my profile to programming and data management, exploring how technology can amplify both research and business. Today, I seek to drive projects where data, technology, and/or science converge to generate innovative impact.",
    project1_title: "Sentiment Analysis of Movie Reviews for Junky Union",
    project1_desc: "Developed a natural language processing model (LR + BERT) with 88% accuracy in detecting positive or negative tone in movie reviews, eliminating the need to read reviews to understand audience sentiment.",
    project2_title: "Taxi Ride Demand Prediction for Swift Lift Taxi",
    project2_desc: "Built a time series-based LGBM model to forecast hourly taxi demand, facilitating driver management and incentives. Predicted 120 orders for the next hour with a margin of error of ±48 orders.",
    project3_title: "Elucidating the Origin of Virulence Gain in the Most Problematic Tuberculosis Strain",
    project3_desc: "Designed an end-to-end bioinformatics pipeline using R and Python to generate insights of interest to tuberculosis experts. Collaborative project between INCMNSZ and UANL: Immunology.",
    libraries_title: "Languages & Libraries",
    libraries_title_sub: "Libraries & Frameworks",
    core_tech_title: "Core Technologies",
    lang_python: "Python",
    lang_sql: "SQL",
    lang_r: "R",
    lang_html: "HTML",
    lang_css: "CSS",
    lang_js: "JavaScript",
    lang_aws: "AWS",
    lang_azure: "Azure",
    lang_excel: "Excel",
    lib_pandas: "Pandas",
    lib_sklearn: "Scikit-learn",
    lib_matplotlib: "Matplotlib",
    lib_seaborn: "Seaborn",
    lib_ggplot2: "ggplot2",
    lib_tidyverse: "Tidyverse",
    contact_title: "Contact me",
    contact_name_placeholder: "Your name",
    contact_email_placeholder: "you@example.com",
    contact_message_placeholder: "Tell me about your project...",
    contact_send: "Send",
    footer_text: "David Suárez — Built with care."
  },
  es: {
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_contact: "Contáctame",
    header_brand: "Portafolio de Ciencia de Datos",
    hero_title: "Hola, soy David Suárez.",
    hero_lead: "M. Sc. en Ciencias | Especializado en Ciencia de Datos.\n9 años de biotecnología, inmunología y transcriptómica.\n3 años creando soluciones con datos, programación y desarrollo web.",
    hero_caption_1: "Graduación de Maestría en Ciencias",
    hero_caption_2: "Días de licenciatura",
    hero_prev: "Anterior",
    hero_next: "Siguiente",
    hero_cta_work: "Ver mi trabajo",
    hero_cta_contact: "Contáctame",
    about_title: "Sobre mí",
    about_text: "Durante 9 años profundicé en las ciencias biológicas, desde la biotecnología molecular hasta la inmunología y la transcriptómica. Ese camino me llevó a fundar Vida en bebida, una empresa que promueve superalimentos probióticos con impacto positivo en la salud. Desde hace 3 años expandí mi perfil hacia la programación y el manejo de datos, explorando cómo la tecnología puede amplificar tanto la investigación como los negocios. Hoy busco impulsar proyectos en donde datos, tecnología y/o ciencia converjan para generar innovación con impacto.",
    project1_title: "Análisis de Sentimientos de Reseñas de Películas para Junky Union",
    project1_desc: "Elaboré un modelo de análisis de lenguaje natural (LR + BERT) con 88% de asertividad en detectar el tono positivo o negativo en reseñas de películas eliminando la necesidad de leer las reseñas para entender como se sienten los espectadores.",
    project2_title: "Predicción de Demanda de Viajes en Taxi para Swift Lift Taxi",
    project2_desc: "Desarrollé un modelo de Lgbm basado en series temporales para predecir la demanda de pedidos de taxis por hora, facilitando la gestión e incentivación de conductores. 120 órdenes predecidas en la siguiente hora con un margen de error de ±48 ordenes.",
    project3_title: "Elucidación del Origen de Ganancia de Virulencia de la Cepa más Problemática de la Tuberculosis",
    project3_desc: "Desarrollé un protocolo bioinformático end to end empleando R y python para generar entendimientos de interés para y ante científicos expertos en tuberculosis. Proyecto de colaboración entre INCMNSZ y UANL:Inmunología.",
    libraries_title: "Lenguajes y Librerías",
    libraries_title_sub: "Librerías y Frameworks",
    core_tech_title: "Tecnologías Principales",
    lang_python: "Python",
    lang_sql: "SQL",
    lang_r: "R",
    lang_html: "HTML",
    lang_css: "CSS",
    lang_js: "JavaScript",
    lang_excel: "Excel",
    lang_aws: "AWS",
    lang_azure: "Azure",
    lib_pandas: "Pandas",
    lib_sklearn: "Scikit-learn",
    lib_matplotlib: "Matplotlib",
    lib_seaborn: "Seaborn",
    lib_ggplot2: "ggplot2",
    lib_tidyverse: "Tidyverse",
    contact_title: "Contáctame",
    contact_name_placeholder: "Tu nombre",
    contact_email_placeholder: "tu@correo.com",
    contact_message_placeholder: "Cuéntame sobre tu proyecto...",
    contact_send: "Enviar",
    footer_text: "David Suárez — Construido con detalle."
  }
};

function setLanguage(lang) {
  const t = translations[lang];

  document.getElementById("nav_about").textContent = t.nav_about;
  document.getElementById("nav_projects").textContent = t.nav_projects;
  document.getElementById("nav_contact").textContent = t.nav_contact;

  document.getElementById("header_brand").textContent = t.header_brand;
  document.getElementById("hero_title").textContent = t.hero_title;
  document.getElementById("hero_lead").textContent = t.hero_lead;
  document.getElementById("hero_cta_work").textContent = t.hero_cta_work;
  document.getElementById("hero_cta_contact").textContent = t.hero_cta_contact;


  document.getElementById("about_title").textContent = t.about_title;
  document.getElementById("about_text").textContent = t.about_text;

  document.getElementById("project1_title").textContent = t.project1_title;
  document.getElementById("project1_desc").textContent = t.project1_desc;
  document.getElementById("project2_title").textContent = t.project2_title;
  document.getElementById("project2_desc").textContent = t.project2_desc;
  document.getElementById("project3_title").textContent = t.project3_title;
  document.getElementById("project3_desc").textContent = t.project3_desc;

  // Librerías y Tecnologías
  document.getElementById("libraries_title").textContent = t.libraries_title;
  document.getElementById("libraries_title_sub").textContent = t.libraries_title_sub;
  document.getElementById("core_tech_title").textContent = t.core_tech_title;
  document.getElementById("lang_html").textContent = t.lang_html;
  document.getElementById("lang_css").textContent = t.lang_css;
  document.getElementById("lang_js").textContent = t.lang_js;
  document.getElementById("lang_python").textContent = t.lang_python;
  document.getElementById("lang_sql").textContent = t.lang_sql;
  document.getElementById("lang_r").textContent = t.lang_r;
  document.getElementById("lang_excel").textContent = t.lang_excel;
  document.getElementById("lib_pandas").textContent = t.lib_pandas;
  document.getElementById("lib_sklearn").textContent = t.lib_sklearn;
  document.getElementById("lib_matplotlib").textContent = t.lib_matplotlib;
  document.getElementById("lib_seaborn").textContent = t.lib_seaborn;
  document.getElementById("lib_ggplot2").textContent = t.lib_ggplot2;
  document.getElementById("lib_tidyverse").textContent = t.lib_tidyverse;
  document.getElementById("lang_aws").textContent = t.lang_aws;
  document.getElementById("lang_azure").textContent = t.lang_azure;

  document.getElementById("contact_title").textContent = t.contact_title;
  document.getElementById("name").placeholder = t.contact_name_placeholder;
  document.getElementById("email").placeholder = t.contact_email_placeholder;
  document.getElementById("message").placeholder = t.contact_message_placeholder;
  document.getElementById("contact_send").textContent = t.contact_send;

  document.getElementById("footer_text").innerHTML = `© <span id="year"></span> ${t.footer_text}`;
  document.getElementById("year").textContent = new Date().getFullYear();
  
  if (lang === "es") {
    setVideoLanguage("es");
  } else if (lang === "en") {
    setVideoLanguage("en");
  }

  localStorage.setItem("lang", lang);
}

// ====== HERO FOTOS ======
const heroFotos = [
  { src: "assets/graduacion.jpg", captionKey: "hero_caption_1" },
  { src: "assets/estudio.png", captionKey: "hero_caption_2" }
];
let currentFoto = 0;

function mostrarFoto() {
  const img = document.getElementById("hero_img");
  const caption = document.getElementById("hero_caption");
  const lang = localStorage.getItem("lang") || "es";
  const t = translations[lang];
  img.src = heroFotos[currentFoto].src;
  caption.textContent = t[heroFotos[currentFoto].captionKey];
}

// ====== NAVEGACIÓN HERO ======
function prevFoto() {
  currentFoto = (currentFoto - 1 + heroFotos.length) % heroFotos.length;
  mostrarFoto();
}

function nextFoto() {
  currentFoto = (currentFoto + 1) % heroFotos.length;
  mostrarFoto();
}
//-actualizar botones de cambio de fotos //
function actualizarHeroLang() {
  const lang = localStorage.getItem("lang") || "es";
  const t = translations[lang];
  
  document.getElementById("hero_prev").textContent = t.hero_prev;
  document.getElementById("hero_next").textContent = t.hero_next;
  
  mostrarFoto(); // actualiza el caption también
}

//botones de fotos //
document.getElementById("hero_prev").addEventListener("click", prevFoto);
document.getElementById("hero_next").addEventListener("click", nextFoto);

// Inicializa idioma guardado o español
const savedLang = localStorage.getItem("lang") || "es";
setLanguage(savedLang);

// Theme toggle
const root = document.documentElement;
const btn = document.getElementById('theme-toggle');
btn.textContent = (root.getAttribute('data-theme') === 'dark') ? '☀' : '☾';

btn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
  btn.textContent = current === 'dark' ? '☀' : '☾';
});

// Language toggle
const langBtn = document.getElementById("lang-toggle");
langBtn.addEventListener("click", () => {
  const current = localStorage.getItem("lang") === "es" ? "en" : "es";
  setLanguage(current);
  actualizarHeroLang();
});

// about experimental //
function setVideoLanguage(lang) {
  const videoSource = document.getElementById("about_video_source");
  const video = document.getElementById("about_video");

  if (lang === "es") {
    videoSource.src = "assets/es-1.mp4";
  } else if (lang === "en") {
    videoSource.src = "assets/en-1.mp4";
  }

  video.load();
}

const userLang = navigator.language.startsWith("es") ? "es" : "en";
setVideoLanguage(userLang);

// inicializar fotos //
window.onload = mostrarFoto;
window.onload = actualizarHeroLang;