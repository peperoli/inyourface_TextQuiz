<template>
<div class="question">
  <h1>{{ questionID }}.</h1>
  <p>{{ currentQuestion().question }}</p>
  <ul class="answers">
    <li v-for="(answer, index) in currentQuestion().answers" :class="{ 'active': activeIndex == index }" :key="answer.id" @click="setActive(index)">
      <label><input type="radio" name="answer" v-model="currentQuestion().value" :value="answer.value" @click="goNext()"><span class="checkmark">&check;</span>{{ answer.label }}</label>
    </li>
  </ul>
<!--
  <nav class="bottom-nav">

    <div class="progress">
      <div class="value" v-bind:style="{ width: progressVal() + '%', background: progressColor() }"></div>
    </div>

    <router-link class="forward" :to="{name: 'question', params: {questionID: nextID()}}" v-if="currentQuestion().value > 0 && questionID < 3">Weiter</router-link>

    <router-link class="forward" to="/auswertung..." v-if="currentQuestion().value > 0 && questionID == 4">Auswertung</router-link>
  </nav> -->
</div>
</template>

<script type="text/javascript">
import QuestionData from './QuestionData.vue'

export default {

  props: [
    'questionID'
  ],

  data() {
    return {
      questions: [{
          question: 'Du eröffnest eine Metzg und brauchst einen knackigen Claim. Welcher gefällt dir spontan am besten?',
          answers: [{
              label: '',
              value: 0
            },
            {
              label: 'Die Metzg, der die Rinder vertrauen.',
              value: 2
            },
            {
              label: 'Für alle, die nicht ins Gras beissen wollen.',
              value: 3
            },
            {
              label: 'Deine Quartiermetzg mit Bioqualität.',
              value: 1
            }
          ],
          value: 0
        },
        {
          question: 'Den Namen inyourface findest du …',
          answers: [{
              label: '',
              value: 0
            },
            {
              label: '… geil, geil, geil!',
              value: 3
            },
            {
              label: '… na ja … zu aggressiv.',
              value: 1
            },
            {
              label: 'Ist Englisch, oder? Mir hätte ein hübsches Wortspiel besser gefallen.',
              value: 2
            }
          ],
          value: 0
        },
        {
          question: 'Und wie findest du unsere Referenztexte auf der Website?',
          answers: [{
              label: '',
              value: 0
            },
            {
              label: 'Puh … eher schwierig. Ich bin jetzt eher über eine Empfehlung, die ich nicht ignorieren darf, auf euch gestossen.',
              value: 1
            },
            {
              label: 'Nochmals: geil, geil, geil! Ausser die paar lahmen, braven Webtexte (wieso?!).',
              value: 3
            },
            {
              label: 'Manchmal grenzwertig, aber alles in allem sehr süffig.',
              value: 2
            }
          ],
          value: 0
        },
        {
          question: 'Welcher Text spricht dich an?',
          answers: [{
              label: '',
              value: 0
            },
            {
              label: 'Ganz langsam dehnt sich die Musik aus, mit geschmeidigen Schritten nähert sie sich der Grenze der Spannung. Und dann ein lautes Platzen. Stille.',
              value: 2
            },
            {
              label: 'Kinder entdecken die Welt neu, während die Eltern sich zurücklehnen und erholen: Gross und Klein tauchen in die verschiedenen Themenwelten ein, lernen majestätische Bergwelten kennen oder nehmen die Suche nach den winzigen Zwergen auf. ',
              value: 1
            },
            {
              label: '((Spruch für Lampe)) Sie ist nicht die Hellste. Aber gut neben dem Bett.',
              value: 3
            },
          ],
          value: 0,
        },
      ],
      activeIndex: ''
    }
  },

  computed: {
    /*randomList() {
      return this.currentQuestion().answers.sort(function(){return 0.5 - Math.random()});
    }*/
  },

  /*
      watch: {
        questions: {
            handler(newVal) {
              this.goNext();
            },
            deep: true
        }
      },*/

  methods: {
    goNext() {
      if (this.questionID != 4) {
        setTimeout(() => this.$router.push({
          name: 'question',
          params: {
            questionID: this.nextID()
          }
        }), 200)
      }
    },
    prevID() {
      return Number.parseInt(this.questionID) - 1
    },
    nextID() {
      return Number.parseInt(this.questionID) + 1
    },
    currentQuestion() {
      return this.questions[this.questionID - 1];
    },
    setActive(index) {
        this.activeIndex = index
    },
    endResult() {
      return this.questions.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
    },
    progressVal() {
      return (this.questionID / 4 * 100)
    },
    progressColor() {
      if (this.questionID == 4 && this.currentQuestion().value != 0) {
        return '#12bf43'
      } else {
        return '#000'
      }
    },
    evaluation() {
      if (this.endResult() >= 4 && this.endResult() <= 6) {
        this.$parent.result.headline = 'Miau!';
        this.$parent.result.description =
          'Du magst, was andere mögen, weshalb dich wiederum alle mögen. Wo du auftauchst, scheint die Sonne, lachen die Menschen, wiehern die Pferde. Du verstehst jeden, jede versteht dich. Dein Kommunikationsstil ist universell, für alle nachvollziehbar und auf jedes Kundensegment ausgerichtet – nur manchmal etwas einschläfernd. Etwas mehr Pfupf im Füdli würde nicht schaden.';
        this.$parent.result.spiritAnimal = 'Dein Spirit Animal ist die Katze von nebenan: voll süss, knuffig, Instagram-tauglich.'
      } else if (this.endResult() >= 7 && this.endResult() <= 9) {
        this.$parent.result.headline = 'Happy hippo';
        this.$parent.result.description =
          'Du bist der gut dosierte Drink, die ideale Liebesbeziehung, der Spülglanz im Tab. Die richtige Mischung machts! Ein bisschen schmutzig darfs sein, jedenfalls solange die Schwiegermutter die Flecken noch rauskriegt. Dein Kommunikationsstil ist frisch, gespickt mit gekonnten Wortspielen und originell. Du darfst dich aber auch mal weiter aus dem Fenster lehnen, gleich fallen wirst du deswegen nicht.';
        this.$parent.result.spiritAnimal = 'Dein Spirit Animal ist das Nilpferd. Grosse Klappe, viel dahinter.'
      } else if (this.endResult() >= 10 && this.endResult() <= 12) {
        this.$parent.result.headline = 'Rabenschwarz';
        this.$parent.result.description =
          'In your face! Du kennst keine Grenzen – und wenn, werden sie ausgedehnt, gelöchert und gesprengt. Entweder du begeisterst oder erschreckst die Leute um dich herum, ein Dazwischen gibt es nicht. Dein Kommunikationsstil ist provozierend, eckt an, hinterlässt tränennasse Gesichter – ob diese vom Lachen oder Weinen kommen, weiss man nie so genau. Drück hier und da mal auf die Bremse und lass die Ananas auf der Pizza weg; so hinterlässt du weniger Leichen.';
        this.$parent.result.spiritAnimal = 'Und ja, dein Spirit Animal ist die Krähe, sorry.'
      } else {
        return 'Ungültige Eingabe'
      }
      return this.$parent.result.headline;
      return this.$parent.result.description;
      return this.$parent.result.spiritAnimal;
    },
    navLinks() {
      this.$parent.bottomNav.back.label = 'Zurück';

      if ( this.questionID == 1 ) {
        this.$parent.bottomNav.back.path = '/intro';
      } else {
        this.$parent.bottomNav.back.path = this.prevID().toString();
      };
      if ( this.questionID == 4 && this.currentQuestion().value != 0) {
        this.$parent.bottomNav.forward.label = 'Auswertung';
        this.$parent.bottomNav.forward.path = '/auswertung...';
      } else if ( this.currentQuestion().value != 0 ) {
        this.$parent.bottomNav.forward.label = 'Weiter';
        this.$parent.bottomNav.forward.path = this.nextID().toString();
      }
    },
  },
  mounted() {
    this.navLinks();
    this.evaluation();
  },
  updated() {
    this.navLinks();
  }
}
</script>
