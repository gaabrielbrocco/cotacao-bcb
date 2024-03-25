<template>
  <v-container>
    <v-row class="d-flex justify-center mt-1" cols="6" sm="7" md="6" lg="3">
      <v-col>
        <v-col cols="12">
          <div class="d-flex">
            <v-text-field
              class="mr-5"
              label="Valor a ser convertido"
              base-color="green"
              color="green"
              hide-details
            >
            </v-text-field>
            <v-text-field base-color="green" color="green" hide-details>
              <template v-slot:append>
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <v-icon v-bind="props"> mdi-information </v-icon>
                  </template>
                  <span>Valor convertido de acordo com o último fechamento.</span>
                </v-tooltip>
              </template>
            </v-text-field>
          </div>
        </v-col>
        
        <v-row class="d-flex justify-center mt-15">
          <v-data-table-server
            v-model:items-per-page="controller.itemsPorPagina.value"
            :headers="controller.colunasTabela.value"
            :items="controller.linhas.value"
            :items-length="controller.totalItens.value"
          ></v-data-table-server>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
