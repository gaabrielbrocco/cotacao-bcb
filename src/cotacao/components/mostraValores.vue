<template>
  <v-container>
    <v-row class="d-flex justify-center mt-1" cols="6" sm="7" md="6" lg="3">
      <v-col>
        <v-col>
          <v-title class="d-flex justify-center mb-3 text-h6"
            >Data/Horário da cotação</v-title
          >
          <v-text-field
            base-color="green"
            color="green"
            focused
            hide-details
            readonly
            v-model="controller.modelCotacao.value.dataHoraCotacao"
          >
            <template v-slot:append>
              <v-tooltip location="bottom">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props"> mdi-information </v-icon>
                </template>
                <span>Data e Horário da requisição.</span>
              </v-tooltip>
            </template>
          </v-text-field>
        </v-col>
        <v-col>
          <v-title class="d-flex justify-center mb-3 text-h6"
            >Cotação de compra atual</v-title
          >
          <v-text-field
            base-color="green"
            color="green"
            focused
            hide-details
            readonly
            v-model="controller.modelCotacao.value.cotacaoCompra"
          >
            <template v-slot:append>
              <v-tooltip location="bottom">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props"> mdi-information </v-icon>
                </template>
                <span>Valor atual de compra da moeda selecionada.</span>
              </v-tooltip>
            </template>
          </v-text-field>
        </v-col>
        <v-col>
          <v-title class="d-flex justify-center mb-3 text-h6"
            >Cotação de venda atual</v-title
          >
          <v-text-field
            base-color="green"
            color="green"
            focused
            hide-details
            readonly
            v-model="controller.modelCotacao.value.cotacaoVenda"
          >
            <template v-slot:append>
              <v-tooltip text="buon giorno" location="bottom">
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props"> mdi-information </v-icon>
                </template>
                <span>Valor atual de venda da moeda selecionada. </span>
              </v-tooltip>
            </template>
          </v-text-field>
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
