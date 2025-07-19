import { createApp } from "vue";
import App from "./App.vue";

import "./assets/theme.css";
import "./assets/base.css";
import "./assets/components.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faRightFromBracket,
  faEye,
  faEyeSlash,
  faCircleChevronDown,
  faEarthAmericas,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faRightFromBracket,
  faEye,
  faEyeSlash,
  faCircleChevronDown,
  faEarthAmericas,
  faBars
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
