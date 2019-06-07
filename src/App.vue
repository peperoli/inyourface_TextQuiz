<template>
<div id="app">
  <div id="nav">
    <a href="https://iyf.ch">
      <img class="logo" src="./assets/logo.png">
    </a>
  </div>
  <router-view />
  <nav class="bottom-nav">
    <router-link class="back" :to="bottomNav.back.path">{{ bottomNav.back.label }}</router-link>
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
          label: '',
          path: ''
        },
        forward: {
          label: '',
          path: ''
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import 'https://www.iyf.ch/resources/themes/iyf/dist/css/main.css?m=1542809131';

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
  ==================
    General Styles
  ==================
  */

body {

    width: auto;
    text-align: left;
    color: #111;
}

#app {
    position: relative;
    padding: 30px;
    position: relative;
    min-height: 100vh;
}

.bottom-nav {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    padding: 20px 0;
    border-top: 1px solid #111;
    background: #fff;
    width: calc(100% - 60px);

    .forward {
        text-align: right;
    }
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

.hidden {
    display: none;
}

.answers {
    padding: 0;

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
}

.active {
    label {
        border-style: solid !important;

        .checkmark {
            background: #111;
        }
    }
}

form {

  label {
    display: inline-block;
    font-size: 13px;
    margin: 20px 0 5px;
  }

  input {
      display: block;
      width: 100%;
      border: 0;
      border-bottom: 1px dashed #111;
      font-size: 16px;
  }

  .name {
      width: 50%;
      float: left;
      &:first-of-type {
          padding-right: 10px;
      }
      &:last-of-type {
          padding-left: 10px;
      }
  }

  input[type="submit"] {
      margin: 40px 0;
  }
}

progress[value] {
    -webkit-appearance: none;
    appearance: none;
}

progress[value]::-webkit-progress-value {
    background: #000;
}

.progress {
    position: relative;
    border: 1px solid #111;
    width: 400px;
    height: 5px;
}

.progress .value {
    position: absolute;
    background: #111;
    width: 50%;
    height: 100%;
}
</style>
