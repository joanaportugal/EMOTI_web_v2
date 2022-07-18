<template>
  <div>
    <div id="sideBar" class="px-2 d-flex flex-column align-items-center justify-content-between">

      <div>
         <b-img src="../assets/Grupo 440.png" fluid alt="Fluid image" style="width:95%" class="mt-2"></b-img>
         <div style="margin-top:20px;margin-bottom:20px;background-color:#F5F5EB;" id="items" class="rounded">
          <b-img src="../assets/Imagem 1.png" fluid alt="Fluid image" style="width:27%;margin-top:10px;margin-bottom:10px;margin-left:8px;border-radius:10px"></b-img>
          <div class="px-2">
            <p style="font-weight:bold;">Joana Portugal</p>
            <p>Criança</p>
          </div>
          <b-img src="../assets/1f44b.png" fluid alt="Fluid image" style="width:15%;" class="m-2"></b-img>
       </div>
       <div style="width:100%">
        <ul class="d-flex flex-column justify-content-start m-0 p-0 col-12">
        <li class="mb-4"><router-link to="#"><span class="material-icons-round">home</span> Página Principal</router-link></li>
        <li class="mb-4"><router-link to="#"><span class="material-icons-round">sports_esports</span> Atividades</router-link></li>
        <li class="mb-4"><router-link to="#"><span class="material-icons-round">person</span> Perfil</router-link></li>
        <li class="mb-4"><router-link to="#"><span class="material-icons-round">school</span> Escola Virtual</router-link></li>
        <li class="mb-4"><router-link to="#"><span class="material-icons-round">square_foot</span> Atividades Extras</router-link></li>
       </ul>
       </div>
      </div>

      <div style="width:100%" class="d-flex justify-content-center">
         <button id="logout" class="mb-4 p-2 col-10" :style="{fontFamily:'EAmbit SemiBold'}"><span class="material-icons-round" style="padding-right:5px;">logout</span> Terminar Sessão</button>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sideBar{
  height:100vh;
  background-color:#FDFDF3;
  border-right: 1px solid #707070 ;
}
li{
  font-family: "EAmbit SemiBold";
  width: 100%;
  font-size: 19px;
  background-color:#FDFDF3;
  border-radius: 5px;
  padding:2%;
}

li:hover{
  background-color:#E87461;
}

li a {
  color: #bfbfbf;
  display: flex;
  flex:row;
  align-items: center;
  text-decoration: none;
}
li:hover a{
  color: #FDFDF3;
}

li a span{
  padding-right:10px;
  font-size: 30px;
}
#logout{
  display: flex;
  align-items: center;
  justify-content: center;
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

p {
  margin: 0;
  font-size: 14px;
}
</style>
