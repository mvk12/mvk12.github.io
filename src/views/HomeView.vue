<script setup lang="ts"></script>

<template>
  <section class="container">
    <header class="header">
      <h1>Miguel Angel Vázquez Vázquez</h1>
      <p class="subtitle">Full Stack Developer — Laravel, Vue.js, TypeScript</p>
    </header>

    <section class="section">
      <h2>
        <span class="icon">💡</span>
        Resumen
      </h2>
      <p>
        Desarrollador Full Stack especializado en Laravel, Vue.js y TypeScript.
        Me enfoco en construir sistemas robustos, ofrecer nuevas funcionalidades
        con calidad mediante pruebas, automatización con GitHub Actions e
        integración de servicios REST y RabbitMQ.
      </p>
    </section>

    <section class="section">
      <h2>
        <span class="icon">💼</span>
        Experiencia
      </h2>
      <div class="experience-item">
        <h3>🏫 Lirmi — Desarrollador Web Full Stack</h3>
        <p class="date">Septiembre 2020 - Noviembre 2025</p>
        <ul class="experience-list">
          <li>
            Mantenimiento de un sistema integral de gestión escolar (Laravel +
            Vue.js), resolución de incidencias con SLA.
          </li>
          <li>
            Desarrollo respaldado por tests unitarios (PHPUnit) y uso de IA para
            casos de borde.
          </li>
          <li>
            Reportes (PDF con Puppeteer, Excel con Laravel Excel) procesados en
            segundo plano y enviados por correo.
          </li>
          <li>
            Integración mediante APIs y RabbitMQ, migración de Vue 2 a Vue 3,
            GitHub Actions.
          </li>
        </ul>
      </div>

      <div class="experience-item">
        <h3>💻 I.Net Soluciones — Desarrollador Web</h3>
        <p class="date">Diciembre 2016 – Abril 2020</p>
        <ul class="experience-list">
          <li>
            Desarrollo y mantenimiento con Codeigniter 2, jQuery y Vue.js.
          </li>
          <li>
            Integración de servicios web y generación de reportes en segundo
            plano.
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <h2>
        <span class="icon">🎓</span>
        Educación
      </h2>
      <div class="education-item">
        <p class="bold">
          Benemérita Universidad Autónoma de Puebla — Ingeniería en Ciencias de
          la Computación.
        </p>
        <p class="date">2011 – 2018</p>
      </div>
    </section>

    <section class="section">
      <h2>
        <span class="icon">🛠️</span>
        Conocimientos y herramientas
      </h2>
      <div class="skills-grid">
        <div class="skill-category">
          <p class="skill-label">Lenguajes</p>
          <div class="tech-tags">
            <span class="tech-tag">PHP</span>
            <span class="tech-tag">JavaScript</span>
            <span class="tech-tag">TypeScript</span>
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
            <span class="tech-tag">SQL</span>
            <span class="tech-tag">Bash</span>
            <span class="tech-tag">Golang</span>
          </div>
        </div>
        <div class="skill-category">
          <p class="skill-label">Frameworks y Librerías</p>
          <div class="tech-tags">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">Vuex</span>
            <span class="tech-tag">Pinia</span>
            <span class="tech-tag">Vue Router</span>
            <span class="tech-tag">Inertia</span>
            <span class="tech-tag">Laravel</span>
            <span class="tech-tag">CodeIgniter</span>
          </div>
        </div>
        <div class="skill-category">
          <p class="skill-label">Testing y CI/CD</p>
          <div class="tech-tags">
            <span class="tech-tag">PHPUnit</span>
            <span class="tech-tag">Vitest</span>
            <span class="tech-tag">Cypress</span>
            <span class="tech-tag">GitHub Actions</span>
          </div>
        </div>
        <div class="skill-category">
          <p class="skill-label">Herramientas</p>
          <div class="tech-tags">
            <span class="tech-tag">Git</span>
            <span class="tech-tag">Docker</span>
            <span class="tech-tag">Podman</span>
            <span class="tech-tag">Puppeteer</span>
            <span class="tech-tag">RabbitMQ</span>
            <span class="tech-tag">Redis</span>
            <span class="tech-tag">Vite</span>
          </div>
        </div>
        <div class="skill-category">
          <p class="skill-label">Plataformas</p>
          <div class="tech-tags">
            <span class="tech-tag">Sentry</span>
            <span class="tech-tag">Azure</span>
            <span class="tech-tag">AWS</span>
            <span class="tech-tag">Fly.io</span>
            <span class="tech-tag">GitHub</span>
            <span class="tech-tag">Bitbucket</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>
        <span class="icon">⭐</span>
        Habilidades
      </h2>
      <div class="skills-highlight">
        <span class="skill-badge">Organización</span>
        <span class="skill-badge">Dedicación</span>
        <span class="skill-badge">Responsabilidad</span>
        <span class="skill-badge">Compromiso</span>
        <span class="skill-badge">Aprendizaje rápido</span>
        <span class="skill-badge">Comunicación</span>
      </div>
    </section>

    <section class="section contact-section">
      <h2>
        <span class="icon">📧</span>
        Contacto
      </h2>
      <div class="contact-links">
        <a href="https://github.com/mvk12" target="_blank" class="contact-link">
          <span class="contact-icon">GitHub</span>
          mvk12
        </a>
        <a
          href="https://www.linkedin.com/in/miguel-angel-v%C3%A1zquez-v%C3%A1zquez-b2a37a106/"
          target="_blank"
          class="contact-link"
        >
          <span class="contact-icon">LinkedIn</span>
          mvk12
        </a>
      </div>
    </section>
  </section>
</template>

<style scoped>
.container {
  padding: 0;
  min-height: 100vh;
  color: var(--text-primary);
}

.header {
  background: var(--bg-secondary);
  padding: 3rem 2rem;
  border-bottom: 1px solid var(--border-color);
  text-align: center;
}

.header h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.subtitle {
  margin: 0;
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 400;
  letter-spacing: 0.5px;
}

.section {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  border-bottom: 1px solid var(--border-color);
}

.section:last-child {
  border-bottom: none;
}

h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
}

.icon {
  font-size: 1.3em;
  display: inline-block;
}

p {
  margin: 0.5rem 0;
  color: var(--text-primary);
  line-height: 1.7;
}

.date {
  margin-bottom: 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
}

.bold {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

/* Experience */
.experience-item {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

.experience-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.experience-list {
  padding-left: 1.5rem;
  margin: 0;
  color: var(--text-secondary);
}

.experience-list li {
  margin-bottom: 0.75rem;
  line-height: 1.7;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-category {
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 6px;
  border: 1px solid var(--border-color);
}

.skill-label {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  display: inline-block;
  padding: 0.3rem 0.65rem;
  background: #e6f0ff;
  color: #0052cc;
  border: 1px solid #b3d9ff;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2px;
  white-space: nowrap;
  line-height: 1.3;
}

[data-theme='dark'] .tech-tag {
  background: #1a3a4d;
  color: #5eb3ff;
  border-color: #2d5a7a;
}

.skill-category p:last-child {
  margin-bottom: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Skills Highlight */
.skills-highlight {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-badge {
  display: inline-block;
  padding: 0.3rem 0.65rem;
  background: #e6f0ff;
  color: #0052cc;
  border: 1px solid #b3d9ff;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2px;
  white-space: nowrap;
  line-height: 1.3;
}

[data-theme='dark'] .skill-badge {
  background: #1a3a4d;
  color: #5eb3ff;
  border-color: #2d5a7a;
}

/* Contact */
.contact-section {
  background: var(--bg-secondary);
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--accent);
  font-weight: 500;
  transition: all 0.2s ease;
}

.contact-link:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.contact-icon {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
}
</style>
