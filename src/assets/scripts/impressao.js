var modalInfo = {
    1: {
      title: "Projeto 1",
      info: "...",
    },
    2: {
      title: "Projeto 2",
      info: "...",
    },
    3: {
      title: "Projeto 3",
      info: "...",
    },
    4: {
      title: "Projeto 4",
      info: "....",
    },
    5: {
      title: "Projeto 5",
      info: "...",
    },
    6: {
      title: "Projeto 6",
      info: "...",
    }
  };
  
  // Get the modal
  var modal = document.getElementById('preview');
  
  // button that opens the modal
  var btn = document.getElementsByClassName("button-teste");
  
  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // open modal 
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].parentElement;
      openModal(project);
    })
  };
  
  function openModal(project){
    var id = project.id;
    var img = project.getElementsByTagName("img")[0].src;
    fillOut(id, img);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }
  
  function fillOut(id, img){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("img").src = img;
  }
  
  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }