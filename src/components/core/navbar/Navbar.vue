<template functional>
  <div class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link to="/" class="logo">Latias</router-link>
      </div>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end is-hidden-mobile">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/sign-in" v-if="!props.isAuthenticated">
              <a class="button is-primary">
                <strong>Sign in</strong>
              </a>
            </router-link>
            <router-link to="/logout" v-if="props.isAuthenticated">
              <a class="button is-primary">
                <strong>Logout</strong>
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
