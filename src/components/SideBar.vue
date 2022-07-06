<template>
  <div>
    <div id="sideBar">
       <b-img src="../assets/Grupo 440.png" fluid alt="Fluid image" style="width:95%"></b-img>
       <div style="margin-top:5px;margin-bottom:5px;background-color:red;" id="items">
          <b-img src="../assets/Imagem 1.png" fluid alt="Fluid image" style="width:27%;margin-top:10px;margin-bottom:10px;margin-left:8px;"></b-img>
          <div style="d">
            <p>Joana Portugal</p>
            <p>Criança</p>
          </div>
          <b-img src="../assets/1f44b.png" fluid alt="Fluid image" style="width:15%;"></b-img>
       </div>
       <ul>
        <li style="margin-bottom:10px;"><span class="material-icons-round" style="padding-right:5px;">home</span><router-link to="#"> Página Principal</router-link></li>
        <li style="margin-bottom:10px;"><span class="material-icons-round" style="padding-right:5px;">home</span><router-link to="#"> Atividades</router-link></li>
        <li style="margin-bottom:10px;"><span class="material-icons-round" style="padding-right:5px;">home</span><router-link to="#"> Perfil</router-link></li>
        <li style="margin-bottom:10px;"><span class="material-icons-round" style="padding-right:5px;">home</span><router-link to="#"> Escola Virtual</router-link></li>
        <li style="margin-bottom:10px;"><span class="material-icons-round" style="padding-right:5px;">home</span><router-link to="#"> Atividades Extras</router-link></li>
       </ul>
       <button id="logout"><span class="material-icons-round" style="padding-right:5px;">home</span> Terminar Sessão</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sideBar{
  width:15vw;
  height:100vh;
  background-color:#FDFDF3;
  border-right: 1px solid #707070 ;
}
li{
  display: flex;
  flex-direction: row;
  align-items:center;
}
#logout{
  display: flex;
  align-items: center;
  background-color:#F5F5EB;
  border:none;
  border-radius:8px;
  color:#E87461;
}

#items{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
