function saveLocal() {
    const value =
        document.getElementById("localInput").value;
    localStorage.setItem("myLocalData", value);

    alert("Saved to local storege ")
}

function showLocal() {
    const Saved = localStorage.getItem("myLocalData");

    document.getElementById("localResult").innerText = "saved Value:  " + Saved;
    
    
    

}