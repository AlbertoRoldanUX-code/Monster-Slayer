const getRandomeValue = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomeValue(12, 5);
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomeValue(15, 8);
      this.playerHealth = this.playerHealth - attackValue;
    },
  },
});

app.mount("#game");
