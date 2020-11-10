<template>
  <div id="app">
    <select class="form-control" @change="changeSeasons($event)">
      <option value="" selected disabled>Choose</option>
      <option v-for="season in seasons">{{ season }}</option>
    </select>
    <br /><br />
    <p>
      <span>Selected Season: {{ selectedSeason }}</span>
    </p>
  </div>
</template>

<script>
new Vue({
  el: "#app",
  data: {
    seasons: [
      { name: "Current" },
      { name: "2019-2020-regular" },
      { name: "2019-2020-Playoffs" },
      { name: "2018-2019-regular" },
    ],
    selectedSeason: "latest",
  },
  methods: {
    changeSeasons(event) {
      this.selectedSeason =
        event.target.options[event.target.options.selectedIndex].text;
    },
  },
});
</script>
