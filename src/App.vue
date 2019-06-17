<template>
<div id="app">
  <div id="nav">
    <a href="https://iyf.ch">
      <img class="logo" src="./assets/logo.png">
    </a>
  </div>
  <transition name="router-anim" enter-active-class="fade-in" leave-active-class="fade-out">
    <router-view />
  </transition>
  <nav class="bottom-nav" v-bind:style="{ boxShadow: bottomNav.boxShadow }">
    <router-link class="back" :to="bottomNav.back.path">{{ bottomNav.back.label }}</router-link>
    <div class="progress" v-if="this.$route.name == 'question'" v-bind:style="{ borderColor: bottomNav.progressBar.borderColor }">
      <div class="value" v-bind:style="{ width: bottomNav.progressBar.value + '%', background: bottomNav.progressBar.color }"></div>
    </div>
    <router-link class="forward" :to="bottomNav.forward.path">{{ bottomNav.forward.label }}</router-link>
  </nav>
</div>
</template>

<script type="text/javascript">
export default {

  props: [
    'questionID'
  ],

  data() {
    return {
      result: {
        headline: '',
        description: '',
        spiritAnimal: ''
      },
      bottomNav: {
        back: {
          label: {},
          path: {}
        },
        progressBar: {
          value: {},
          color: {},
          borderColor: {}
        },
        forward: {
          label: {},
          path: {}
        },
        boxShadow: []
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
  console.log(to, from);
  next()
  },
  methods: {
    scrollable() {
      if (document.body.offsetHeight > document.documentElement.clientHeight) {
        this.bottomNav.boxShadow = '0 -2px 10px rgba(0,0,0,0.15)'
      } else {
        this.bottomNav.boxShadow = ''
      }
    }
  },
  mounted() {
    this.scrollable();
  },
  updated() {
    this.scrollable();
  }
}

//var $form = hyperform(document.forms[0]);
</script>

<style lang="scss">
@import 'https://www.iyf.ch/resources/themes/iyf/dist/css/main.css?m=1542809131';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: auto;
    text-align: left;
    color: #111;
    overflow-x: hidden;
}

/*
  ===============
    Text Styles
  ===============
*/

h1 {
    font-size: 30px;
}

p {
    font-size: 16px;
}

a {
    font-size: 16px;
    text-decoration: none;
}

/*
  ========================
    General Styles
  ========================
*/

#app {
    position: relative;
    padding: 30px;
    margin: 0 auto;
    position: relative;
    width: 100%;
    max-width: 680px;
}

.page {
  min-height: auto;
  width: calc(100% - 60px);
  position: absolute;
}

.question {
  position: relative;
}

#nav {
    .logo {
        display: block;
        width: 130px;
        height: auto;
    }

    a {
        font-weight: bold;
        color: #2c3e50;
    }
}

.bottom-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 50%;
    bottom: 0;
    padding: 20px 30px;
    background: #fff;
    width: 100%;
    max-width: 680px;
    transform: translateX(-50%);

    .forward {
        text-align: right;
    }

    .progress {
        position: absolute;
        border: 1px solid #111;
        width: 100px;
        height: 5px;
        left: 50%;
        transform: translateX(-50%);

        .value {
            position: absolute;
            height: 100%;
        }
    }
}

.hidden {
    display: none;
}

/*
  ========================
    Form Styles
  ========================
*/

form {
  position: relative;
  width: 100%;

    label {
        display: block;
        font-size: 13px;
        margin: 20px 0 5px;
    }

    input {
        display: block;
        width: 100%;
        border: 0;
        border-bottom: 1px dashed #111;
        font-size: 16px;

        &:focus {
            border-bottom-style: solid;
        }
    }

    .full-name {
        display: flex;
    }

    .name {
        width: 50%;

        &:first-of-type {
            padding-right: 10px;
        }
        &:last-of-type {
            padding-left: 10px;
        }
    }

    span {
      display: inline-block;
      color: #f00;
      padding-top: 5px;
    }

    input[type="submit"] {
        width: auto;
        margin: 40px 0;
        background: #ddd;
        color: #444;
        padding: 10px 20px 8px;
        float: right;
        text-transform: none;
        font-weight: 400;
    }
}

/*
  ========================
    Question Styles
  ========================
*/

.answers {
    padding: 0;
    margin-bottom: 60px;

    li {
        list-style: none;

        &:first-of-type {
            display: none;
        }

        label {
            position: relative;
            display: flex;
            flex-shrink: 0;
            align-items: center;
            width: auto;
            padding: 15px;
            margin-bottom: 5px;
            border: 1px dashed #111;
            font-family: Times, sans-serif;
            font-size: 16px;
            cursor: pointer;

            &:hover,
            &:hover .checkmark {
              border-color: grey;
              color: grey;
            }

            input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
            }

            .checkmark {
                flex: 0 0 25px;
                display: block;
                left: 0;
                height: 25px;
                margin-right: 15px;
                width: 25px;
                border: 1px solid #111;
                border-radius: 50%;
                text-align: center;
                color: #fff;
            }
        }
    }

    .active {
        label {
            border-style: solid !important;

            .checkmark {
                background: #111;
            }
        }
    }
}

/*
  ========================
    Page Transitions
  ========================
*/

.fade-in {
  animation: fadeIn 1s forwards
}

.fade-out {
  animation: fadeOut 1s forwards
}

.slide-left-enter-active {
  animation: slideInLeft 1s forwards
}

.slide-left-leave-active {
  animation: slideOutLeft .7s forwards
}

.slide-right-enter-active {
  animation: slideInRight 1s forwards
}

.slide-right-leave-active {
  animation: slideOutRight 1s forwards
}

@keyframes fadeIn {
  from {
    opacity: 0;
    //transform: translateX(-50px);
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: none;
  }

  to {
    opacity: 0;
    //transform: translateX(50px);
    transform: scale(0.9);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes slideOutLeft {
  from {
    opacity: 1;
    transform: none;
  }

  to {
    opacity: 0;
    transform: translateX(-100%);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes slideOutRight {
  from {
    opacity: 1;
    transform: none;
  }

  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

/*
  ========================
    Media Queries
  ========================
*/

@media screen and (min-width: 1024px), screen and (min-height: 900px) {
  .bottom-nav {
    bottom: 10vh;
  }
}

@media screen and (min-width: 1024px) {
  .bottom-nav .progress {
    height: 7px;
    width: 260px;
  }
}

</style>
