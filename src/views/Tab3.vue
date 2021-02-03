<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Counter</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Counter</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="app-42">
        <p id="num">Number</p>
        <button v-on:click="push">Change color</button>
      </div>

    </ion-content>
  </ion-page>
</template>

<style>
#app-42 {
  text-align: center;
  font-size: 3em;
}

#app-42 button {
  background-color: #F7931E; /* Orange */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>

<script lang="js">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

let count = 0;

export default  {
  name: 'Counter',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  el: '#app-42',
  methods: {
    push: function () {
      count += 1 ;
      document.getElementById("num").innerHTML = count;    }
  }
}
</script>
