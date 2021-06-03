<template>
  <div>
    <h4 class="ma-6 text-h5 font-weight-bold">Mountains Directory</h4>
    <v-img
      eager
      position="center"
      center
      max-height="200"
      :lazy-src="require('../assets/img/banner/mountain-banner.jpeg')"
      :src="require('../assets/img/banner/mountain-banner.jpeg')"
      aspect-ratio="1"
      class="d-block grey lighten-2 text-center"
      ></v-img>
            
  
    <!-- <ul v-for="mountain in mountains" :key="mountain.id">
      <NuxtLink :to="`${mountain.continent.toLowerCase()}/${mountain.slug}`">
        <li>{{ mountain.title }}</li>
      </NuxtLink>
    </ul> -->

    <v-row class="ma-6">
      <v-col
        v-for="mountain in mountains" 
        :key="mountain.id"
        class="d-flex child-flex"
        cols="3"
      >
        <v-card elevation="4" class="px-10 py-8 text-center" :to="`${mountain.continent.toLowerCase()}/${mountain.slug}`">
          <h3 class="d-block text-h6 font-weight-bold mb-2 primary--text">{{mountain.title}}</h3>
          <v-img
            rounded
            eager
            position="center"
            max-width="200px"
            center
            :src="mountain.image"
            :lazy-src="mountain.image"
            aspect-ratio="1"
            class="d-block grey lighten-2 text-center"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData() {
    const mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then((res) => res.json())

    return { mountains }
  }
}
</script>
