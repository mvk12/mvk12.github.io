<script setup lang="ts"></script>

<template>
  <section class="home">
    <h1>Hola — soy Miguel Angel Vázquez</h1>
    <p>Desarrollador Full Stack — Laravel, Vue.js, TypeScript.</p>
    <p>
      Consulta mi CV desde la pestaña <router-link to="/cv">CV</router-link>.
    </p>

    <p>
      Desarrollador Full Stack con más de siete años de experiencia,
      especializado en Laravel y JavaScript (Vue.js 3, TypeScript). Me centro en
      construir sistemas robustos así como ofrecer nuevas funcionalidades con un
      compromiso de calidad. a través de pruebas, automatización con GitHub
      Actions e integración de servicios REST y RabbitMQ.
    </p>
  </section>
  <section class="contact">
    <h1>Contacto</h1>
    <p>GitHub: <a href="https://github.com/mvk12" target="_blank">mvk12</a></p>
    <p>
      LinkedIn:
      <a
        href="https://www.linkedin.com/in/miguel-angel-v%C3%A1zquez-v%C3%A1zquez-b2a37a106/"
        target="_blank"
        >mvk12</a
      >
    </p>
  </section>
</template>

<style scoped>
.home {
  padding: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.contact {
  padding: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 0.5rem;
}
</style>
