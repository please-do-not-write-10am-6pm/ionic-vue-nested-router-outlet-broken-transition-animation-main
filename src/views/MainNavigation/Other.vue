<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button />
        </ion-buttons>
        <ion-title>Other</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <ion-button router-link="/main" router-direction="back">
        Back To Another Main View
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonBackButton } from '@ionic/vue';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'Folder',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonBackButton
  }
})
</script>

<style scoped>
</style>