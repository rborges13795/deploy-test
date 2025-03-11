<script setup>
import { ref } from 'vue';

const fullName = ref('');
const email = ref('');
const acceptedPrivacyPolicy = ref(false);
const isSubmitting = ref(false);
const showSuccess = ref(false);
const showError = ref(false);
const errorMessage = ref('');

const submitNewsletter = async () => {
  if (!fullName.value || !email.value || !acceptedPrivacyPolicy.value) {
    errorMessage.value = 'Por favor, preencha todos os campos e aceite a política de privacidade.';
    showError.value = true;
    return;
  }

  try {
    isSubmitting.value = true;

    // Here you would add the actual API call to submit the newsletter subscription
    // For now, we'll just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    showSuccess.value = true;
    fullName.value = '';
    email.value = '';
    acceptedPrivacyPolicy.value = false;
  } catch (error) {
    errorMessage.value = 'Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente.';
    showError.value = true;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section class="newsletter">
    <div class="newsletter__container">
      <div class="newsletter__content">
        <h2 class="newsletter__title">Assine a nossa Newsletter</h2>
        <p class="newsletter__description">e fique por dentro das novidades</p>

        <form class="newsletter__form" @submit.prevent="submitNewsletter">
          <div class="newsletter__form-row">
            <div class="newsletter__form-group">
              <input
                type="text"
                class="newsletter__input"
                placeholder="Nome Completo"
                v-model="fullName"
                required
              >
            </div>

            <div class="newsletter__form-group">
              <input
                type="email"
                class="newsletter__input"
                placeholder="E-mail"
                v-model="email"
                required
              >
              <button
                type="submit"
                class="newsletter__submit"
                :disabled="isSubmitting"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="newsletter__form-checkbox">
            <label class="newsletter__checkbox-label">
              <input
                type="checkbox"
                class="newsletter__checkbox"
                v-model="acceptedPrivacyPolicy"
                required
              >
              <span class="newsletter__checkbox-custom"></span>
              <span class="newsletter__checkbox-text">
                Confirmo que li e concordo com a <a href="/politica-de-privacidade" class="newsletter__link">Política de Privacidade</a> e autorizo o tratamento dos meus dados pessoais para os fins nela descritos.
              </span>
            </label>
          </div>
        </form>

        <div v-if="showSuccess" class="newsletter__success">
          Obrigado por se inscrever em nossa newsletter!
        </div>

        <div v-if="showError" class="newsletter__error">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </section>
</template>
