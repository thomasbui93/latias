<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <h1 class="title">Sign in</h1>
        <h2 
          class="subtitle">
          Please provide your email and password to start managing your applications.
        </h2>
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
        <div v-for="(item, index) in form.fields" :key="index">
          <div class="field">
            <label class="label" v-bind:for="item.name">{{item.label}}</label>
            <div class="control">
              <input
                v-model="item.value"
                class="input"
                v-bind:type="item.type"
                v-bind:placeholder="item.placeholder"
                v-bind:id="item.name"
              >
            </div>
            <p class="help is-danger" v-if="!item.isValid">{{item.errorMessage}}</p>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" type="submit">Sign in</button>
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
import { validateFormData } from '@/helpers/validation/form';

export default {
  data() {
    return {
      form: {
        fields: [
          {
            name: 'Email',
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
            pattern: 'password',
            type: 'password',
            errorMessage: 'The given password is too weak.',
          },
        ],
        formValidation: true,
      },
    };
  },
  computed: mapState({
    isError: state => state.auth.isError,
  }),
  methods: {
    ...mapActions({
      signInAction: 'auth/signIn',
    }),
    async submitForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
        const isAuthenticated = await this.signIn();
        if (isAuthenticated) {
          this.$router.push('/home');
        }
      }
    },
    signIn() {
      this.signInAction(this.form.email.value, this.form.password.value);
    },
    validateForm() {
      this.form.formValidation = validateFormData(this.form);
      return this.form.formValidation;
    },
  },
};
</script>
