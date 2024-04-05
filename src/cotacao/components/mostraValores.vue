<template>
  <div class="d-flex justify-center">
    <v-col cols="6" sm="3" md="6" lg="4">
      <div class="d-flex justify-center">
        <v-text-field
          class="mr-2"
          label="Valor a ser convertido:"
          base-color="primary"
          color="primary"
          hide-details
          @update:model-value="controller.converteValor"
          v-model.number="controller.valorDigitado.value"
          type="number"
          variant="underlined"
        >
          <template v-slot:append-inner>
            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props"> mdi-information </v-icon>
              </template>
              <span
                >Digite o valor que deseja converter baseado na moeda
                selecionada.</span
              >
            </v-tooltip>
          </template>
        </v-text-field>
      </div>
    </v-col>
    <v-col cols="6" sm="3" md="6" lg="4">
      <div class="d-flex justify-center">
        <v-text-field
          base-color="primary"
          color="primary"
          hide-details
          v-model="controller.valorConvertido.value"
          readonly
          variant="underlined"
        >
          <template v-slot:append-inner>
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
  <div v-show="controller.mostraGrafico.value">
    <v-row class="d-flex justify-center mt-10 text-h5">
      Cotação de compra da mesma data nos últimos anos:
    </v-row>
    <v-row class="d-flex justify-center mt-10">
      <v-item-group v-model="controller.tipoCard.value" class="px-5">
        <v-item v-slot:default="{ isSelected, toggle }">
          <v-btn
            class="mr-2"
            :color="isSelected ? '#FB8C00' : '#354565'"
            variant="elevated"
            icon
            large
            @click="controller.change(toggle)"
          >
            <v-icon>mdi-chart-areaspline</v-icon>
          </v-btn>
        </v-item>

        <v-item v-slot:default="{ isSelected, toggle }">
          <v-btn
            class="ml-2"
            :color="isSelected ? '#FB8C00' : '#354565'"
            variant="elevated"
            icon
            large
            @click="controller.change(toggle)"
          >
            <v-icon>mdi-chart-bar-stacked</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
    </v-row>
    <v-row class="mb-7" v-show="controller.tipoCard.value === 0">
      <div style="width: 100%; height: 300px" id="line"></div>
    </v-row>
    <v-row class="mb-7" v-show="controller.tipoCard.value === 1">
      <div style="width: 100%; height: 300px" id="bar"></div>
    </v-row>
  </div>
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
