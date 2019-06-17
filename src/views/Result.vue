<template>
  <div class="result page">
    <h1>{{ $parent.result.headline }}</h1>
    <p>{{ $parent.result.description }}</p>
    <br>
    <p>{{ $parent.result.spiritAnimal }}</p>
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
      this.$parent.bottomNav.back.label = 'Quiz wiederholen';
      this.$parent.bottomNav.back.path = '/';
      this.$parent.bottomNav.forward.label = '';
      this.$parent.bottomNav.forward.path = '';
    }
  }
</script>
