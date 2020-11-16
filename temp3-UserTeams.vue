<template>
  <!-- Team Select, version 1 begin -->
  <h4>NFL</h4>
  <div v-for="team in teams">
    <div v-if="team.league == 'NFL'">
      <input
        type="checkbox"
        :id="team.id"
        :value="team.id"
        v-model="checkedTeams"
      />
      <label :for="team.id">{{ team.name }}</label>
    </div>
  </div>
  <br />
  <h4>NBA</h4>
  <div v-for="team in teams">
    <div v-if="team.league == 'NBA'">
      <input
        type="checkbox"
        :id="team.id"
        :value="team.id"
        v-model="checkedTeams"
      />
      <label :for="team.id">{{ team.name }}</label>
    </div>
  </div>
  <br />
  <h4>MLB</h4>
  <div v-for="team in teams">
    <div v-if="team.league == 'MLB'">
      <input
        type="checkbox"
        :id="team.id"
        :value="team.id"
        v-model="checkedTeams"
      />
      <label :for="team.id">{{ team.name }}</label>
    </div>
  </div>
  <br />
  <h4>NHL</h4>
  <div v-for="team in teams">
    <div v-if="team.league == 'NHL'">
      <input
        type="checkbox"
        :id="team.id"
        :value="team.id"
        v-model="checkedTeams"
      />
      <label :for="team.id">{{ team.name }}</label>
    </div>
  </div>
  <!-- Team Select, version 1 end -->
</template>
