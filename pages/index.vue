<template>
  <div class="invite">
    <div class="container">
      <h2 class="invite__title">Invite User</h2>
      <div class="invite__wrapper">
        <div class="invite__menu">
          <v-tabs class="invite__menu--tabs" v-model="tab">
            <v-tab
              class="invite__menu--title"
              v-for="item in items"
              :key="item.count"
            >
              <span class="invite__menu--title-circle">{{ item.count }} </span>
              {{ item.tab }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item
              class="invite__menu--item"
              v-for="item in items"
              :key="item.count"
            >
              <div class="invite__content">
                <component
                  @valid="isValidPage"
                  v-bind:is="item.content"
                  :dataSaved="isDataSaved"
                ></component>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>

        <button
          v-if="tab != 3"
          class="invite__btn"
          :disabled="!valid.valid"
          @click="nextStep"
        >
          Next Step
        </button>
        <button class="invite__btn" v-if="tab === 3" @click="saveData = true">
          Invite User
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MainInfo from "@/components/MainInfo";
import AvailableLocations from "@/components/AvailableLocations";
import AvailableDocuments from "@/components/AvailableDocuments";
import UserRoles from "@/components/UserRoles";

export default {
  components: {
    MainInfo,
    AvailableLocations,
    AvailableDocuments,
    UserRoles,
  },

  data() {
    return {
      valid: false,
      tab: null,
      savedData: false,
      saveData: false,
      items: [
        { tab: "Main Info", content: "MainInfo", count: "1" },
        {
          tab: "Available Locations",
          content: "AvailableLocations",
          count: "2",
        },
        {
          tab: "Available Documents Custom Fields",
          content: "AvailableDocuments",
          count: "3",
        },
        { tab: "Roles", content: "UserRoles", count: "4" },
      ],
    };
  },

  computed: {
    isDataSaved() {
      if (this.saveData) {
        return (this.savedData = true);
      }
    },
  },

  methods: {
    isValidPage(validPage) {
      this.valid = validPage;
    },
    nextStep() {
      this.tab = this.tab + 1;
    },
  },
};
</script>

<style lang="scss">
.container {
  max-width: 867px;
  margin: 0 auto;
  padding: 0;
  box-shadow: 0px 8px 16px rgba(54, 62, 113, 0.24);
  border-radius: 16px;
  margin-top: 100px;
  padding: 24px;
}

.invite {
  font-family: "Inter";
  font-style: normal;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
  }

  &__btn {
    display: block;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: $white;
    padding: 10px 16px;
    background: $black;
    border-radius: 20px;
    margin: 25px 0 0 auto;

    &:disabled {
      background: $light-blue;
      color: $black;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.3;
    margin-bottom: 8px;
    color: $black;
  }

  &__content {
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__menu {
    &--item {
      background: #fff;
    }
    &--title {
      font-weight: 500;
      font-size: 16px;
      line-height: 144%;
      color: $blue;
      letter-spacing: normal;
      text-transform: none;
      padding: 0;
      padding-right: 24px;

      &-circle {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 8px;
        background: $grey;
      }
    }

    &--tabs {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  .v-tab.v-tab {
    color: $blue;
  }

  .v-tabs-slider {
    background: $blue;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}

.v-expansion-panel::before {
  box-shadow: none;
}

.v-expansion-panel-header {
  border-top: 1px solid #dddee5;
  color: $black;
  font-weight: 600;
  font-size: 18px;
  line-height: 144%;
  padding-left: 0;
}

.v-expansion-panel--active:not(:first-child) {
  margin-top: 0;
}

.v-expansion-panel-content__wrap {
  padding: 0 0 0 7px;
}

.v-select__selections {
  overflow: hidden;
}

.v-window {
  overflow: inherit;
}

.v-size--default {
  overflow: inherit;
}

.v-text-field {
  padding-top: 0;
  margin-top: 0;
  max-height: 40px;
}

.v-select {
  padding-top: 0;
  margin-top: 0;
  max-height: 40px;
}

.v-input--selection-controls {
  margin-top: 0;
}

.input-column-checkbox {
  padding: 0;
  max-width: 160px;

  label {
    white-space: nowrap;
    color: $black !important;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px !important;
  }

  .v-icon {
    font-size: 18px;
  }

  .theme--light.v-messages {
    display: none;
  }

  .v-input__slot {
    margin-bottom: 0;
  }
}

.row {
  align-items: center;
}

.theme--light.v-icon {
  color: $blue;
}

.v-select__slot {
  min-height: auto !important;
  overflow: hidden;
  align-items: center;
}

.v-input__slot {
  padding: 2px 8px !important;
  min-height: auto !important;
  max-height: 40px;
}

.v-select__selections {
  flex-wrap: nowrap;
}

.v-chip {
  background: $light-blue !important;
  border-radius: 5px !important;

  &::before {
    background: $light-blue !important;
  }
}

.v-input {
  color: $blue !important;
}

.input-column {
  max-width: 345px;
}

.v-input__append-inner {
  margin-top: 6px !important;
}

.input-label {
  color: $light-grey;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
}
</style>
