<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Main</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <ion-button router-link="/submodule" router-direction="forward">
        Forward To Sub Module (forward animation)
      </ion-button>

      <ion-button router-link="/other" router-direction="forward">
        Forward To Another Main View
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'Folder',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  }
})
</script>

<style scoped>
</style>