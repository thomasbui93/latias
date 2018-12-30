<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <h1 class="title">Sign in</h1>
        <h2
          class="subtitle"
        >Please provide your email and password to start managing your applications.</h2>
      </div>
    </section>
    <section class="section">
      <form novalidate @submit="submitForm">
        <div class="field" v-if="isError">
          <p>Failed to authenticate your credential. Please try with correct information again.</p>
        </div>
        <div class="field" v-if="!form.formValidation">
          <p>Your information is invalid. Please check your information.</p>
        </div>
        <div class="field" v-for="(field, index) in form.fields" :key="index">
          <label class="label" v-bind:for="field.name">{{field.label}}</label>
          <div class="control">
            <input
              v-model="field.value"
              class="input"
              v-bind:type="field.type"
              v-bind:placeholder="field.placeholder"
              v-bind:id="field.name"
            >
          </div>
          <p class="help is-danger" v-if="!field.isValid">{{field.errorMessage}}</p>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" :disabled="isSigningIn" type="submit">Sign in</button>
          </div>
          <div class="control">
            <router-link to="/sign-up">
              <button class="button is-light" type="link">Sign up</button>
            </router-link>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { validateFormData, extractFormData } from '@/helpers/validation/form';

export default {
  data() {
    return {
      form: {
        fields: [
          {
            name: 'email',
            label: 'Your email',
            value: '',
            isValid: true,
            type: 'text',
            pattern: 'email',
            errorMessage: 'Given email is invalid.',
          },
          {
            name: 'password',
            label: 'Password',
            value: '',
            isValid: true,
            pattern: 'required',
            type: 'password',
            errorMessage: 'This is a required field.',
          },
        ],
        formValidation: true,
      },
    };
  },
  computed: mapState({
    isError: state => state.auth.isSignInError,
    isSigningIn: state => state.auth.isRequestingAuthentication,
  }),
  methods: {
    ...mapActions({
      signInAction: 'auth/signIn',
      authenticate: 'authenticate',
    }),
    async submitForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
        const isAuthenticated = await this.signIn();
        this.authenticate(isAuthenticated);
        if (isAuthenticated) {
          this.$router.push('/');
        }
      }
    },
    signIn() {
      const formData = extractFormData(this.form.fields);
      return this.signInAction(formData);
    },
    validateForm() {
      this.form.formValidation = validateFormData(this.form);
      return this.form.formValidation;
    },
  },
};
</script>
