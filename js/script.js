//detecting button press
var openBtn = document.querySelectorAll(".open-btn").length;
for(i=0; i < openBtn; i++){
    document.querySelectorAll(".open-btn")[i].addEventListener('click', function(e){
        modal.classList.add('show');
    })
}

const modal = document.querySelector("#modal_container");
const close = document.querySelector("#close");



close.addEventListener('click', ()=>{
    modal.classList.remove('show');
})

// Change hamburger by x when clicked
var checkBtn = document.querySelector(".checkbtn");
var icon = document.querySelector("#check");

checkBtn.addEventListener('click', function(e){
    console.log(e);
    console.log(icon.checked);
    var image = document.querySelector(".switchIcon");
    if(icon.checked){
        image.src = "images/icon-hamburger.svg";
    }else{
        image.src = "images/icon-close-menu.svg";
    }
});



// Radio Button on Modal
var radios = document.querySelectorAll(".myRadio");
// console.log(radios);
var RadNumber = document.querySelectorAll(".myRadio").length;

radios.forEach(function(radio){
    var parent = radio.parentElement.parentElement.parentElement;
    
    radio.addEventListener('click', function(e){
        var footer2 = document.querySelector("#box2").parentElement.parentElement.parentElement.children[2];
        var footer3 = document.querySelector("#box3").parentElement.parentElement.parentElement.children[2];
        var footer4 = document.querySelector("#box4").parentElement.parentElement.parentElement.children[2];
        var id = this.getAttribute("id");
        console.log(id);
        if(id == 'box1'){
            this.parentElement.parentElement.parentElement.classList.add("outline");
            document.querySelector("#box2").parentElement.parentElement.parentElement.classList.remove("outline");
            document.querySelector("#box3").parentElement.parentElement.parentElement.classList.remove("outline");
            document.querySelector("#box4").parentElement.parentElement.parentElement.classList.remove("outline");

          
                setTimeout(() => {
                    footer2.classList.add("modal-footer-box");
                    footer3.classList.add("modal-footer-box");
                }, 10);
            
        }
        if(id == 'box2'){
             this.parentElement.parentElement.parentElement.classList.add("outline");
             
            document.querySelector("#box1").parentElement.parentElement.parentElement.classList.remove("outline");
            document.querySelector("#box3").parentElement.parentElement.parentElement.classList.remove("outline");
            document.querySelector("#box4").parentElement.parentElement.parentElement.classList.remove("outline");
            
            if(this.parentElement.parentElement.parentElement.children[2].classList.contains("modal-footer-box")){
                this.parentElement.parentElement.parentElement.children[2].classList.remove("modal-footer-box");
                setTimeout(() => {
                    footer3.classList.add("modal-footer-box");
                    footer4.classList.add("modal-footer-box");
                }, 10);
            }
            
        }
        if(id == 'box3'){
             this.parentElement.parentElement.parentElement.classList.add("outline");
            
            document.querySelector("#box1").parentElement.parentElement.parentElement.classList.remove("outline");
            document.querySelector("#box2").parentElement.parentElement.parentElement.classList.remove("outline");
            document.querySelector("#box4").parentElement.parentElement.parentElement.classList.remove("outline");
            
            if(this.parentElement.parentElement.parentElement.children[2].classList.contains("modal-footer-box")){
                this.parentElement.parentElement.parentElement.children[2].classList.remove("modal-footer-box");
                setTimeout(() => {
                    footer2.classList.add("modal-footer-box");
                    footer4.classList.add("modal-footer-box");
                }, 10);
            }

        }
        if(id == 'box4'){
             this.parentElement.parentElement.parentElement.classList.add("outline");
            document.querySelector("#box1").parentElement.parentElement.parentElement.classList.remove("outline");
            document.querySelector("#box2").parentElement.parentElement.parentElement.classList.remove("outline");
            document.querySelector("#box3").parentElement.parentElement.parentElement.classList.remove("outline");
        
            setTimeout(() => {
                footer2.classList.add("modal-footer-box");
                footer3.classList.add("modal-footer-box");
            }, 10);

        }
    });
});

//Display thank you modal
var buttonMD = document.querySelectorAll(".continue-to-modal");
var buttonMDClose = document.querySelector("#close-modal");
var containerMD = document.querySelector("#modal-external-container");
buttonMD.forEach(function(btnMD){
    btnMD.addEventListener('click', function(){
        console.log(containerMD);
        containerMD.classList.add("showModal");
        modal.classList.remove('show');
    })
});

buttonMDClose.addEventListener('click', function(){
    containerMD.classList.remove("showModal");
})



    

    

       

    


