<template>
  <div class="result">
    <h1>{{ $parent.result.headline }}</h1>
    <p>{{ $parent.result.description }}</p>
    <br>
    <p>{{ $parent.result.spiritAnimal }}</p>

    <nav class="bottom-nav">
      <router-link class="back" to="/">Quiz wiederholen</router-link>
      <a class="forward" href="https://iyf.ch">Weiter zu inyourface</a>
    </nav>
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
      
    }
  }
</script>
