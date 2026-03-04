<script setup lang="ts"></script>

<template>
  <section class="container">
    <header class="header">
      <h1>Miguel Angel Vázquez Vázquez</h1>
      <p class="subtitle">Full Stack Developer — Laravel, Vue.js, TypeScript</p>
    </header>

    <section class="section">
      <h2>
        <span class="icon" aria-hidden="true">💡</span>
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
        <span class="icon" aria-hidden="true">💼</span>
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
        <span class="icon" aria-hidden="true">🎓</span>
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
        <span class="icon" aria-hidden="true">🛠️</span>
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
        <span class="icon" aria-hidden="true">⭐</span>
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
        <span class="icon" aria-hidden="true">📧</span>
        Contacto
      </h2>
      <div class="contact-links">
        <a
          href="https://github.com/mvk12"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link"
        >
          <span class="contact-icon">GitHub</span>
          mvk12
        </a>
        <a
          href="https://www.linkedin.com/in/miguel-angel-v%C3%A1zquez-v%C3%A1zquez-b2a37a106/"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link"
        >
          <span class="contact-icon">LinkedIn</span>
          mvk12
        </a>
      </div>
    </section>
  </section>
</template>
