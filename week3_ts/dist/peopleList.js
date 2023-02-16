export function renderPeopleList(container, people) {
    people.map((person) => {
        const div = document.createElement("div");
        container.appendChild(div);
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        div.appendChild(h2);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        h2.innerText = person.name;
        p1.innerText = person.occupation;
        p2.innerText = person.age.toString();
        p3.innerText = person.private_salary.toString();
        h2.className = "person_name";
        p1.className = "person_occupiation";
        p2.className = "person_age";
        p2.className = "person_salary";
    });
}
export default renderPeopleList;
