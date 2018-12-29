<template>
  <div class="container">
    <section class="section">
      <div class="container">
        <h1 class="title">Sign Up</h1>
        <h2 class="subtitle">Please provide your basic profile info.</h2>
      </div>
    </section>
    <section class="section">
      <form novalidate @submit="submitForm">
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
              />
            </div>
            <p class="help is-danger" v-if="!item.isValid">{{item.errorMessage}}</p>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" type="submit">Sign up</button>
          </div>
          <div class="control">
            <router-link to="/sign-up">
              <button class="button is-light" type="button">Sign in</button>
            </router-link>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { validateFormData, extractFormData } from '@/helpers/validation/form';

export default {
  data() {
    return {
      form: {
        fields: [
          {
            name: 'firstName',
            label: 'First Name',
            value: '',
            isValid: true,
            type: 'text',
            pattern: 'required',
            errorMessage: 'This field is required.',
          },
          {
            name: 'lastName',
            label: 'Last Name',
            value: '',
            isValid: true,
            pattern: 'required',
            type: 'text',
            errorMessage: 'This field is required.',
          },
          {
            name: 'email',
            label: 'Your email',
            value: '',
            isValid: true,
            pattern: 'email',
            type: 'email',
            errorMessage: 'The given email is invalid.',
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
          {
            name: 'confirmPassword',
            label: 'Confirm Password',
            value: '',
            isValid: true,
            pattern: 'confirm',
            type: 'password',
            errorMessage: 'The given password is not matched',
            callback(value, form) {
              if (!form.fields) {
                return false;
              }
              const passwordField = form.fields.find(
                field => field.name === 'password',
              );
              if (!passwordField) {
                return false;
              }
              return value === passwordField.value;
            },
          },
        ],
        formValidation: true,
      },
    };
  },
  computed: mapState({
    isError: state => state.auth.isSignUpError,
  }),
  methods: {
    ...mapActions({
      signUpAction: 'auth/signUp',
    }),
    async submitForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
        const isUserCreated = await this.signUp();
        if (isUserCreated) {
          this.$router.push('/sign-in');
        }
      }
    },
    signUp() {
      const formData = extractFormData(this.form.fields);
      return this.signUpAction(formData);
    },
    validateForm() {
      this.form.formValidation = validateFormData(this.form);
      return this.form.formValidation;
    },
  },
};
</script>
