import { initSettingsForm } from "./modules/settings-form.js";

document.addEventListener("DOMContentLoaded", () => {
    initSettingsForm(document.querySelector("#settings-form"));
});