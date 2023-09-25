<template>
    <div class="container mx-auto h-screen flex justify-center items-center">
      <div class="w-[75%] md:w-[25%]">
        <div>
          <div class="text-center text-2xl">Sign In</div>
          <div>
            <UForm
              ref="form"
              :state="state"
              :schema="schema"
            @submit.prevent="submit"
            >
              <UFormGroup name="username" class="p-1">
                <div class="font-medium text-sm">username</div>
                <UInput
                  v-model="state.username"
                  placeholder="Username..."
                  :ui="{color:{white:{outline:'bg-gray-900 text-white ring-gray-700 focus:ring-primary-400'}}}"
                />
              </UFormGroup>
              <UFormGroup  name="password" class="p-1">
                <div class="font-medium text-sm">password</div>
                <UInput
                  id="password-input"
                  v-model="state.password"
                  type="password"
                  placeholder="Password..."
                  color="white"
                  :ui="{color:{white:{outline:'bg-gray-900 text-white ring-gray-700 focus:ring-primary-400'}}}"
                  trailing
                />
                <UButton
                  size="xl"
                  color="white"
                  variant="link"
                  class="absolute inset-y-0 right-0 mt-1 mr-2"
                  @click="togglePasswordVisibility"
                >              
                  <UIcon v-if="passwordVisible" name="i-heroicons-eye"></UIcon>
                  <UIcon v-else name="i-heroicons-eye-slash"></UIcon>
                </UButton>
              </UFormGroup>
              <div class="p-1 flex justify-between items-center">
                <UButton  type="submit"> Submit </UButton>
                <NuxtLink to="/">
                  <div class="text-sm">Back to home?</div>
                </NuxtLink>
              </div>
            </UForm>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="js">
  import { ref } from 'vue'
  import * as Yup from 'yup';
  
  const { signIn } = useAuth();
  
  const schema = Yup.object().shape({
    password: Yup.string()
      .required('Required')
  });
  
  const form = ref();
  const state = ref({
    username: 'admin',
    password: 'admin'
  })
  
  const passwordVisible = ref(false);
  
  const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
    const passwordInput = document.querySelector("#password-input"); // Gantilah "password-input" dengan id input password Anda.
    if (passwordInput) {
      passwordInput.type = passwordVisible.value ? "text" : "password";
    }
  };
  
  const submit = async () => {
    try {
      await form.value?.validate();
  
      const { username, password } = state.value;
      await signIn('credentials', { username, password, callbackUrl: '/dashboard' });
    } catch (error) {
      console.log(error)
    }
  
    return null;
  };
  </script>
  
  