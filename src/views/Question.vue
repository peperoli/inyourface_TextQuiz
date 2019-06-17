<template>
<transition-group :name="transitionName" mode="out-in">
  <div :key="questionID" v-bind:class="['question' + questionID, pageClass]">

    <h1>{{ questionID }}.</h1>
    <p>{{ currentQuestion().question }}</p>

    <ul class="answers">

      <li v-for="(answer, index) in currentQuestion().answers" :class="{ 'active': currentQuestion().value === answer.value }">
        <label><input type="radio" name="answer" v-model="currentQuestion().value" :value="answer.value" @click="goNext()"><span class="checkmark"><img src="../assets/dripicons/checkmark_w.svg" height="10px"></span>{{ answer.label }}</label>
      </li>

    </ul>


    <!-- execute the evaluation method on every site -->
    <div class="hidden">{{ evaluation() }}</div>

  </div>
</transition-group>
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
          answers: [
            {
              label: null,
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
          answers: [
            {
              label: null,
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
          answers: [
            {
              label: null,
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
          answers: [
            {
              label: null,
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
        {
          question: 'Dein Claim für ein Nähatelier?',
          answers: [
            {
              label: null,
              value: 0
            },
            {
              label: 'Denn nackt ist es zu kalt.',
              value: 2
            },
            {
              label: 'Mit sauberer Nadel und gutem Stoff ins Glück.',
              value: 3
            },
            {
              label: 'Schönes geschneidert für dich und mich.',
              value: 1
            },
          ],
          value: 0,
        },
        {
          question: 'Du magst … ',
          answers: [
            {
              label: null,
              value: 0
            },
            {
              label: '… die Witze-Seite im «Blick». Jedenfalls diejenigen, die du verstehst.',
              value: 1
            },
            {
              label: '… gute Wortspiele! Die Bombe tippt … haha!',
              value: 2
            },
            {
              label: '… alles, was politisch völlig inkorrekt und zwischen Gürtellinie und den Knien angesiedelt ist.',
              value: 3
            },
          ],
          value: 0,
        },
        {
          question: 'Welcher Text liest sich am süffigsten?',
          answers: [
            {
              label: null,
              value: 0
            },
            {
              label: '((Text für Plattenleger))<br>Geraten Sie auch mal aus den Fugen!<br>Fugenlose Beläge, Gussterrazzo-Böden und Zementplatten – hier fühlen wir uns zu Hause. Mit handwerklichem Geschick spachteln, verlegen und gestalten wir.',
              value: 2
            },
            {
              label: '((Testbericht über Rucksäcke)) Der Rucksack gehört zur Grundausstattung des Wanderers. Wohin sonst mit Verpflegung, Ersatzkleidung, Fotokamera und Wetterschutz (und Selfiestick und Handy und Nastüechli)?',
              value: 1
            },
            {
              label: '((Flyer für Kameraverleih)) Mein Leben läuft auf Knopfdruck, deshalb suche ich einen Perspektivenwechsel. Ich – mit Ecken und Kanten, rabenschwarzer, glatter Haut – suche einen Gefährten. Ich will wieder klarsehen – mach mich scharf, Baby!',
              value: 3
            },
          ],
          value: 0,
        },
        {
          question: 'Der Text auf deiner Website soll …',
          answers: [
            {
              label: null,
              value: 0
            },
            {
              label: '… alle ansprechen, allen gefallen, ja nicht anecken.',
              value: 1
            },
            {
              label: '… provozieren. Hauptsache originell und mit Schmackes.',
              value: 3
            },
            {
              label: '… amüsieren. Jedoch immer im Rahmen des guten Geschmacks. ',
              value: 2
            },
          ],
          value: 0,
        },
        {
          question: 'Jetzt mal in Bärndütsch. Welcher Spruch für ein Aare-Plakat ist es?',
          answers: [
            {
              label: null,
              value: 0
            },
            {
              label: 'E füechte Troum für dini Wonig: ds Aare-Plakat',
              value: 3
            },
            {
              label: 'D Aare isch erfunde worde, damit o mir Bärner mau chli vorwärtschömä.',
              value: 2
            },
            {
              label: 'Ds Aare-Plakat setzt dr richtig Akzänt i dire Wonig.',
              value: 1
            },
          ],
          value: 0,
        },
        {
          question: 'Was trifft deinen Geschmack?',
          answers: [
            {
              label: null,
              value: 0
            },
            {
              label: 'Kunde: Unsere Zielgruppe ist breit. iyf: Kein Problem, wir texten auch für Dicke.',
              value: 3
            },
            {
              label: 'Wer nicht tanzt, ist indiskotabel!',
              value: 2
            },
            {
              label: 'Rosen sind rot, Veilchen sind blau. Ich hab dich gern, das weiss ich.',
              value: 1
            },
          ],
          value: 0,
        },
        {
          question: 'Markus Simmel will in die Politik. Der Wahlspruch, der dir gefällt?',
          answers: [
            {
              label: null,
              value: 0
            },
            {
              label: 'Betreuung. Bildung. Bern.',
              value: 1
            },
            {
              label: 'Markus Simmel: Der mit dem grossen ... Herzen.',
              value: 3
            },
            {
              label: 'Die Zukunft ist jung.',
              value: 2
            },
          ],
          value: 0,
        },
        {
          question: 'Ein Optikergeschäft punktet bei dir mit folgendem Claim:',
          answers: [
            {
              label: null,
              value: 0
            },
            {
              label: 'Wir sehen weiter.',
              value: 2
            },
            {
              label: 'Mitten in die Fresse.',
              value: 3
            },
            {
              label: 'Beratung mit Zeit, Brillen mit Stil.',
              value: 1
            },
          ],
          value: 0,
        },
        {
          question: 'Du liest … ',
          answers: [
            {
              label: null,
              value: 0
            },
            {
              label: '… den «Enthüller» (deckt auf, was keiner wissen will).',
              value: 3
            },
            {
              label: '… den täglichen O-Ton im «Bund».',
              value: 2
            },
            {
              label: '… die Cartoons im «20 Minuten».',
              value: 1
            },
          ],
          value: 0,
        },/*
        {
          question: '',
          answers: [
            {
              label: null,
              value: 0
            },
            {
              label: '',
              value:
            },
            {
              label: '',
              value:
            },
            {
              label: '',
              value:
            },
          ],
          value: 0,
        },
        {
          question: '',
          answers: [
            {
              label: null,
              value: 0
            },
            {
              label: '',
              value:
            },
            {
              label: '',
              value:
            },
            {
              label: '',
              value:
            },
          ],
          value: 0,
        },*/
      ],
      activeIndex: null,
      pageClass: 'page',
      transitionName: null
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
      if (this.questionID != 13) {
        this.activeIndex = 0;
        setTimeout(() => this.$router.push({
          name: 'question',
          params: {
            questionID: this.nextID()
          }
        }), 200);

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
    endResult() {
      return this.questions.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0);
    },
    progressVal() {
      this.$parent.bottomNav.progressBar.value = (this.questionID / 13 * 100)
    },
    progressColor() {
      if (this.questionID == 13 && this.currentQuestion().value != 0) {
        this.$parent.bottomNav.progressBar.color = '#12bf43';
        this.$parent.bottomNav.progressBar.borderColor = '#12bf43';
      } else {
        this.$parent.bottomNav.progressBar.color = '#111';
        this.$parent.bottomNav.progressBar.borderColor = '#111';
      }
    },
    evaluation() {
      if (this.endResult() >= 13 && this.endResult() <= 21) {
        this.$parent.result.headline = 'Miau!';
        this.$parent.result.description =
          'Du magst, was andere mögen, weshalb dich wiederum alle mögen. Wo du auftauchst, scheint die Sonne, lachen die Menschen, wiehern die Pferde. Du verstehst jeden, jede versteht dich. Dein Kommunikationsstil ist universell, für alle nachvollziehbar und auf jedes Kundensegment ausgerichtet – nur manchmal etwas einschläfernd. Etwas mehr Pfupf im Füdli würde nicht schaden.';
        this.$parent.result.spiritAnimal = 'Dein Spirit Animal ist die Katze von nebenan: voll süss, knuffig, Instagram-tauglich.'
      } else if (this.endResult() >= 22 && this.endResult() <= 30) {
        this.$parent.result.headline = 'Happy hippo';
        this.$parent.result.description =
          'Du bist der gut dosierte Drink, die ideale Liebesbeziehung, der Spülglanz im Tab. Die richtige Mischung machts! Ein bisschen schmutzig darfs sein, jedenfalls solange die Schwiegermutter die Flecken noch rauskriegt. Dein Kommunikationsstil ist frisch, gespickt mit gekonnten Wortspielen und originell. Du darfst dich aber auch mal weiter aus dem Fenster lehnen, gleich fallen wirst du deswegen nicht.';
        this.$parent.result.spiritAnimal = 'Dein Spirit Animal ist das Nilpferd. Grosse Klappe, viel dahinter.'
      } else if (this.endResult() >= 31 && this.endResult() <= 39) {
        this.$parent.result.headline = 'Rabenschwarz';
        this.$parent.result.description =
          'In your face! Du kennst keine Grenzen – und wenn, werden sie ausgedehnt, gelöchert und gesprengt. Entweder du begeisterst oder erschreckst die Leute um dich herum, ein Dazwischen gibt es nicht. Dein Kommunikationsstil ist provozierend, eckt an, hinterlässt tränennasse Gesichter – ob diese vom Lachen oder Weinen kommen, weiss man nie so genau. Drück hier und da mal auf die Bremse und lass die Ananas auf der Pizza weg; so hinterlässt du weniger Leichen.';
        this.$parent.result.spiritAnimal = 'Und ja, dein Spirit Animal ist die Krähe, sorry.'
      } else {
        this.$parent.result.headline = 'Ungültige Eingabe';
        this.$parent.result.description = 'Versuche es bitte noch einmal'
      }
      return this.$parent.result.headline;
      return this.$parent.result.description;
      return this.$parent.result.spiritAnimal;
    },
    navLinks() {
      this.$parent.bottomNav.back.label = 'Zurück';

      if (this.questionID == 1) {
        this.$parent.bottomNav.back.path = '/intro'
      } else {
        this.$parent.bottomNav.back.path = this.prevID().toString();
      };
      if (this.questionID == 13 && this.currentQuestion().value != 0) {
        this.$parent.bottomNav.forward.label = 'Ergebnis';
        this.$parent.bottomNav.forward.path = '/auswertung...';
      } else if (this.currentQuestion().value != 0) {
        this.$parent.bottomNav.forward.label = 'Weiter';
        this.$parent.bottomNav.forward.path = this.nextID().toString();
      } else {
        this.$parent.bottomNav.forward.label = '';
        this.$parent.bottomNav.forward.path = '';
      }
    },
  },
  watch: {
    '$route'(to, from) {
      const toId = Number(to.path.slice(7))
      const fromId = Number(from.path.slice(7))
      this.transitionName = toId < fromId ? 'slide-right' : 'slide-left';
    }
  },
  mounted() {
    this.navLinks();
    this.evaluation();
    this.progressVal();
    this.progressColor();
  },
  updated() {
    this.navLinks();
    this.progressVal();
    this.progressColor();
  }
}
</script>
