const getRandomeValue = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomeValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      console.log(4 % 3);
      console.log(2 % 3);
      console.log(3 % 3);
    },
    attackPlayer() {
      const attackValue = getRandomeValue(8, 15);
      this.playerHealth = this.playerHealth - attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomeValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
});

app.mount("#game");
