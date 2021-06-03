<template>
  <v-container fluid  class="fill-height d-flex align-start" color="grey lighten-5">
    <v-row >
      <v-col cols="8">
        <v-text-field
          v-model="company_name"
          color="white"
          :label="$t('login.form.namePlaceholder')"
          single-line
          elevation="0"
          class="py-2 mb-4"
          elevate="1"
          solo
        ></v-text-field>

        <v-tabs
          v-model="currentTabItem"
          fixed-tabs
          slider-color="white">
          <v-tab
            v-for="(type, index) in bitss_types"
            :key="index"
            :href="'#tab-' + type">
            {{ type }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="currentTabItem">
          <v-tab-item
            v-for="(type, index) in bitss_types"
            :key="index"
            :value="'tab-' + type">
            <v-card flat>



              <v-card-text>
                <!-- <template v-for="map_filtered in filtered_type">
                  
                  <template v-if="type === map_filtered">
                    <h1>{{map_filtered}}</h1> -->
                    
                    <v-data-table
                      v-model="itemSelected"
                      item-key="subCategory"
                      show-select
                      :headers="headers"
                      :items="filtered_type_free_active"
                      item-class="row_classes"
                      :search="search">
    
                      <template v-slot:item.actions="{item, itemSelected}">
                        
                        <v-btn
                          class="d-inline-flex mx-1"
                          small
                          @click="onButtonClick(item, itemSelected)">
                          BUY
                        </v-btn>
                      </template>  
                    </v-data-table>
                  <!-- </template>
                  <template v-if="type === 'wholesale'">
                      Wholesale Package(s)
                  </template>
                </template> -->
                
                <!-- <template v-if="type === 'free'">
                  
                  <v-data-table
                    :headers="headers"
                    :items="filtered_type_free_active"
                    item-class="row_classes"
                    :search="search">
  
                    <template v-slot:item.actions="{item}">
                      
                      <v-btn
                        class="d-inline-flex mx-1"
                        small
                        @click="onButtonClick(item)">
                        BUY
                      </v-btn>
                    </template>  
                  </v-data-table>
                </template>

                <template v-if="type === 'premium'">
                  
                  <v-data-table
                    :headers="headers"
                    :items="filtered_type_premium_active"
                    item-class="row_classes"
                    :search="search">
  
                    <template v-slot:item.actions="{item}">
                      
                      <v-btn
                        class="d-inline-flex mx-1"
                        small
                        @click="onButtonClick(item)">
                        BUY
                      </v-btn>
                    </template>  
                  </v-data-table>
                </template>

                 -->



                <template v-if="type === 'Wholesale Package(s)'">
                  <v-tabs
                   v-model="subcurrentTabItem"
                    fixed-tabs
                    slider-color="white">
                    <v-tab
                      v-for="i in api"
                      :key="i.category"
                      :href="'#tab-' + i.category">
                      {{ i.category }}
                    </v-tab>
                  </v-tabs>
                  
                  <v-tabs-items v-model="subcurrentTabItem">
                    <v-tab-item
                      v-for="(i, j) in api"
                      :key="j"
                      :value="'tab-' + i.category">
                      <v-card flat>
                        <v-card-text>
                          <template v-if="i.category === 'Sale'">
                            <v-data-table
                              :headers="subHeaders"
                              :items="filtered_subCategories_active"
                              item-class="row_classes"
                              :search="search">
            
                              <template v-slot:item.actions="{item}">
                                
                                <v-btn
                                  class="d-inline-flex mx-1"
                                  small
                                  @click="onButtonClick(item)">
                                  BUY
                                </v-btn>
                              </template>  
                            </v-data-table>
                          </template>
                          
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>


                </template>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        
      </v-col>

      <v-col cols="4">
        <v-sheet color="white" class="fill-height px-4 py-4">
          <h2 v-text="company_name"></h2>
          {{filtered_type_data}} -- 
          <h1>{{reservedItem}}</h1>

          <br/><br/>
          {{itemSelected}}
        </v-sheet> 
      </v-col>

      
    </v-row>
  </v-container>
</template>
<script>
import _ from 'lodash';
import _map from 'lodash/map';
import _filter from 'lodash/filter';


export default {
  layout: 'dashboard',
  data() {
    return {
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
          value: 'subCategory',
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
    onButtonClick(item, itemSelected) {
      this.indexItem = this.api.indexOf(item);
      this.reservedItem =  item;
      console.log('mangoes: '+ itemSelected);
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