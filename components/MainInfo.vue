<template>
  <div class="main-info">
    <v-form v-model="valid" :validPage="valid" :firstName="firstName">
      <v-row>
        <v-col class="input-column">
          <span class="input-label"> First Name</span>
          <v-text-field
            v-model="firstName"
            :disabled="dataSaved"
            single-line
            outlined
          ></v-text-field>
        </v-col>

        <v-col class="input-column">
          <span class="input-label">Last name</span>
          <v-text-field
            v-model="lastName"
            single-line
            :disabled="dataSaved"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="input-column">
          <span class="input-label">Email Address</span>
          <v-text-field
            v-model="email"
            required
            :disabled="dataSaved"
            single-line
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="input-column">
          <span class="input-label">Phone Number</span>
          <v-text-field
            v-model="phoneNumber"
            :disabled="dataSaved"
            single-line
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="input-column">
          <span class="input-label">Position</span>
          <v-text-field
            v-model="position"
            :disabled="dataSaved"
            single-line
            outlined
          ></v-text-field>
        </v-col>
        <v-col class="input-column">
          <span class="input-label">Available Companies</span>
          <v-select
            v-model="availableCompanies"
            :disabled="dataSaved"
            :items="availableCompaniesItems"
            :menu-props="{ top: true }"
            attach
            chips
            multiple
            outlined
            deletable-chips
          ></v-select>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    position: "",
    availableCompanies: [],
    availableCompaniesItems: [
      "Precoro",
      "Precoro Development",
      "Precoro Enterteiment",
      "Precoro Production",
    ],
    requiredRules: [(v) => !!v || "The field is required"],
    email: "",
  }),

  props: {
    dataSaved: {
      type: Boolean,
    },
  },

  updated() {
    this.emitValid();
  },

  methods: {
    emitValid() {
      this.$emit("valid", {
        valid: this.valid,
      });
    },
  },
};
</script>

<style lang="scss"></style>
