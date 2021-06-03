<template>
  <v-main class="pt-0">
    <v-container fluid class="sticky-pos">
      <h1 class="text-center mt-8 mb-4">Sale.today</h1>
      
      <v-row no-gutters class="px-8 py-4">
        <v-toolbar
          flat
          fixed
          color="transparent"
        >
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search News"
            single-line
            outlined
          ></v-text-field>
        </v-toolbar>
        <v-card-text class="py-0">
          <v-chip
            v-for="(keyword, i) in keywords"
            :key="i"
            class="mr-2"
          >
            {{ keyword }}
          </v-chip>
        </v-card-text>
        
      </v-row>
    </v-container>  
    <v-row class="pa-8">
      
      <template v-for="(item, index)  in searching">
        <v-col cols="12" sm="3" md="3" :key="index" >
          <v-card elevation="1" class="mt-4 pa-4 box-shadow">
            
            <v-img
              :src="item.image"
              :lazy-src="item.image"
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
            <v-card-text>
              <span
                class="text-uppercase font-weight-regular text-caption"
                v-text="item.category"
              ></span>
              <h6 v-text="item.title" class="mt-4 text-h6 font-weight-bold"/>
              <p v-text="item.description" class="mt-2"/>
            </v-card-text>
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
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      subBitss: [
        {
          image: 'data:image/jpeg;base64,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',
          title: 'sogo.sale.today',
          category: 'Mall',
          keyword: 'Mall',
          description: '10% - 40% Sale on all SOGO Mall!',

        },
        {
          image: 'https://img.adidas.com.hk/resources/2020/KV/Apr/Aprilsale/newkv/plp.jpg?version=000000',
          title: 'adidas.sale.today',
          category: 'Sports',
          keyword: 'Shoes',
          description: '10% - 40% Sale on all Adidas branches!',
        },
        {
          image: 'https://photos5.appleinsider.com/gallery/40131-77208-apple-sale-bh-february-2021-xl.jpg',
          title: 'apple.sale.today',
          category: 'Technology',
          keyword: 'Phones',
          description: '10% - 40% Sale on all Apple Branches!',
        },
        {
          image: 'https://www.knightfrank.co.th/resources/residential-primesale/bangkok-condo-sale-rent-eng.jpg',
          title: 'condo.sale.today',
          category: 'Condominium',
          keyword: 'Condo',
          description: '10% - 40% Sale on all Condo @ Taguig!',
        },
        {
          image: 'https://www.smsupermalls.com/data/uploads/2018/02/SM_3DS_FA_-_BATCH_2.jpg',
          title: 'sm.sale.today',
          category: 'Mall',
          keyword: 'Mall',
          description: '10% - 40% Sale on all SM Mall!',
        },
      ],
      search: '',
    }
  },
  computed: {
    keywords () {
      if (!this.search) return []

      const keywords = []

      for (const search of this.searching) {
        keywords.push(search.keyword)
      }

      return keywords
    },
    searching () {
      if (!this.search) return this.subBitss

      const search = this.search.toLowerCase()

      return this.subBitss.filter(item => {
        const text = item.title.toLowerCase()

        return text.indexOf(search) > -1
      })
    },
  },
}
</script>
<style>

.sticky-pos {
  position: sticky;
  z-index: 2;
  top: 0;
  background-color: #fff;
  padding: 4vh 4vh 0;
}
</style>
