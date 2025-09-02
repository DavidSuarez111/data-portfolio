// Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

const translations = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_title: "Hi, I’m David.",
    hero_lead: "M. Sc. in Sciences | Specialized in Data Science. 9 years in biotechnology, immunology, and transcriptomics. 3 years creating solutions with data, programming, and web development.",
    hero_cta_work: "See my work",
    hero_cta_contact: "Contact me",
    about_title: "About me",
    about_text: "Over 9 years, I delved deep into biological sciences, from molecular biotechnology to immunology and transcriptomics. This path led me to found Vida en bebida, a company promoting probiotic superfoods with positive health impact. In the last 3 years, I expanded my profile to programming and data management, exploring how technology can amplify both research and business. Today, I seek to drive projects where data, technology, and/or science converge to generate innovative impact.",
    project1_title: "WhatsApp Sentiment Assistant",
    project1_desc: "A BERT-based sentiment and tone assistant for healthy relationship communication. Uses rule + ML signals aligned with defined boundaries.",
    project2_title: "Kefir Delivery Platform",
    project2_desc: "Order intake, decision logic, and delivery management for a kefir business. Clean API with Flask, modern UI in React.",
    project3_title: "Data Storytelling Gallery",
    project3_desc: "Curated notebooks with crisp, Apple-style visuals. Emphasis on narrative, reproducibility, and accessible insights.",
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
    hero_title: "Hola, soy David.",
    hero_lead: "M. Sc. en Ciencias | Especializado en Ciencia de Datos. 9 años de biotecnología, inmunología y transcriptómica. 3 años creando soluciones con datos, programación y desarrollo web.",
    hero_cta_work: "Ver mi trabajo",
    hero_cta_contact: "Contáctame",
    about_title: "Sobre mí",
    about_text: "Durante 9 años profundicé en las ciencias biológicas, desde la biotecnología molecular hasta la inmunología y la transcriptómica. Ese camino me llevó a fundar Vida en bebida, una empresa que promueve superalimentos probióticos con impacto positivo en la salud. Desde hace 3 años expandí mi perfil hacia la programación y el manejo de datos, explorando cómo la tecnología puede amplificar tanto la investigación como los negocios. Hoy busco impulsar proyectos en donde datos, tecnología y/o ciencia converjan para generar innovación con impacto.",
    project1_title: "Asistente de Sentimiento de WhatsApp",
    project1_desc: "Asistente basado en BERT para análisis de sentimiento y tono en comunicación saludable. Usa reglas + señales de ML alineadas a límites definidos.",
    project2_title: "Plataforma de Entrega de Kéfir",
    project2_desc: "Gestión de pedidos, lógica de decisiones y entregas para un negocio de kéfir. API limpia con Flask, interfaz moderna en React.",
    project3_title: "Galería de Data Storytelling",
    project3_desc: "Cuadernos curados con visuales nítidos estilo Apple. Énfasis en narrativa, reproducibilidad y análisis accesible.",
    contact_title: "Contáctame",
    contact_name_placeholder: "Tu nombre",
    contact_email_placeholder: "tu@correo.com",
    contact_message_placeholder: "Cuéntame sobre tu proyecto...",
    contact_send: "Enviar",
    footer_text: "David Suárez — Construido con cuidado."
  }
};

function setLanguage(lang) {
  const t = translations[lang];

  document.getElementById("nav_about").textContent = t.nav_about;
  document.getElementById("nav_projects").textContent = t.nav_projects;
  document.getElementById("nav_contact").textContent = t.nav_contact;

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

  document.getElementById("contact_title").textContent = t.contact_title;
  document.getElementById("name").placeholder = t.contact_name_placeholder;
  document.getElementById("email").placeholder = t.contact_email_placeholder;
  document.getElementById("message").placeholder = t.contact_message_placeholder;
  document.getElementById("contact_send").textContent = t.contact_send;

  document.getElementById("footer_text").innerHTML = `© <span id="year"></span> ${t.footer_text}`;
  document.getElementById("year").textContent = new Date().getFullYear();

  localStorage.setItem("lang", lang);
}

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
});

