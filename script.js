// ====== TRADUCCIONES ======
const translations = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    header_brand: "Data Science Portfolio",
    hero_title: "Hi, I’m David Suarez.",
    hero_lead: "M. Sc. in Sciences | Specialized in Data Science. 9 years of experience in biotechnology, immunology, and transcriptomics. 3 years creating solutions with data, programming, and web development.",
    hero_cta_work: "See my work",
    hero_cta_contact: "Contact me",
    project1_title: "WhatsApp Sentiment Assistant",
    project1_desc: "A BERT-based sentiment and tone assistant for healthy communication. Uses rules + ML signals.",
    project2_title: "Kefir Delivery Platform",
    project2_desc: "Order intake, decision logic, and delivery for a kefir business. API in Flask, UI in React.",
    project3_title: "Data Storytelling Gallery",
    project3_desc: "Curated notebooks with crisp visuals. Emphasis on narrative and reproducibility.",
    contact_title: "Contact me",
    contact_name_placeholder: "Your name",
    contact_email_placeholder: "you@example.com",
    contact_message_placeholder: "Anything you want to share?",
    contact_send: "Send",
    footer_text: "David Suárez — Built with care.",
    hero_prev: "Previous",
    hero_next: "Next",
    hero_caption_1: "Master's Graduation",
    hero_caption_2: "Bachelor's Degree Studying",
    libraries_title: "Languages & Libraries",
    core_tech_title: "Core Technologies",
    libraries_title_sub: "Libraries & Frameworks",
    lib_python: "Python",
    lib_sql: "SQL",
    lib_r: "R",
    lang_html: "HTML",
    lang_css: "CSS",
    lang_js: "JavaScript",
    lib_excel: "Excel",
    lib_pandas: "Pandas",
    lib_sklearn: "Scikit-learn",
    lib_matplotlib: "Matplotlib",
    lib_seaborn: "Seaborn",
    lib_ggplot2: "ggplot2",
    lib_tidyverse: "Tidyverse",
    lib_aws: "AWS",
    lib_azure: "Azure"
  },
  es: {
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_contact: "Contáctame",
    header_brand: "Portafolio de Ciencia de Datos",
    hero_title: "Hola, soy David Suárez.",
    hero_lead: "M. Sc. en Ciencias | Especializado en Ciencia de Datos. 9 años de experiencia en biotecnología, inmunología y transcriptómica. 3 años creando soluciones con datos, programación y desarrollo web.",
    hero_cta_work: "Ver mi trabajo",
    hero_cta_contact: "Contáctame",
    project1_title: "Asistente de Sentimiento de WhatsApp",
    project1_desc: "Asistente basado en BERT para análisis de sentimiento y tono. Usa reglas + señales de ML.",
    project2_title: "Plataforma de Entrega de Kéfir",
    project2_desc: "Gestión de pedidos y entregas para negocio de kéfir. API en Flask, UI en React.",
    project3_title: "Galería de Data Storytelling",
    project3_desc: "Cuadernos curados con visuales nítidos. Énfasis en narrativa y reproducibilidad.",
    contact_title: "Contáctame",
    contact_name_placeholder: "Tu nombre",
    contact_email_placeholder: "tu@correo.com",
    contact_message_placeholder: "Cuéntame sobre tu proyecto...",
    contact_send: "Enviar",
    footer_text: "David Suárez — Construido con cuidado.",
    hero_prev: "Anterior",
    hero_next: "Siguiente",
    hero_caption_1: "Graduación de Maestría",
    hero_caption_2: "Estudiando durante la Licenciatura",
    libraries_title: "Lenguajes y Librerías",
    core_tech_title: "Tecnologías Principales",
    libraries_title_sub: "Librerías y Frameworks",
    lib_python: "Python",
    lib_sql: "SQL",
    lib_r: "R",
    lang_html: "HTML",
    lang_css: "CSS",
    lang_js: "JavaScript",
    lib_excel: "Excel",
    lib_pandas: "Pandas",
    lib_sklearn: "Scikit-learn",
    lib_matplotlib: "Matplotlib",
    lib_seaborn: "Seaborn",
    lib_ggplot2: "ggplot2",
    lib_tidyverse: "Tidyverse",
    lib_aws: "AWS",
    lib_azure: "Azure"
  }
};

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

// ====== CAMBIO DE IDIOMA ======
function setLanguage(lang) {
  const t = translations[lang];

  // Navbar
  document.getElementById("nav_about").textContent = t.nav_about;
  document.getElementById("nav_projects").textContent = t.nav_projects;
  document.getElementById("nav_contact").textContent = t.nav_contact;

  // Hero
  document.getElementById("header_brand").textContent = t.header_brand;
  document.getElementById("hero_title").textContent = t.hero_title;
  document.getElementById("hero_lead").textContent = t.hero_lead;
  document.getElementById("hero_cta_work").textContent = t.hero_cta_work;
  document.getElementById("hero_cta_contact").textContent = t.hero_cta_contact;
  document.getElementById("hero_prev").textContent = t.hero_prev;
  document.getElementById("hero_next").textContent = t.hero_next;

  // Projects
  document.getElementById("project1_title").textContent = t.project1_title;
  document.getElementById("project1_desc").textContent = t.project1_desc;
  document.getElementById("project2_title").textContent = t.project2_title;
  document.getElementById("project2_desc").textContent = t.project2_desc;
  document.getElementById("project3_title").textContent = t.project3_title;
  document.getElementById("project3_desc").textContent = t.project3_desc;

  // Contact
  document.getElementById("contact_title").textContent = t.contact_title;
  document.getElementById("name").placeholder = t.contact_name_placeholder;
  document.getElementById("email").placeholder = t.contact_email_placeholder;
  document.getElementById("message").placeholder = t.contact_message_placeholder;
  document.getElementById("contact_send").textContent = t.contact_send;

  // Footer
  document.getElementById("footer_text").innerHTML = `© <span id="year"></span> ${t.footer_text}`;
  document.getElementById("year").textContent = new Date().getFullYear();

  // Librerías y Tecnologías
  //document.getElementById("libraries_title").textContent = t.libraries_title;
  //document.getElementById("libraries_title_sub").textContent = t.libraries_title_sub;
  //document.getElementById("lib_python").textContent = t.lib_python;
  //document.getElementById("lib_sql").textContent = t.lib_sql;
  //document.getElementById("lib_r").textContent = t.lib_r;
  //document.getElementById("lib_excel").textContent = t.lib_excel;
  //document.getElementById("lib_pandas").textContent = t.lib_pandas;
  //document.getElementById("lib_sklearn").textContent = t.lib_sklearn;
  //document.getElementById("lib_matplotlib").textContent = t.lib_matplotlib;
  //document.getElementById("lib_seaborn").textContent = t.lib_seaborn;
  //document.getElementById("lib_ggplot2").textContent = t.lib_ggplot2;
  //document.getElementById("lib_tidyverse").textContent = t.lib_tidyverse;
  //document.getElementById("lib_aws").textContent = t.lib_aws;
  //document.getElementById("lib_azure").textContent = t.lib_azure;

  localStorage.setItem("lang", lang);
  mostrarFoto();
}

// ====== INICIALIZACIÓN ======
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  // -------- 1) Botones Hero --------
  document.getElementById("hero_prev").addEventListener("click", prevFoto);
  document.getElementById("hero_next").addEventListener("click", nextFoto);

  // -------- 2) Toggle idioma --------
  document.getElementById("lang-toggle").addEventListener("click", () => {
    const current = localStorage.getItem("lang") === "es" ? "en" : "es";
    setLanguage(current);
  });

  // -------- 3) Toggle tema --------
  const themeBtn = document.getElementById("theme-toggle");
  themeBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", current);
    localStorage.setItem("theme", current);
    themeBtn.textContent = current === "dark" ? "☀" : "☾";
  });

  // -------- 4) Inicializar tema --------
  const savedTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", savedTheme);
  themeBtn.textContent = savedTheme === "dark" ? "☀" : "☾";

  // -------- 5) Inicializar idioma y mostrar hero --------
  const savedLang = localStorage.getItem("lang") || "es";
  setLanguage(savedLang); // Esto ya llama a mostrarFoto()

  // -------- 6) Año en footer --------
  document.getElementById("year").textContent = new Date().getFullYear();
});
