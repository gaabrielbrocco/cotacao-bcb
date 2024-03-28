import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { pt } from "vuetify/locale";

import { createVuetify } from "vuetify";

export default createVuetify({
  locale: {
    locale: "pt",
    fallback: "pt",
    messages: { pt },
  },
  theme: {
    defaultTheme: "dark",
  },
});
