function showMenu(){
    document.getElementById("sideBar").style.left="0";
    document.getElementById("close-btn").style.left="60px";
    document.getElementById("sideBar").style.pointerEvents="all";
    document.getElementById("header").style.pointerEvents="none";
    document.getElementById("header").style.filter="blur(2px)";
    document.getElementById("rodape").style.filter="blur(2px)";
}

function closeMenu() {
    document.getElementById("sideBar").style.left="-300px";
    document.getElementById("close-btn").style.left="-300x";
    document.getElementById("sideBar").style.pointerEvents="none";
    document.getElementById("header").style.pointerEvents="all";
    document.getElementById("header").style.filter="blur(0)";
    document.getElementById("header").style.filter="blur(0)";
}