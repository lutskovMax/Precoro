<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header
        >Precoro
        <span class="counter-selected">
          <counterSelected :selectedArray="counterSelected" /> </span
      ></v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col class="input-column">
            <span class="input-label">Main Location *</span>
            <v-select
              v-model="location"
              :items="itemsForLocation"
              :menu-props="{ top: true }"
              :disabled="dataSaved"
              attach
              outlined
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="allLocation"
              @click="addAllLocation"
              :disabled="dataSaved"
              :color="'#415ADA'"
              :label="'Select All Locations'"
            ></v-checkbox>
          </v-col>
        </v-row>
        <h3 class="subtitle">Available Locations</h3>
        <v-row>
          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="berlinLoc"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'Berlin'"
            ></v-checkbox>
          </v-col>

          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="polandLoc"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'Poland Office'"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="veniceLoc"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'Venice Office'"
            ></v-checkbox>
          </v-col>

          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="mexicoLoc"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'Mexico'"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="usaLoc"
              :color="'#415ADA'"
              :label="'USA Office'"
              :disabled="dataSaved"
            ></v-checkbox>
          </v-col>

          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="ukraineLoc"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'Ukraine Kiyv Lukivska 7 Main Office'"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="canadaLoc"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'Canada'"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header
        >Precoro Development
        <span class="counter-selected">
          <counterSelected :selectedArray="counterSelectedDevelopment" /> </span
      ></v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="secondCheck1"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'SecondCheck1'"
            ></v-checkbox>
          </v-col>

          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="secondCheck2"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'SecondCheck2'"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="secondCheck3"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'SecondCheck3'"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header
        >Procurement
        <span class="counter-selected">
          <counterSelected :selectedArray="counterSelectedProcurement" /> </span
      ></v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="procurement1"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'procurement 1'"
            ></v-checkbox>
          </v-col>

          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="procurement2"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'procurement 2'"
            ></v-checkbox>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="procurement3"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'procurement 3'"
            ></v-checkbox>
          </v-col>

          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="procurement4"
              :color="'#415ADA'"
              :disabled="dataSaved"
              :label="'procurement 3'"
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  data: () => ({
    location: "",
    berlinLoc: false,
    veniceLoc: false,
    polandLoc: false,
    mexicoLoc: false,
    usaLoc: false,
    ukraineLoc: false,
    canadaLoc: false,
    allLocation: false,
    secondCheck1: false,
    secondCheck2: false,
    secondCheck3: false,
    procurement1: false,
    procurement2: false,
    procurement3: false,
    procurement4: false,
    count: 0,
    itemsForLocation: ["Main Precoro US", "Main Precoro EU", "Main Precoro UA"],
    requiredRules: [(v) => !!v || "The field is required"],
  }),

  props: {
    dataSaved: {
      type: Boolean,
    },
  },

  computed: {
    counterSelected() {
      return [
        this.berlinLoc,
        this.veniceLoc,
        this.polandLoc,
        this.mexicoLoc,
        this.usaLoc,
        this.ukraineLoc,
        this.canadaLoc,
      ];
    },

    counterSelectedProcurement() {
      return [
        this.procurement1,
        this.procurement2,
        this.procurement3,
        this.procurement4,
      ];
    },

    counterSelectedDevelopment() {
      return [this.secondCheck1, this.secondCheck2, this.secondCheck3];
    },
  },

  methods: {
    addAllLocation() {
      (this.berlinLoc = this.allLocation),
        (this.veniceLoc = this.allLocation),
        (this.polandLoc = this.allLocation),
        (this.mexicoLoc = this.allLocation),
        (this.usaLoc = this.allLocation),
        (this.ukraineLoc = this.allLocation),
        (this.canadaLoc = this.allLocation);
    },
  },
};
</script>

<style lang="scss">
.counter-selected {
  text-align: right;
  color: $black;
  opacity: 0.4;
  font-weight: 500;
  font-size: 16px;
  margin-right: 22px !important;
}

.subtitle {
  color: $black;
  opacity: 0.6;
  font-weight: 500;
  font-size: 16px;
  line-height: 144%;
  margin: 16px 0 10px 0;
}

.column-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 144%;
  color: $black;
}
</style>
