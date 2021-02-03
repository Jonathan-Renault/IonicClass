<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Color" href="/jon/Color">
          <ion-icon :icon="colorPalette" />
          <ion-label>Color</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="photo" href="/jon/photo">
          <ion-icon :icon="ellipse" />
          <ion-label>Photo</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="counter" href="/jon/counter">
          <ion-icon :icon="square" />
          <ion-label>Counter</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, colorPalette } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse, 
      square,
      colorPalette,
    }
  }
}
</script>
