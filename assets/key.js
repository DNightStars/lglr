let keys = {
    "U2FsdGVkX1+": "1.jpg"
}

document.getElementById("submit").addEventListener("click", () => {
    let url = keys[document.getElementById("key").value];
    if (url != undefined) {
        document.getElementById("img").src = "./assets/img/" + keys[document.getElementById("key").value];
    }
})
