<template>
  <div class="d-flex align-center justify-center">
    <v-col cols="6" sm="3" md="6" lg="4">
      <v-text-field
        class="mr-2"
        label="Valor a ser convertido"
        base-color="green"
        color="green"
        hide-details
        @update:model-value="controller.converteValor"
        v-model.number="controller.valorDigitado.value"
        type="number"
      >
      </v-text-field>
    </v-col>
    <v-col cols="6" sm="3" md="6" lg="4">
      <div class="d-flex justify-center">
        <v-text-field
          base-color="green"
          color="green"
          hide-details
          v-model="controller.valorConvertido.value"
        >
          <template v-slot:append>
            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props"> mdi-information </v-icon>
              </template>
              <span
                >Valor convertido de acordo a cotação de compra do último
                fechamento PTAX.</span
              >
            </v-tooltip>
          </template>
        </v-text-field>
      </div>
    </v-col>
  </div>
  <v-row class="d-flex justify-center mt-10">
    <v-data-table
      :items-per-page="controller.itemsPorPagina.value"
      :headers="controller.colunasTabela.value"
      :items="controller.linhas.value"
      :items-length="controller.totalItens.value"
    ></v-data-table>
  </v-row>
  <div v-if="controller.mostraGrafico.value">
    <v-row class="d-flex justify-center mt-15 text-h5">
      Cotação de compra da mesma data nos últimos anos:
    </v-row>
  </div>
  <v-row>
    <div style="width: 100%; height: 300px" id="grafico"></div>
  </v-row>
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
