import { Header } from "../../components/molecules/header.js";

const header = document.getElementById("header-container");
header.innerHTML = Header({
  company: "<h1>Rentiq</h1>",
});
