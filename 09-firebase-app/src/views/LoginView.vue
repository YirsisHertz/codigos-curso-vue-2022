<template>

<h1>Login Page</h1>

<button @click="auth.loginWithGoogle()" >SignIn With Google</button>
<button @click="auth.loginWithFacebook()" >SignIn With Facebook</button>

</template>

<script setup>

import {authStore} from "../stores/auth"

const auth = authStore()

</script>
