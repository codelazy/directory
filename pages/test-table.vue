<template>
<div id="app">
  <v-app id="inspire">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="customApi"
      :single-select="singleSelect"
      item-key="category"
      show-select
      class="elevation-1"
    >
      <template v-slot:top>
        <v-switch
          v-model="singleSelect"
          label="Single select"
          class="pa-3"
        ></v-switch>
      </template>
      <template v-slot:item.data-table-select="{ isSelected, select }">
          <v-btn color="green" :value="isSelected = !isSelected" @click="onButtonClick($event)">{{$event}}</v-btn>
      </template> 
    </v-data-table>
  </v-app>
</div>
</template>

<script>
export default {
layout: 'dashboard',
  data() {
    return {
      singleSelect: false,
      selected: [],
      company_name: '',
      search: '',
      currentTabItem: 'tab-Web',
      subcurrentTabItem: '',
      api: [],
      itemSelected: [],
      reservedItem: {
        subCategory: '',
        totalPrice: '',
      },
      customApi: [
        {category: "AASale", 
          subCategories: [
            { subCategory: 'today.sale', price: '20', type: 'free', active: true},
            { subCategory: 'special.sale', price: '20', type: 'premium', active: false},
            { subCategory: 'anniv.sale', price: '20', type: 'premium', active: true}, 
            ],
          totalPrice: '70',
          wholesale_package: 'no',
        },
        {category: "Promo", 
          subCategories: [
            { subCategory: 'todays.promo', price: '20', type: 'free', active: true},
            { subCategory: 'now.promo', price: '20', type: 'free', active: true},
            { subCategory: 'anniv.promo', price: '20', type: 'premium', active: true}, 
            ],
            totalPrice: '80',
        },
        {category: "Today", 
          subCategories: [
            { subCategory: 'reserve.today', price: '20', type: 'free', active: false},
            { subCategory: 'sign-up.today', price: '20', type: 'free', active: true},
            { subCategory: 'promo.today', price: '20', type: 'free', active: false}, 
            ],
            totalPrice: '60',
        },
      ],
      indexItem: -1,
      bitss_types: [
        'free', 'premium', 'wholesale',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      headers: [
        {
          text: 'Domain',
          align: 'start',
          sortable: false,
          value: 'category',
        },
        {
          text: 'Price',
          align: 'start',
          sortable: false,
          value: 'price',
        },
        {text: 'Action', value: 'actions', sortable: false},
      ],
      subHeaders: [
        {
          text: 'Domain',
          align: 'start',
          sortable: false,
          value: 'subCategory',
        },
        {text: 'Action', value: 'actions', sortable: false},
      ],
      
      
    }
  },
  created () {
    this.initialize()
  },

  methods: {
    initialize() {
      this.api = [
        {category: "Sale", 
          subCategories: [
            { subCategory: 'today.sale', price: '20', type: 'free', active: true},
            { subCategory: 'special.sale', price: '20', type: 'premium', active: false},
            { subCategory: 'anniv.sale', price: '20', type: 'premium', active: true}, 
            ],
          totalPrice: '70',
          wholesale_package: 'no',
        },
        {category: "Promo", 
          subCategories: [
            { subCategory: 'todays.promo', price: '20', type: 'free', active: true},
            { subCategory: 'now.promo', price: '20', type: 'free', active: true},
            { subCategory: 'anniv.promo', price: '20', type: 'premium', active: true}, 
            ],
            totalPrice: '80',
        },
        {category: "Today", 
          subCategories: [
            { subCategory: 'reserve.today', price: '20', type: 'free', active: false},
            { subCategory: 'sign-up.today', price: '20', type: 'free', active: true},
            { subCategory: 'promo.today', price: '20', type: 'free', active: false}, 
            ],
            totalPrice: '60',
        },
      ];
    },
    onButtonClick(item) {
      this.indexItem = this.api.indexOf(item);
      this.reservedItem =  item;
      console.log('mangoes: '+ this.api.indexOf(item) + Object.assign({}, item));
    }

  },
  computed: {
    filtered_type() {
      // return _.chain(this.api).map("subCategories").flatten().value(type);
      let map_subCategories = _.chain(this.api).map("subCategories").flatten().value();
      return _.chain(map_subCategories).map("type").uniq().flatten().value();
      // return _.mapValues(this.api, 'category');
    },
     filtered_type_data() {
      // return _.chain(this.api).map("subCategories").flatten().value(type);
      let map_category =  _.chain(this.api).map("category").flatten().value();
      let map_subCategories = _.chain(this.api).map("subCategories").flatten().value();
      let map_type =  _.chain(map_subCategories).map("type").uniq().flatten().value();
      

      // let filter_category_data = _.chain(this.api).map("subCategories").flatten().filter({type: 'free', active: true}).value();
      let filter_category_data = _.find(this.api, function(category) {
        return category.category === 'Promo';
      });
      
      return filter_category_data;
    },
    filtered_type_free_active() {
      return _.chain(this.api).map("subCategories").flatten().filter({type: 'free', active: true}).value();
    },
    filtered_type_premium_active() {
      return _.chain(this.api).map("subCategories").flatten().filter({type: 'premium', active: true}).value();
    },
    filtered_subCategories_active() {
      return _.chain(this.api).map("subCategories").flatten().value();
    }
  },
}
</script>

<style>

</style>
