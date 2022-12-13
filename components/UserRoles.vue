<template>
  <v-expansion-panels>
    <v-expansion-panel class="user-role">
      <v-expansion-panel-header
        >Precoro
        <span class="counter-selected">
          {{ addUserRoles() }}
        </span></v-expansion-panel-header
      >
      <v-expansion-panel-content>
        <div class="user-role__wrap">
          <v-row>
            <v-col class="input-column-checkbox column-subtitle">
              <h3 class="subtitle ml-0">Access to:</h3></v-col
            >
            <v-col class="input-column-checkbox">
              <h3 class="subtitle">View only</h3></v-col
            >
            <v-col class="input-column-checkbox">
              <h3 class="subtitle">Create</h3></v-col
            >
            <v-col class="input-column-checkbox">
              <h3 class="subtitle">Approve</h3></v-col
            >
            <v-col class="input-column-checkbox">
              <h3 class="subtitle">Pay</h3></v-col
            >
          </v-row>
          <v-row>
            <v-col class="input-column-checkbox column-subtitle">
              <h3 class="column-title">All bellow</h3></v-col
            >

            <v-col class="input-column-checkbox">
              <v-checkbox
                @click="addAllView"
                v-model="allView"
                :disabled="dataSaved"
                :color="'#415ADA'"
              ></v-checkbox>
            </v-col>
            <v-col class="input-column-checkbox">
              <v-checkbox
                @click="addAllCreate"
                v-model="allCreate"
                :disabled="dataSaved"
                :color="'#415ADA'"
              ></v-checkbox>
            </v-col>
            <v-col class="input-column-checkbox">
              <v-checkbox
                @click="addAllApprove"
                v-model="allApprove"
                :disabled="dataSaved"
                :color="'#415ADA'"
              ></v-checkbox>
            </v-col>
            <v-col class="input-column-checkbox">
              <v-checkbox
                @click="addAllPay"
                v-model="allPay"
                :color="'#415ADA'"
                :disabled="dataSaved"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="input-column-checkbox column-subtitle">
              <h3 class="column-title">Warehouse requests</h3></v-col
            >
            <v-col
              v-for="item in items"
              :key="item"
              class="input-column-checkbox"
            >
              <v-checkbox
                v-model="warehouse[item.key]"
                :color="'#415ADA'"
                :disabled="dataSaved"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="input-column-checkbox column-subtitle">
              <h3 class="column-title">Purchase requests</h3></v-col
            >
            <v-col
              v-for="item in itemsForPurchase"
              :key="item"
              class="input-column-checkbox"
            >
              <v-checkbox
                v-model="purchase[item.key]"
                :color="'#415ADA'"
                :disabled="dataSaved"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="input-column-checkbox column-subtitle">
              <h3 class="column-title">Request for proposals</h3></v-col
            >
            <v-col
              v-for="item in itemsForProposals"
              :key="item"
              class="input-column-checkbox"
            >
              <v-checkbox
                v-model="proposals[item.key]"
                :color="'#415ADA'"
                :disabled="dataSaved"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="input-column-checkbox column-subtitle">
              <h3 class="column-title">Purchase orders</h3></v-col
            >
            <v-col
              v-for="item in itemsForOrders"
              :key="item"
              class="input-column-checkbox"
            >
              <v-checkbox
                v-model="orders[item.key]"
                :color="'#415ADA'"
                :disabled="dataSaved"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="input-column-checkbox column-subtitle">
              <h3 class="column-title">Receipts</h3></v-col
            >
            <v-col
              v-for="item in itemsForReceipts"
              :key="item"
              class="input-column-checkbox"
            >
              <v-checkbox
                v-model="receipts[item.key]"
                :color="'#415ADA'"
                :disabled="dataSaved"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="input-column-checkbox column-subtitle">
              <h3 class="column-title">Invoices</h3></v-col
            >
            <v-col
              v-for="item in itemsForInvoices"
              :key="item"
              class="input-column-checkbox"
            >
              <v-checkbox
                v-model="invoices[item.key]"
                :color="'#415ADA'"
                :disabled="dataSaved"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="input-column-checkbox column-subtitle">
              <h3 class="column-title">Expenses</h3></v-col
            >

            <v-col
              v-for="item in itemsForExpenses"
              :key="item"
              class="input-column-checkbox"
            >
              <v-checkbox
                v-model="expenses[item.key]"
                :color="'#415ADA'"
                :disabled="dataSaved"
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>
        <div class="user-role__manage">
          <v-col class="input-column-checkbox second">
            <h3 class="subtitle subtitle-image">
              Management: <img src="..//assets/image/Info.svg" alt="" />
            </h3>

            <v-checkbox
              @click="addAllManagement"
              v-model="allCheckedManagement"
              :color="'#415ADA'"
              :label="'All bellow'"
              :disabled="dataSaved"
            ></v-checkbox>

            <v-checkbox
              v-for="item in itemsForManagement"
              :key="item"
              v-model="management[item.key]"
              :color="'#415ADA'"
              :label="item.label"
              :disabled="dataSaved"
            ></v-checkbox>

            <div class="subtitle-image full-access">
              <v-checkbox
                v-model="fullAccess"
                :color="'#415ADA'"
                :disabled="dataSaved"
                :label="'Admin (Full access)'"
              >
              </v-checkbox>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9V13.5M12 16.5V17M4.38254 21H19.6175C21.1387 21 22.103 19.3691 21.3699 18.0362L13.7524 4.18624C12.9926 2.80469 11.0074 2.80469 10.2476 4.18624L2.63011 18.0362C1.89701 19.3691 2.86134 21 4.38254 21Z"
                  stroke="#EA9210"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </v-col>
        </div>
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
              :disabled="dataSaved"
              :color="'#415ADA'"
              :label="'procurement 3'"
            ></v-checkbox>
          </v-col>

          <v-col class="input-column-checkbox">
            <v-checkbox
              v-model="procurement4"
              :disabled="dataSaved"
              :color="'#415ADA'"
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
    fullAccess: false,
    allCheckedManagement: false,
    allView: false,
    allCreate: false,
    allApprove: false,
    allPay: false,
    role: [],
    userRoles: [],
    warehouse: {
      warehouseView: false,
      warehousePay: false,
      warehouseCreate: false,
      warehouseApprove: false,
    },

    purchase: {
      purchaseView: false,
      purchasePay: false,
      purchaseCreate: false,
      purchaseApprove: false,
    },

    proposals: {
      proposalsView: false,
      proposalsPay: false,
      proposalsCreate: false,
      proposalsApprove: false,
    },

    orders: {
      ordersView: false,
      ordersPay: false,
      ordersCreate: false,
      ordersApprove: false,
    },

    receipts: {
      receiptsView: false,
      receiptsPay: false,
      receiptsCreate: false,
      receiptsApprove: false,
    },

    invoices: {
      invoicesView: false,
      invoicesPay: false,
      invoicesCreate: false,
      invoicesApprove: false,
    },

    expenses: {
      expensesView: false,
      expensesPay: false,
      expensesCreate: false,
      expensesApprove: false,
    },

    management: {
      configuration: false,
      suppliers: false,
      budgets: false,
      warehouse: false,
      reports: false,
    },

    itemsForManagement: [
      { key: "configuration", label: "Configuration" },
      { key: "suppliers", label: "Suppliers and items" },
      { key: "budgets", label: "Budgets" },
      { key: "warehouse", label: "Warehouse manager" },
      { key: "reports", label: "Reports" },
    ],

    items: [
      { key: "warehouseView" },
      { key: "warehouseCreate" },
      { key: "warehouseApprove" },
      { key: "warehousePay" },
    ],

    itemsForPurchase: [
      { key: "purchaseView" },
      { key: "purchaseCreate" },
      { key: "purchaseApprove" },
      { key: "purchasePay" },
    ],

    itemsForProposals: [
      { key: "proposalsView" },
      { key: "proposalsCreate" },
      { key: "proposalsApprove" },
      { key: "proposalsPay" },
    ],

    itemsForOrders: [
      { key: "ordersView" },
      { key: "ordersCreate" },
      { key: "ordersApprove" },
      { key: "ordersPay" },
    ],

    itemsForReceipts: [
      { key: "receiptsView" },
      { key: "receiptsCreate" },
      { key: "receiptsApprove" },
      { key: "receiptsPay" },
    ],

    itemsForInvoices: [
      { key: "invoicesView" },
      { key: "invoicesCreate" },
      { key: "invoicesApprove" },
      { key: "invoicesPay" },
    ],

    itemsForExpenses: [
      { key: "expensesView" },
      { key: "expensesCreate" },
      { key: "expensesApprove" },
      { key: "expensesPay" },
    ],
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

    isManagementValues() {
      return Object.values(this.management);
    },

    isViewsValues() {
      return Object.values(this.management);
    },

    counterSelectedDevelopment() {
      return [this.secondCheck1, this.secondCheck2, this.secondCheck3];
    },

    allManagementNotChecked() {
      return this.isManagementValues.includes(false);
    },

    allViewOnlyChecked() {
      return this.arrayViewOnly.includes(false);
    },

    allCreateChecked() {
      return this.arrayCreate.includes(false);
    },

    allApproveChecked() {
      return this.arrayApprove.includes(false);
    },

    allPayChecked() {
      return this.arrayPay.includes(false);
    },

    allViewOnlyNotChecked() {
      return this.arrayViewOnly.includes(true);
    },

    allCreateNotChecked() {
      return this.arrayCreate.includes(true);
    },

    allApproveNotChecked() {
      return this.arrayApprove.includes(true);
    },

    allPayNotChecked() {
      return this.arrayPay.includes(true);
    },

    arrayViewOnly() {
      return [
        this.warehouse.warehouseView,
        this.purchase.purchaseView,
        this.proposals.proposalsView,
        this.orders.ordersView,
        this.receipts.receiptsView,
        this.invoices.invoicesView,
        this.expenses.expensesView,
      ];
    },

    arrayCreate() {
      return [
        this.warehouse.warehouseCreate,
        this.purchase.purchaseCreate,
        this.proposals.proposalsCreate,
        this.orders.ordersCreate,
        this.receipts.receiptsCreate,
        this.invoices.invoicesCreate,
        this.expenses.expensesCreate,
      ];
    },

    arrayApprove() {
      return [
        this.warehouse.warehouseApprove,
        this.purchase.purchaseApprove,
        this.proposals.proposalsApprove,
        this.orders.ordersApprove,
        this.receipts.receiptsApprove,
        this.invoices.invoicesApprove,
        this.expenses.expensesApprove,
      ];
    },

    arrayPay() {
      return [
        this.warehouse.warehousePay,
        this.purchase.purchasePay,
        this.proposals.proposalsPay,
        this.orders.ordersPay,
        this.receipts.receiptsPay,
        this.invoices.invoicesPay,
        this.expenses.expensesPay,
      ];
    },
  },

  updated() {
    this.allCheckedManagement = !this.allManagementNotChecked;
    this.allView = !this.allViewOnlyChecked;
    this.allCreate = !this.allCreateChecked;
    this.allApprove = !this.allApproveChecked;
    this.allPay = !this.allPayChecked;
  },

  methods: {
    addAllView() {
      (this.warehouse.warehouseView = this.allView),
        (this.purchase.purchaseView = this.allView),
        (this.proposals.proposalsView = this.allView),
        (this.orders.ordersView = this.allView),
        (this.receipts.receiptsView = this.allView),
        (this.invoices.invoicesView = this.allView),
        (this.expenses.expensesView = this.allView);
    },

    addAllCreate() {
      (this.warehouse.warehouseCreate = this.allCreate),
        (this.purchase.purchaseCreate = this.allCreate),
        (this.proposals.proposalsCreate = this.allCreate),
        (this.orders.ordersCreate = this.allCreate),
        (this.receipts.receiptsCreate = this.allCreate),
        (this.invoices.invoicesCreate = this.allCreate),
        (this.expenses.expensesCreate = this.allCreate);
    },

    addAllApprove() {
      (this.warehouse.warehouseApprove = this.allApprove),
        (this.purchase.purchaseApprove = this.allApprove),
        (this.proposals.proposalsApprove = this.allApprove),
        (this.orders.ordersApprove = this.allApprove),
        (this.receipts.receiptsApprove = this.allApprove),
        (this.invoices.invoicesApprove = this.allApprove),
        (this.expenses.expensesApprove = this.allApprove);
    },

    addAllPay() {
      (this.warehouse.warehousePay = this.allPay),
        (this.purchase.purchasePay = this.allPay),
        (this.proposals.proposalsPay = this.allPay),
        (this.orders.ordersPay = this.allPay),
        (this.receipts.receiptsPay = this.allPay),
        (this.invoices.invoicesPay = this.allPay),
        (this.expenses.expensesPay = this.allPay);
    },

    addAllManagement() {
      (this.management.configuration = this.allCheckedManagement),
        (this.management.suppliers = this.allCheckedManagement),
        (this.management.budgets = this.allCheckedManagement),
        (this.management.warehouse = this.allCheckedManagement),
        (this.management.reports = this.allCheckedManagement);
    },

    addUserRoles() {
      let role = [];

      let view = role.indexOf("View Only");
      let create = role.indexOf("Create");
      let approve = role.indexOf("Approve");
      let pay = role.indexOf("Pay");
      let fullAccess = role.indexOf("Full Access");

      switch (true) {
        case this.allViewOnlyNotChecked:
          role.push("View Only");
        case !this.allViewOnlyNotChecked:
          role.splice(view, 0);
      }

      switch (true) {
        case this.allCreateNotChecked:
          role.push("Create");
        case !this.allCreateNotChecked:
          role.splice(create, 0);
      }

      switch (true) {
        case this.allApproveNotChecked:
          role.push("Approve");
        case !this.allApproveNotChecked:
          role.splice(approve, 0);
      }

      switch (true) {
        case this.allPayNotChecked:
          role.push("Pay");
        case !this.allPayNotChecked:
          role.splice(pay, 0);
      }

      switch (true) {
        case this.fullAccess:
          role.push("Full Access");
        case !this.fullAccess:
          role.splice(fullAccess, 0);
      }

      return role.join(", ");
    },
  },
};
</script>

<style lang="scss">
.user-role {
  .subtitle {
    text-align: center;
  }

  .v-expansion-panel-content__wrap {
    display: flex;
  }

  .user-role__wrap {
    flex: 0 1 70%;
  }

  .ml-0 {
    text-align: left;
  }

  .input-column-checkbox {
    max-width: 75px;
    padding-left: 6px;

    &.second {
      max-width: inherit;
    }
  }

  .v-input__slot {
    justify-content: center;
  }
}

.subtitle-image {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 3px !important;
}

.full-access {
  margin-top: 31px !important;
}

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
  white-space: nowrap;
}

.column-subtitle {
  max-width: 170px !important;
  margin-right: 57px;
  white-space: nowrap;
}
</style>
