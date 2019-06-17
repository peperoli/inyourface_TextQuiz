<template>
<div class="result page">
  <h1>Was jetzt passiert, liegt nicht mehr in deinen Händen.</h1>
  <picture>
    <source srcset="../assets/auswertung.png" type="image/png">
    <img src="../assets/auswertung.gif" alt="Auswertung ...">
  </picture>
</div>
</template>

<script type="text/javascript">
export default {

  props: [
    'questionID'
  ],

  data() {
    return {

    }
  },

  computed: {

  },

  methods: {
    countDown() {
      setTimeout(() => this.$router.push('/resultat'), 5500)
    },

  },
  mounted() {
    this.countDown()
    this.$parent.bottomNav.back.label = '';
    this.$parent.bottomNav.back.path = '';
    this.$parent.bottomNav.forward.label = '';
    this.$parent.bottomNav.forward.path = '';
  },
}
</script>
