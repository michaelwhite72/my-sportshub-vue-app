// tmeplate
// --->test code below
  <div class="temp">
    <!--break  -->
    <div v-for="team in teams">
      <div v-if="team.league == 'NFL'">
        <h4>NFL</h4>
        <div v-if="team.league == 'NFL'">
        <router-link tag="p" :to="`/teams/${team.id}`"
          >{{ team.name }}
        </router-link>
      </div>
      <br>
    <div v-if="team.league == 'NBA'"> 
       <h4>NBA</h4>
        <router-link tag="p" :to="`/teams/${team.id}`"
          >{{ team.name }}
        </router-link>
    </div>
    <br />
    <!--break  -->
  </div>
</template>

//  ---> teams index loop below (need ot make dry, saved here for reference)
  <div class="teams">
    <h1>All Teams</h1>
    <!-- <h4>click on a team for more information</h4> -->

    <!-- <p>{{ teams }}</p> -->
    <h4>NFL</h4>
    <div v-for="team in teams">
      <div v-if="team.league == 'NFL'">
        <router-link tag="p" :to="`/teams/${team.id}`"
          >{{ team.name }}
        </router-link>
        <!-- SHows the team name as a Hyperlink - Check view when them included        
        <a :href="`/teams/${team.id}`">{{ team.name }}</a> 
        -->
      </div>
    </div>
    <br />
    <h4>NBA</h4>
    <div v-for="team in teams">
      <div v-if="team.league == 'NBA'">
        <router-link tag="p" :to="`/teams/${team.id}`"
          >{{ team.name }}
        </router-link>
      </div>
    </div>
  </div>
