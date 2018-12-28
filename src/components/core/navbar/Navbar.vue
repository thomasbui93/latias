<template>
  <div class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        Latias
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
            <router-link to="/login">
              <a class="button is-primary">
                <strong>Sign in</strong>
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
