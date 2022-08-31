<template>
  <div class="home p-0">
    <video autoplay class="feed" v-if="see=='Camera' && showCamera==true"></video>
    <div v-if="see=='Camera' && showCamera==false" class="loading d-flex flex-row justify-content-center align-items-center">
        <h4>A carregar...</h4>
    </div>
    <div class="col-12 d-flex flex-row align-items-center justify-content-center mt-4 mb-2" v-if="see=='Button'">
        <b-button @click="checkEmotion()" :style="{backgroundColor:'#e87461',color:'#fdfdf3',border:'none',fontFamily:'EAmbit SemiBold'}" class="d-flex flex-row align-items-center" size="lg"><span class="material-icons-round" :style="{fontSize:'30px',paddingRight:'5px'}">photo_camera</span> Tirar Foto</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as faceapi from "face-api.js";

export default {
  name: "HomeView",
   props: {
    messageAPI: String,
    see:String
  },
  data() {
    return {
      showCamera:false
    };
  },

  methods: {
     async init() {
      if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({video:true}).then(stream=>{
          const videoPlayer=document.querySelector("video");
          videoPlayer.srcObject=stream;
          videoPlayer.play();
        })
      }
      else{
        alert('Cannot get mediaDevices')
      }
    
    },
    async initIA(){
     await faceapi.nets.tinyFaceDetector.loadFromUri('./models')
     await faceapi.nets.faceLandmark68Net.loadFromUri('./models')
     await faceapi.nets.faceRecognitionNet.loadFromUri('../models')
     await faceapi.nets.faceExpressionNet.loadFromUri('./models')
    },
    async checkEmotion(){
      const video=document.querySelector("video")
      
        const detections=await faceapi.detectAllFaces(video,new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        if (detections.length==0){
          this.$emit('changeMessage','A câmera mão te detetou');
        }
        else{
          let result=Object.keys(detections[0].expressions).reduce(function(a, b){ return detections[0].expressions[a] > detections[0].expressions[b] ? a : b })
          this.$emit('changeMessage',result);
        }
  
      
    }
  },
  beforeMount () {
    this.initIA().then(()=>{
      this.init();
    })
  }
};
</script>

<style scoped>
video {
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg); /* Safari and Chrome */
  -moz-transform: rotateY(180deg); /* Firefox */
  border-radius: 5px;
  width:475px;
}
/*this.$emit('changeMessage',result);*/
.loading{
  min-width: 475px;
  min-height: 356px;
  border-radius: 5px;
  background-color:#e87361e7;
  color:white;
}


</style>