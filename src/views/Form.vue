<template>
<div class="form">
  <h1>Der ultimative Stiltest</h1>
  <p>Bevor wir starten, möchten wir wissen, wer du bist.</p>

  <form @submit="checkForm" method="post" novalidate="true">

    <div v-if="errors.length">
      <b>Du hast etwas vergessen:</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>
    <div class="name">
      <label for="first-name">Vorname</label>
      <input type="text" name="first-name" id="first-name" v-model="firstName">
    </div>

    <div class="name">
      <label for="last-name">Nachname</label>
      <input type="text" name="last-name" id="lastname" v-model="lastName">
    </div>

    <label for="company">Unternehmen</label>
    <input type="text" name="company" id="company" v-model="company">

    <label for="email">E-Mail</label>
    <input type="email" name="email" id="email" v-model="email">

    <input class="submit" type="submit" value="Submit">

  </form>
</div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      success: '',
      errors: [],
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
      if (this.firstName && this.lastName && this.compoany && this.email) {
        return true;
        alert('All good!')
      }

      this.errors = [];

      if (!this.firstName) {
        this.errors.push('Vorname fehlt');
      }
      if (!this.lastName) {
        this.errors.push('Nachname fehlt');
      }
      if (!this.company) {
        this.errors.push('Unternehmen fehlt');
      }
      if (!this.email) {
        this.errors.push('E-Mail fehlt');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('E-Mail Adresse ungültig');
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
    this.$parent.bottomNav.forward.label = "Los geht's!";
    this.$parent.bottomNav.forward.path = '/intro';
  }
}
</script>
