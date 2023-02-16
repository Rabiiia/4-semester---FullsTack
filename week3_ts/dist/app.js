import getPeople from "./people.js";
import renderPeopleList from "./peopleList.js";
const container = document.getElementById("container");
getPeople()
    .then((people) => {
    renderPeopleList(container, people);
})
    .catch((error) => console.error(error));
