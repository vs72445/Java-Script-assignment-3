function generateCard() {
    // console.log("debug");
    const Name = document.getElementById("inname").value;
    const College = document.getElementById("incollege").value;
    const Branch = document.getElementById("inbranch").value;
    const Roll = document.getElementById("inroll").value;

    document.getElementById("name").textContent = Name;
    document.getElementById("college").textContent = College;
    document.getElementById("branch").textContent = Branch;
    document.getElementById("roll").textContent = Roll;
}


function loadImage(event){
const image = document.getElementById("imgDisplayed");
image.src = URL.createObjectURL(event.target.files[0])
}
loadImage();