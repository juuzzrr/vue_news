<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          <a href="#inspire">{{ link }}</a>
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2" >
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item style="border-bottom:1px solid rgb(210,220,220);">
                      <router-link to="/">Main page</router-link>
                </v-list-item>
                <v-list-item style="border-bottom:1px solid rgb(210,220,220);">
                      <router-link to="/russia"> Russia</router-link>
                </v-list-item>
                <v-list-item style="border-bottom:1px solid rgb(210,220,220);">
                    <router-link to="/usa"> USA </router-link>
                </v-list-item>
                <v-list-item style="border-bottom:1px solid rgb(210,220,220);">
                    <router-link to="/fr"> France </router-link>
                </v-list-item>
                <v-list-item>
                    <router-link to="/uk"> Ukraine </router-link>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<style>
a {
  text-decoration: none;
  width:100%;
  height:40px;
  display:flex;
  align-items:center;
}
html {
  scroll-behavior: smooth;
}
v-list-item{
  border-bottom:1px solid black;
}
</style>
<script>
  export default {
    data: () => ({
      links: [
        'News',
      ],
    }),
  }
</script>