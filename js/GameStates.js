AFRAME.registerComponent("gameStates", {
  schema:{
    state:{type:"string",default:""}
  },
  tick: function () {
    this.changeGameState();
    const { state } = this.el.getAttribute('home')
  },
  changeGameState: function (state) {
    var forestB = document.querySelector("#forest-button")
    var cityB = document.querySelector("#city-button")
    var mountainB = document.querySelector("#mountain-button")
    var placesContainer = document.querySelector("#places-container")

    forestB.addEventListener("click", (evt) => {
      const { state } = placesContainer.getAttribute('home')
      if(state == 'start'){
        placesContainer.setAttribute('home',{
          state:'forest-state'
        })
      }
    })

  },
})