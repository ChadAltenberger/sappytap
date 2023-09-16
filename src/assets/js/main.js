/* ========================= NPM ======================== */
// jQuery
// import "./base/jquery-global.js";

// Popper.js (* tooltip, popover, dropdown)
// import * as Popper from "@popperjs/core";

// Use following imports only where needed (not globally)
// Bootstrap modules (add as needed)
// import "bootstrap/js/dist/collapse";

// Glidejs
// import Glide from "@glidejs/glide";
// window.Glide = Glide;

/* ======================== BASE ======================== */
import { globalVariables as vars } from "./base/global-variables.js";

import ie10 from "./base/ie10-viewport-bug-workaround.js";
ie10();

import modernizrInit from "./base/modernizr-webp.js";
modernizrInit();

/* ===================== COMPONENTS ===================== */
import currentYear from "./components/current-year.js";
currentYear();

import ehElementsInit from "./components/eh-elements.js";
ehElementsInit();

import stickySideInit from "./components/sticky-sides.js";
// stickySideInit();

/* ======================== PAGES ======================= */
import indexInit from "./pages/index.js";
vars.pageId === "mainIndex" && indexInit();
