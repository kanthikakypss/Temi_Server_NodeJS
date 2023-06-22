(function connect() {
  let socket = io();

  let gofrontBtn = document.querySelector("#clickgofront");
  let goleftBtn = document.querySelector("#clickgoleft");
  let gorigtBtn = document.querySelector("#clickgoright");
  let gosaveaBtn = document.querySelector("#clickSaveA");
  let gosavebBtn = document.querySelector("#clickSaveB");
  let gospinBtn = document.querySelector("#clickSpin");
  let goplayBtn = document.querySelector("#clickPlay");
  let form = document.querySelector("#form");

  form.addEventListener("click",(e)=>{
    console.log("sadasdasdasd")
    socket.emit("chat message")
  })

  gofrontBtn.addEventListener("click",(e)=>{
    console.log("Front")
    socket.emit("robot_gofront")
  })
  goleftBtn.addEventListener("click",(e)=>{
    console.log("Left")
    socket.emit("robot_goleft")
  })
  gorigtBtn.addEventListener("click",(e)=>{
    console.log("Right")
    socket.emit("robot_goright")
  })
  gosaveaBtn.addEventListener("click",(e)=>{
    console.log("SaveA")
    socket.emit("robot_savea")
  })
  gosavebBtn.addEventListener("click",(e)=>{
    console.log("SaveB")
    socket.emit("robot_saveb")
  })
  gospinBtn.addEventListener("click",(e)=>{
    console.log("Spin")
    socket.emit("robot_spin")
  })
  goplayBtn.addEventListener("click",(e)=>{
    console.log("Play")
    socket.emit("robot_play")
  })

  socket.on("robot_gofront2",data=>{
    console.log("Gofront2")
  })

  socket.on("robot_goleft",data=>{
    console.log("GoLeft")
  })

})();
