<script setup lang="ts"></script>

<template>
  <section class="cv">
    <h1>Miguel Angel Vázquez Vázquez</h1>
    <p class="meta">
      Full Stack Web Developer —
      <a href="https://github.com/mvk12" target="_blank">mvk12 on GitHub</a>
    </p>

    <h2>Resumen</h2>
    <p>
      Desarrollador Full Stack con más de siete años de experiencia,
      especializado en Laravel y JavaScript (Vue.js 3, TypeScript). Enfoque en
      sistemas robustos, pruebas y automatización con GitHub Actions.
    </p>

    <h2>Experiencia</h2>
    <h3>Lirmi — Desarrollador Web Full Stack</h3>
    <p class="muted">Septiembre 2020 - Noviembre 2025</p>
    <ul>
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
        background y enviados por correo.
      </li>
      <li>
        Integración mediante APIs y RabbitMQ, migración de Vue 2 a Vue 3, GitHub
        Actions.
      </li>
    </ul>

    <h3>I.Net Soluciones — Desarrollador Web</h3>
    <p class="muted">Diciembre 2016 – Abril 2020</p>
    <ul>
      <li>Desarrollo y mantenimiento con Codeigniter 2, jQuery y Vue.js.</li>
      <li>
        Integración de servicios web y generación de reportes en background.
      </li>
    </ul>

    <h2>Educación</h2>
    <p>
      Benemérita Universidad Autónoma de Puebla — Ingeniería en Ciencias de la
      Computación (2011 – 2018)
    </p>

    <h2>Conocimientos y herramientas</h2>
    <ul>
      <li>
        Lenguajes: PHP, JavaScript, TypeScript, HTML, CSS, SQL, Bash, (Golang
        uso personal)
      </li>
      <li>
        Frameworks/Librerías: Vue.js, Vuex, Pinia, Vue Router, Inertia, Laravel,
        Codeigniter
      </li>
      <li>Testing/CI: PHPUnit, Vitest, Cypress, GitHub Actions</li>
      <li>
        Herramientas: Git, Docker/Podman, Puppeteer, RabbitMQ, Redis, Vite
      </li>
      <li>Plataformas: Sentry, Azure, AWS, Fly.io, GitHub, Bitbucket</li>
    </ul>

    <h2>Habilidades</h2>
    <p>
      Organización, Dedicación, Responsabilidad, Compromiso, Aprendizaje rápido,
      Comunicación.
    </p>

    <h2>Proyectos personales</h2>
    <p>
      Bash y Golang para scripts de automatización; experimentos con Goravel.
    </p>
  </section>
</template>

<style scoped>
.cv {
  padding: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}
.meta {
  color: #555;
  margin-bottom: 1rem;
}
.muted {
  color: #666;
  font-size: 0.95rem;
}
h2 {
  margin-top: 1.25rem;
}
</style>
