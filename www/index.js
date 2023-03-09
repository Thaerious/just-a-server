console.log("index.js");
window.addEventListener("load", () => {
    console.log("index.js on load");
    const verifyForm = document.querySelector("#verify_form");

    verifyForm.addEventListener("submit", async e => {
        e.preventDefault();
        const res = await fetch("/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                token: document.querySelector("#jwt_token").value
            })
        });
    });
});
