const botaoTrailer = document.querySelector(".butao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
console.log(video.src);
const linkDoVideo = video.src

function alternarModal(){
    modal.classList.add("aberto")

}


console.log(document.querySelector(".butao-trailer"));
console.log(' mostrar o document', document);



botaoTrailer.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", linkDoVideo)
})


console.log('modal', modal);


const butaoFecharModal = document.querySelector(".fechar-modal");

    butaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});

