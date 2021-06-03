<template>
  <v-main class="pt-0">
    <h1 class="text-center mt-8">Sale.today</h1>
    <v-row no-gutters class="px-8 py-4">
      <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        chips
        clearable
        hide-details
        hide-selected
        item-text="name"
        item-value="symbol"
        label="Search for a coin..."
        solo
      >
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-title>
              Search for your favorite
              <strong>Cryptocurrency</strong>
            </v-list-item-title>
          </v-list-item>
        </template>
        <template v-slot:selection="{ attr, on, item, selected }">
          <v-chip
            v-bind="attr"
            :input-value="selected"
            color="blue-grey"
            class="white--text"
            v-on="on"
          >
            <v-icon left>
              mdi-bitcoin
            </v-icon>
            <span v-text="item.name"></span>
          </v-chip>
        </template>
        <template v-slot:item="{ item }">
          <v-list-item-avatar
            color="indigo"
            class="text-h5 font-weight-light white--text"
          >
            {{ item.name.charAt(0) }}
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
            <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-bitcoin</v-icon>
          </v-list-item-action>
        </template>
      </v-autocomplete>
    </v-row>
    <v-row class="pa-8">
      
      <template v-for="(item, index)  in bitss">
        <v-col cols="12" sm="3" md="3"  :key="n">
          <v-card elevation="1" class="mt-4 pa-4 box-shadow">
            
            <v-img
              :src="`https://picsum.photos/500/300?image=${index * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${index * 5 + 10}`"
              aspect-ratio="1"
              class="grey lighten-2"
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

            <h6 v-text="item.title" class="mt-4 text-center text-h6 font-weight-bold"/>
            <p v-text="item.desc" class="mt-2 text-center"/>
          </v-card>
          
        </v-col>
      </template>
    </v-row>
  </v-main>
</template>
<style>
.box-shadow {
  -ms-box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.03);
  -o-box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.03);
  -webkit-box-shadow: 0 2px 9px 0 rgb(0 0 0 / 3%);
  box-shadow: 0 2px 9px 0 rgb(0 0 0 / 3%);
}

</style>
<script>
import _ from 'lodash';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      dialog: false,
      company_name: null,
      company_url: null,
      api: [],
      isLoading: false,
      items: [],
      model: null,
      search: null,
      tab: null,
      bitss: [
        {title: "sogo.sale.today", desc: "SOGO sale today starting June 6-20 @ Taguig"},
        {title: "mega.sale.today", desc: "Mega sale today starting June 6-20 @ Taguig"},
        {title: "crypto.sale.today", desc: "CRYPTO sale today starting June 6-20 @ Taguig"},
        {title: "bitcoin.sale.today", desc: "Bitcoin sale today starting June 6-20 @ Taguig"},
        {title: "etherium.sale.today", desc: "Etherium sale today starting June 6-20 @ Taguig"},
        {title: "jag.sale.today", desc: "JAG sale today starting June 6-20 @ Taguig"},
        {title: "lacoste.sale.today", desc: "Lacoste sale today starting June 6-20 @ Taguig"},
        {title: "condo.sale.today", desc: "Condo SM sale today starting June 6-20 @ Taguig"},
        {title: "ever.sale.today", desc: "EVER Gotesco sale today starting June 6-20 @ Taguig"},
        {title: "sogo.sale.today", desc: "SOGO sale today starting June 6-20 @ Taguig"},
        {title: "mega.sale.today", desc: "Mega sale today starting June 6-20 @ Taguig"},
        {title: "crypto.sale.today", desc: "CRYPTO sale today starting June 6-20 @ Taguig"},
        {title: "bitcoin.sale.today", desc: "Bitcoin sale today starting June 6-20 @ Taguig"},
        {title: "etherium.sale.today", desc: "Etherium sale today starting June 6-20 @ Taguig"},
        {title: "jag.sale.today", desc: "JAG sale today starting June 6-20 @ Taguig"},
        {title: "lacoste.sale.today", desc: "Lacoste sale today starting June 6-20 @ Taguig"},
        {title: "condo.sale.today", desc: "Condo SM sale today starting June 6-20 @ Taguig"},
        {title: "ever.sale.today", desc: "EVER Gotesco sale today starting June 6-20 @ Taguig"},
      ],
    }
  },
  methods: {
    submit(){
        //if you want to send any data into server before redirection then you can do it here
      // this.$router.push("/result?"+{company_name: this.company_name});
      this.$router.push({ path: 'result', query: { company_name: this.company_name, company_url: this.company_url } })
    },
    initialize() {
      this.api = [{
        "type": "AdaptiveCard",
        "version": "1.3",
        "body": [{
          "type": "ColumnSet",
          "columns": [
              {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                      {
                          "type": "Image",
                          "url": "https://img.freepik.com/free-vector/sale-promotion-banner-template_74379-177.jpg"
                      },
                      {
                          "type": "TextBlock",
                          "text": "special.promo.today",
                          "wrap": true
                      }
                  ]
              },
              {
                  "type": "Column",
                  "width": "stretch",
                  "items": [
                      {
                          "type": "Image",
                          "url": "https://img.freepik.com/free-vector/sale-promotion-banner-template_74379-177.jpg"
                      },
                      {
                          "type": "TextBlock",
                          "text": "special.promo.today",
                          "wrap": true
                      }
                  ]
              }
          ]
        }],
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
        }]
    },
  },
  computed: {
    filtered_img () {
      const newApi = this.api;
      
      const imageList = _.chain(newApi).map("subCategories").flatten().value();
    },
    filtered_type() {
      // return _.chain(this.api).map("subCategories").flatten().value(type);
      let map_subCategories = _.chain(this.api).map("subCategories").flatten().value();
      return _.chain(map_subCategories).map("type").uniq().flatten().value();
      // return _.mapValues(this.api, 'category');
    },
  },
  watch: {
    model (val) {
      if (val != null) this.tab = 0
      else this.tab = null
    },
    search (val) {
      // Items have already been loaded
      if (this.items.length > 0) return

      this.isLoading = true

      // Lazily load input items
      fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(res => res.clone().json())
        .then(res => {
          this.items = res
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => (this.isLoading = false))
    },
  },
}
</script>
