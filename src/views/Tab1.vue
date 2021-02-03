<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Color</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Color</ion-title>
        </ion-toolbar>
      </ion-header>

      <!--Change color of a text from a button-->
      <div id="app-42">
        <p id="color">Rainbow</p>
        <button id="button" v-on:click="changeColor">Change color</button>
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

export default  {
  name: 'Color',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  el: '#app-42',
  methods: {
    changeColor: function () {
      document.getElementById("color").style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  }
}
</script>
