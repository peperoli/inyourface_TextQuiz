<template>
  <div class="home">
    <h1>Der ultimative Stiltest</h1>
    <p>Dir gefällt, was wir machen? Schön! Bevor wir loslegen, wollen wirs genauer wissen: Was trifft deinen Geschmack? Bist du die demokratische Lise mit zugeknöpfter Bluse, Brille und Humor für alle? Der fesche Hans, ders mit Augenzwinkern mag und bei grenzwertigen Sprüchen verlegen in den Pulliärmel lacht? Oder die laute Hilde mit Zahnlücke, Goldkette und Humor im dunkelgrauen Bereich? Wir werden sehen.</p>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },

    computed: {

    },

    methods: {

    },
    mounted() {
      this.$parent.bottomNav.back.label = '';
      this.$parent.bottomNav.back.path = '';
      this.$parent.bottomNav.forward.label = 'Weiter';
      this.$parent.bottomNav.forward.path = '/frage/1';
    }
  }
</script>
