<template>
  <div class="doc">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header
          >Precoro
          <span class="counter-selected">
            <counterSelected :selectedArray="allSelectedCheckbox" /> </span
        ></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col class="input-column-checkbox">
              <v-checkbox
                class="mb-24 checkbox-main"
                v-model="allDoc"
                :disabled="dataSaved"
                :color="'#415ADA'"
                @click="fillAllDocuments"
                :label="'Select All Document Custom Fields'"
              ></v-checkbox>
            </v-col>
          </v-row>
          <h3 class="subtitle">Available Document Custom Fields</h3>
          <v-row class="top-row">
            <v-col class="input-column-checkbox">
              <h2 class="table-subtitle">Classes</h2>
              <v-checkbox
                class="checkbox-main"
                @click="addAllClass"
                v-model="allClasses"
                :disabled="dataSaved"
                :color="'#415ADA'"
                :label="'Select All'"
              ></v-checkbox>
            </v-col>

            <v-col class="input-column-checkbox">
              <h2 class="table-subtitle">Departments</h2>
              <v-checkbox
                class="checkbox-main"
                v-model="allDepartments"
                @click="addAllDepart"
                :color="'#415ADA'"
                :disabled="dataSaved"
                :label="'Select All'"
              ></v-checkbox>
            </v-col>

            <v-col class="input-column-checkbox">
              <h2 class="table-subtitle">DCF 3</h2>
              <v-checkbox
                class="checkbox-main"
                v-model="allDcf"
                @click="addAllDcf"
                :color="'#415ADA'"
                :disabled="dataSaved"
                :label="'Select All'"
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="input-column-checkbox">
              <div class="select-expansions">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <div class="select-expansions__body">
                      <v-checkbox
                        v-model="class1"
                        :disabled="dataSaved"
                        :color="'#415ADA'"
                      >
                      </v-checkbox>
                      <v-expansion-panel-header>
                        Class 1
                      </v-expansion-panel-header>
                    </div>
                    <v-expansion-panel-content>
                      <v-checkbox
                        v-model="class1d2"
                        :color="'#415ADA'"
                        :disabled="dataSaved"
                        :label="'Class 1.2'"
                      >
                      </v-checkbox>

                      <v-checkbox
                        v-model="class1d3"
                        :color="'#415ADA'"
                        :label="'Class 1.3'"
                        :disabled="dataSaved"
                      >
                      </v-checkbox>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>

              <div class="select-expansions">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <div class="select-expansions__body">
                      <v-checkbox
                        :disabled="dataSaved"
                        v-model="class2"
                        :color="'#415ADA'"
                      >
                      </v-checkbox>
                      <v-expansion-panel-header>
                        Class 2
                      </v-expansion-panel-header>
                    </div>
                    <v-expansion-panel-content>
                      <v-checkbox
                        v-model="class2d2"
                        :color="'#415ADA'"
                        :disabled="dataSaved"
                        :label="'Class 2.2'"
                      >
                      </v-checkbox>

                      <v-checkbox
                        v-model="class2d3"
                        :color="'#415ADA'"
                        :disabled="dataSaved"
                        :label="'Class 2.3'"
                      >
                      </v-checkbox>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>

              <v-checkbox
                v-model="class3"
                :color="'#415ADA'"
                :label="'Class 3'"
                :disabled="dataSaved"
              >
              </v-checkbox>

              <v-checkbox
                v-model="class4"
                :color="'#415ADA'"
                :disabled="dataSaved"
                :label="'Class 4'"
              >
              </v-checkbox>
            </v-col>
            <v-col class="input-column-checkbox">
              <div class="select-expansions">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <div class="select-expansions__body">
                      <v-checkbox
                        @click="addAllDev"
                        v-model="depart1"
                        :disabled="dataSaved"
                        :color="'#415ADA'"
                      >
                      </v-checkbox>
                      <v-expansion-panel-header>
                        Developers
                      </v-expansion-panel-header>
                    </div>
                    <v-expansion-panel-content>
                      <div class="select-expansions">
                        <v-expansion-panels>
                          <v-expansion-panel>
                            <div class="select-expansions__body">
                              <v-checkbox
                                v-model="depart1d2"
                                :color="'#415ADA'"
                                :disabled="dataSaved"
                              >
                              </v-checkbox>
                              <v-expansion-panel-header>
                                2nd Sub-Developers
                              </v-expansion-panel-header>
                            </div>
                            <v-expansion-panel-content>
                              <div class="select-expansions">
                                <v-expansion-panels>
                                  <v-expansion-panel>
                                    <div class="select-expansions__body">
                                      <v-checkbox
                                        v-model="depart1d3"
                                        :disabled="dataSaved"
                                        :color="'#415ADA'"
                                      >
                                      </v-checkbox>
                                      <v-expansion-panel-header>
                                        3d Sub-Developers
                                      </v-expansion-panel-header>
                                    </div>
                                    <v-expansion-panel-content>
                                      <v-checkbox
                                        v-model="depart1d4"
                                        :color="'#415ADA'"
                                        :disabled="dataSaved"
                                        :label="'iOS & Android Devs'"
                                      >
                                      </v-checkbox>

                                      <v-checkbox
                                        v-model="depart1d5"
                                        :color="'#415ADA'"
                                        :disabled="dataSaved"
                                        :label="'4th Sub-Developers'"
                                      >
                                      </v-checkbox>
                                    </v-expansion-panel-content>
                                  </v-expansion-panel>
                                </v-expansion-panels>
                              </div>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
              <v-checkbox
                v-model="depart2"
                :color="'#415ADA'"
                :disabled="dataSaved"
                :label="'Class 3'"
              >
              </v-checkbox>

              <v-checkbox
                v-model="depart3"
                :disabled="dataSaved"
                :color="'#415ADA'"
                :label="'Class 4'"
              >
              </v-checkbox>
            </v-col>
            <v-col class="input-column-checkbox">
              <div class="select-expansions">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <div class="select-expansions__body">
                      <v-checkbox
                        :disabled="dataSaved"
                        v-model="dcf1"
                        :color="'#415ADA'"
                      >
                      </v-checkbox>
                      <v-expansion-panel-header>
                        Class 1
                      </v-expansion-panel-header>
                    </div>
                    <v-expansion-panel-content>
                      <v-checkbox
                        v-model="dcf1d2"
                        :color="'#415ADA'"
                        :disabled="dataSaved"
                        :label="'Class 1.2'"
                      >
                      </v-checkbox>

                      <v-checkbox
                        v-model="dcf1d3"
                        :color="'#415ADA'"
                        :disabled="dataSaved"
                        :label="'Class 1.3'"
                      >
                      </v-checkbox>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>

              <div class="select-expansions">
                <v-expansion-panels>
                  <v-expansion-panel>
                    <div class="select-expansions__body">
                      <v-checkbox
                        v-model="dcf2"
                        :disabled="dataSaved"
                        :color="'#415ADA'"
                      >
                      </v-checkbox>
                      <v-expansion-panel-header>
                        Class 2
                      </v-expansion-panel-header>
                    </div>
                    <v-expansion-panel-content>
                      <v-checkbox
                        v-model="dcf2d2"
                        :color="'#415ADA'"
                        :label="'Class 2.2'"
                        :disabled="dataSaved"
                      >
                      </v-checkbox>

                      <v-checkbox
                        v-model="dcf2d3"
                        :color="'#415ADA'"
                        :label="'Class 2.3'"
                        :disabled="dataSaved"
                      >
                      </v-checkbox>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>

              <v-checkbox
                v-model="dcf3"
                :disabled="dataSaved"
                :color="'#415ADA'"
                :label="'Class 3'"
              >
              </v-checkbox>

              <v-checkbox
                v-model="dcf4"
                :disabled="dataSaved"
                :color="'#415ADA'"
                :label="'Class 4'"
              >
              </v-checkbox>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header
          >Precoro Development
          <span class="counter-selected">
            <counterSelected
              :selectedArray="counterSelectedDevelopment"
            /> </span
        ></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col class="input-column-checkbox">
              <v-checkbox
                v-model="secondCheck1"
                :disabled="dataSaved"
                :color="'#415ADA'"
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
            <counterSelected
              :selectedArray="counterSelectedProcurement"
            /> </span
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
  </div>
</template>

<script>
export default {
  data: () => ({
    allDoc: false,
    allClasses: false,
    allDepartments: false,
    allDcf: false,
    class1: false,
    class1d2: false,
    class1d3: false,
    class2: false,
    class2d2: false,
    class2d3: false,
    class3: false,
    class4: false,

    dcf1: false,
    dcf1d2: false,
    dcf1d3: false,
    dcf2: false,
    dcf2d2: false,
    dcf2d3: false,
    dcf3: false,
    dcf4: false,

    depart1: false,
    depart1d2: false,
    depart1d3: false,
    depart1d4: false,
    depart1d5: false,
    depart2: false,
    depart3: false,

    secondCheck1: false,
    secondCheck2: false,
    secondCheck3: false,

    procurement1: false,
    procurement2: false,
    procurement3: false,
    procurement4: false,

    count: 0,
    requiredRules: [(v) => !!v || "The field is required"],
  }),

  props: {
    dataSaved: {
      type: Boolean,
    },
  },

  computed: {
    counterSelectedClass() {
      return [
        this.class1,
        this.class1d2,
        this.class1d3,
        this.class2,
        this.class2d2,
        this.class2d3,
        this.class3,
        this.class4,
      ];
    },

    allSelectedCheckbox() {
      return this.counterSelectedClass.concat(
        this.counterSelectedDcf,
        this.counterSelectedDepart
      );
    },

    counterSelectedDevelopment() {
      return [this.secondCheck1, this.secondCheck2, this.secondCheck3];
    },

    counterSelectedProcurement() {
      return [
        this.procurement1,
        this.procurement2,
        this.procurement3,
        this.procurement4,
      ];
    },

    counterSelectedDcf() {
      return [
        this.dcf1,
        this.dcf1d2,
        this.dcf1d3,
        this.dcf2,
        this.dcf2d2,
        this.dcf2d3,
        this.dcf3,
        this.dcf4,
      ];
    },

    counterSelectedDepart() {
      return [
        this.depart1,
        this.depart1d2,
        this.depart1d3,
        this.depart1d4,
        this.depart1d5,
        this.depart2,
        this.depart3,
      ];
    },

    selectedDev() {
      return [this.depart1d2, this.depart1d3, this.depart1d4, this.depart1d5];
    },

    counterSelectedDevelopment() {
      return [this.secondCheck1, this.secondCheck2, this.secondCheck3];
    },

    classNotChecked() {
      return this.counterSelectedClass.includes(false);
    },

    departNotChecked() {
      return this.counterSelectedDepart.includes(false);
    },

    dcfNotChecked() {
      return this.counterSelectedDcf.includes(false);
    },

    DevNotChecked() {
      return this.selectedDev.includes(false);
    },

    allDocNotChecked() {
      return this.allSelectedCheckbox.includes(false);
    },
  },

  updated() {
    this.allClasses = !this.classNotChecked;
    this.allDepartments = !this.departNotChecked;
    this.depart1 = !this.DevNotChecked;
    this.allDcf = !this.dcfNotChecked;
    this.allDoc = !this.allDocNotChecked;
  },

  methods: {
    addAllClass() {
      (this.class1 = this.allClasses),
        (this.class1d2 = this.allClasses),
        (this.class1d3 = this.allClasses),
        (this.class2 = this.allClasses),
        (this.class2d2 = this.allClasses),
        (this.class2d3 = this.allClasses),
        (this.class3 = this.allClasses),
        (this.class4 = this.allClasses);
    },

    fillAllDocuments() {
      this.allClasses = true;
      this.allDcf = true;
      this.allDepartments = true;
      this.addAllClass();
      this.addAllDepart();
      this.addAllDcf();
    },

    addAllDcf() {
      (this.dcf1 = this.allDcf),
        (this.dcf1d2 = this.allDcf),
        (this.dcf1d3 = this.allDcf),
        (this.dcf2 = this.allDcf),
        (this.dcf2d2 = this.allDcf),
        (this.dcf2d3 = this.allDcf),
        (this.dcf3 = this.allDcf),
        (this.dcf4 = this.allDcf);
    },

    addAllDev() {
      (this.depart1d2 = this.depart1),
        (this.depart1d3 = this.depart1),
        (this.depart1d4 = this.depart1),
        (this.depart1d5 = this.depart1);
    },

    addAllDepart() {
      (this.depart1 = this.allDepartments),
        (this.depart1d2 = this.allDepartments),
        (this.depart1d3 = this.allDepartments),
        (this.depart1d4 = this.allDepartments),
        (this.depart1d5 = this.allDepartments),
        (this.depart2 = this.allDepartments),
        (this.depart3 = this.allDepartments);
    },
  },
};
</script>

<style lang="scss">
.doc {
  .row {
    align-items: flex-start;
    gap: 100px;
  }

  .checkbox-main {
    margin: 16px 0;

    .v-label {
      border-bottom: none;
    }
  }

  .top-row {
    margin-top: 8px;
  }

  .v-label {
    padding-bottom: 4px;
    margin-left: 8px;
    border-bottom: 1px solid #e9eaee;
  }

  .table-subtitle {
    color: $black;
    font-weight: 600;
    font-size: 18px;
    line-height: 144%;
    margin-left: 12px;
  }

  .mb-24 {
    margin-bottom: 24px;
  }
}

.checkbox-main {
  label {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: $black;
  }
}

.select-expansions {
  display: flex;
  justify-content: center;

  &__body {
    display: flex;

    .v-expansion-panel-header {
      justify-content: space-between;
      border-top: none;
      border-bottom: 1px solid #e9eaee;
    }
  }

  .v-expansion-panel {
    position: relative;
  }

  // .v-input--checkbox {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  // }

  .v-expansion-panel-header {
    color: $black;
    padding: 0;
    min-height: auto;
    white-space: nowrap;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px !important;
  }
}
</style>
