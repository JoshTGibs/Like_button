var likes = [9, 12, 9];
var spans = [document.querySelector("#neil"), document.querySelector("#nichole"), document.querySelector("#jim")];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)"
}