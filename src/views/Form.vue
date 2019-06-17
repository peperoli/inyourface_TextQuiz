<template>
<div class="form page">
  <h1>Der ultimative Stiltest</h1>
  <p>Bevor wir starten, möchten wir wissen, wer du bist.</p>

  <form @submit="checkForm" method="post" novalidate="true">

    <div class="full-name">
      <div class="name">
        <label for="first-name">Vorname</label>
        <input type="text" name="first-name" id="first-name" v-model="firstName">
        <span v-if="errors.firstName">{{ errors.firstName }}</span>
      </div>

      <div class="name">
        <label for="last-name">Nachname</label>
        <input type="text" name="last-name" id="lastname" v-model="lastName">
        <span v-if="errors.lastName">{{ errors.lastName }}</span>
      </div>
    </div>

    <label for="company">Unternehmen</label>
    <input type="text" name="company" id="company" v-model="company">
    <span v-if="errors.company">{{ errors.company }}</span>

    <label for="email">E-Mail</label>
    <input type="email" name="email" id="email" v-model="email">
    <span v-if="errors.email">{{ errors.email }}</span>

    <!-- @click="checkForm" entfernen -->
    <input class="submit" type="submit" @click="checkForm" value="Los geht's!">

  </form>
</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      errors: {
        firstName: null,
        lastName: null,
        company: null,
        email: null
      },
      /* Form data: */
      firstName: null,
      lastName: null,
      company: null,
      email: null
    }
  },

  computed: {

  },

  methods: {
    checkForm: function(e) {
      if (this.firstName && this.lastName && this.company && this.validEmail(this.email)) {
        this.$router.push({name: 'intro'})
      }

      this.errors = {};

      if (!this.firstName) {
        this.errors.firstName = 'Vorname fehlt';
      }
      if (!this.lastName) {
        this.errors.lastName = 'Nachname fehlt';
      }
      if (!this.company) {
        this.errors.company = 'Unternehmen fehlt';
      }
      if (!this.email) {
        this.errors.email = 'E-Mail fehlt';
      } else if (!this.validEmail(this.email)) {
        this.errors.email = 'E-Mail ungültig';
      }

      e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  mounted() {
    this.$parent.bottomNav.back.label = '';
    this.$parent.bottomNav.back.path = '';
    this.$parent.bottomNav.forward.label = '';
    this.$parent.bottomNav.forward.path = '';
  }
}
</script>
