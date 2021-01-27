<template>
  <div>
    <v-container>
      <v-card>
        <v-container>
          <v-subheader>My profile</v-subheader>
        <v-form>
          <v-text-field
            label="nickname"
            required
          />
          <v-btn  color="blue" type="submit">수정</v-btn>
        </v-form> 
        </v-container>
      </v-card>
      <v-card style="margin-bottom:20px">
        <v-container>
          <v-subheader>팔로잉</v-subheader>
          <follow-list/>
        </v-container>
      </v-card>
      <v-card style="margin-bottom:20px">
        <v-container>
          <v-subheader>팔로워</v-subheader>
          <follow-list/>
        </v-container>
      </v-card>
    </v-container>
  </div>  
</template>

<script>

import FollowList from '../components/FollowList'

export default {
  components:{
    FollowList,
  },
  data(){
    return{
      name:'Nuxt.js'
    }
  },
  head(){
    return {
      title:"프로필"
    }
  }
}
</script>

<style>

</style>