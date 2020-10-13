function initAccordion(accordionElem){

  /* Al expanded panel que es el div que cubre todo si no es null se le remueve el active y al panel que es el div actual se le agrega el active*/ 

  function showPanel(panel){
      let expandedPanel = accordionElem.querySelector(".active");
      if (expandedPanel){
        expandedPanel.classList.remove("active");
      }else{
        panel.classList.add("active");
      }
  }
  let allPanelElems = accordionElem.querySelectorAll(".panel");
  for (let i = 0; i < allPanelElems.length; i++){
    allPanelElems[i].addEventListener("click", (event) => {
      showPanel(event.currentTarget);
    });
  }
}

initAccordion(document.getElementById("accordion"));

