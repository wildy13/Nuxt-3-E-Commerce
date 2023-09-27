<template>
  <div
    class="bg-gradient-to-r from-blue-400 to-indigo-600 min-h-screen flex justify-center items-center"
  >
    <div class="mx-4 w-96 lg:w-[500px] bg-white p-10 rounded-md">
      <div>
        <ErrorHandler v-if="errorMessage" :error="errorMessage" />
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
              <UInput v-model="state.username" placeholder="Username..." />
            </UFormGroup>
            <UFormGroup name="password" class="p-1">
              <div class="font-medium text-sm">password</div>
              <div>
                <div class="relative">
                  <UInput
                    id="password-input"
                    v-model="state.password"
                    :type="passwordVisible ? 'text' : 'password'"
                    placeholder="Password..."
                    color="white"
                    trailing
                  />
                  <UButton
                    size="xl"
                    color="white"
                    variant="link"
                    class="absolute inset-y-0 right-0 mt-1 mr-2"
                    @click="togglePasswordVisibility"
                  >
                    <UIcon
                      v-if="passwordVisible"
                      name="i-heroicons-eye"
                    ></UIcon>
                    <UIcon v-else name="i-heroicons-eye-slash"></UIcon>
                  </UButton>
                </div>
              </div>
            </UFormGroup>
            <div class="p-1 flex justify-between items-center">
              <UButton v-if="loading  ==  true" loading id="submit" type="submit" color="white"> Submit </UButton>              
              <UButton v-else type="submit" color="white"> Submit </UButton>
              <NuxtLink to="/">
                <div class="text-sm">Back to home?</div>
              </NuxtLink>
            </div>
            <div class="flex gap-1 text-xs sm:text-sm md:text-base lg:text-lg">
              <div>Don't have an account yet?</div>
              <nuxt-link to="/sign-up" class="underline underline-offset-1"
                >Sign up</nuxt-link
              >
              <span>now!</span>
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

const errorMessage = ref(null);
const loading = ref(false)
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
    loading.value = true;
    const { username, password } = state.value;
    await signIn('credentials', { username, password,  redirect: true });
  } catch (error) {
    errorMessage.value = error?.response._data.message; 
  }

  return navigateTo("/dashboard")
};
</script>
