<template>
  <v-container>
    <v-row justify="center" class="fill-height py-15 my-15" align="center">
      <v-col cols="12" sm="12" md="6" lg="7">
        <div justify="center" align="center" class="text-h3">
          Cotações de Moeda
        </div>
        <div justify="center" align="center" class="mb-10 mt-2">
          Consulta dos dados via API do Banco Central
        </div>
        <v-form @submit.prevent="controller.buscaDados()">
          <v-row class="d-flex justify-center">
            <v-col cols="12" lg="5">
              <v-select
                v-model="controller.moedaSelecionada.value"
                label="Selecione a moeda"
                color="green"
                base-color="green"
                focused
                :item-title="
                  (item) => `${item.simbolo} - ${item.nomeFormatado}`
                "
                item-value="simbolo"
                :items="controller.moedas.value"
                variant="outlined"
                @update:model-value="controller.limpaCampos"
              ></v-select>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-center mb-2">
            <v-col cols="12" lg="5">
              <v-text-field
                v-model="controller.dataSelecionada.value"
                label="Digite a data"
                v-maska:[formataData]
                color="green"
                base-color="green"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>

          <div class="d-flex justify-center">
            <v-btn
              size="large"
              text="Buscar"
              color="green"
              @click="controller.buscaDados()"
            >
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <mostra-valores :controller="controller" />
      </v-col>
    </v-row>

    <v-footer class="fluid mt-15 text-center d-flex flex-column">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon.icon"
          class="mx-4"
          variant="text"
          :href="icon.link"
          target="_blank"
        ></v-btn>
      </div>

      <div class="pt-0 mb-4">
        Aplicação desenvolvida para buscar cotações de moedas internacionais
        integrado com o Banco Central do Brasil.
        <br />
        Linguagens e Frameworks utilizados: Vue 3, JavaScript, Vuetify, Echarts.
      </div>

      <v-divider></v-divider>

      <div>
        {{ new Date().getFullYear() }} —
        <strong
          >Cotação Moeda <span>&copy</span> - Gabriel Brocco de Oliveira</strong
        >
      </div>
    </v-footer>
  </v-container>
</template>

<script setup>
import MostraValores from "./mostraValores.vue";

const icons = [
  {
    icon: "mdi-gmail",
    link: "mailto:gabsbrocco@gmail.com",
  },
  {
    icon: "fa:fas fa-brands fa-x-twitter",
    link: "https://x.com/gaabrielbrocco",
  },
  {
    icon: "mdi-linkedin",
    link: "https://linkedin.com/in/gabrielbrocco",
  },
  {
    icon: "mdi-instagram",
    link: "https://instagram.com/gaabrielbrocco",
  },
];

const formataData = {
  mask: "##/##/####",
};

const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
