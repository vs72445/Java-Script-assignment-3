// function to print the user given values in the card...onClick... 
function generateCard() {

    // getting the values from the user...
    const Name = document.getElementById("inname").value;
    const College = document.getElementById("incollege").value;
    const Branch = document.getElementById("inbranch").value;
    const Roll = document.getElementById("inroll").value;

    // printing the user values in the card... 
    document.getElementById("name").textContent = Name;
    document.getElementById("college").textContent = College;
    document.getElementById("branch").textContent = Branch;
    document.getElementById("roll").textContent = Roll;

}

// function to load the image to the card...onChange...
function loadImage(event){
const image = document.getElementById("imgDisplayed");
image.src = URL.createObjectURL(event.target.files[0])
}