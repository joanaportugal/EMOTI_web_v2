<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>


<style>
@font-face {
  font-family: "EAmbit Regular";
  src: local("EAmbit Regular"),
   url(./font/Ambit-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "EAmbit SemiBold";
  src: local("EAmbit SemiBold"),
   url(./font/Ambit-SemiBold.ttf) format("truetype");
}
@font-face{
   font-family: "BalooEmoti";
  src: local("BalooEmoti"),
   url(./font/static/BalooBhaijaan2-ExtraBold.ttf) format("truetype");
}

#app {
  background-color:#FDFDF3;
  font-family: EAmbit Regular;
  user-select: none;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  background-color:#fdfdf3
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #D9D9D5;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #BFBFBF;
  border-radius: 20px;
}

</style>
