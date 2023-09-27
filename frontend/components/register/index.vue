<template>
  <div
    class="bg-gradient-to-r from-blue-400 to-indigo-600 min-h-screen flex justify-center items-center"
  >
    <div class="mx-4 w-96 lg:w-[500px] bg-white p-10 rounded-md">
      <div>
        <ErrorHandler v-if="errorMessage" :error="errorMessage" />
        <div class="text-center text-2xl">Sign Up</div>
        <div>
          <UForm
            ref="form"
            :state="state"
            :schema="schema"
            @submit.prevent="submit"
          >
            <UFormGroup name="username" class="p-1">
              <div class="font-medium text-sm">Username</div>
              <UInput v-model="state.username" placeholder="Username..." />
            </UFormGroup>
            <UFormGroup name="password" class="p-1">
              <div class="font-medium text-sm">Password</div>
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
                  <UIcon v-if="passwordVisible" name="i-heroicons-eye"></UIcon>
                  <UIcon v-else name="i-heroicons-eye-slash"></UIcon>
                </UButton>
              </div>
            </UFormGroup>
            <UFormGroup name="password" class="p-1">
              <div class="font-medium text-sm">Confirm Password</div>
              <div class="relative">
                <UInput
                  id="confirm-password-input"
                  v-model="state.confPassword"
                  :type="passwordVisible ? 'text' : 'password'"
                  placeholder="Confirm Password..."
                  color="white"
                  trailing
                />
                <UButton
                  size="xl"
                  color="white"
                  variant="link"
                  class="absolute inset-y-0 right-0 mt-1 mr-2"
                  @click="toggleConfirmPasswordVisibility"
                >
                  <UIcon v-if="confirmPasswordVisible" name="i-heroicons-eye"></UIcon>
                  <UIcon v-else name="i-heroicons-eye-slash"></UIcon>
                </UButton>
              </div>
            </UFormGroup>
            <div class="p-1 flex justify-between items-center">
              <UButton v-if="loading  ==  true" loading id="submit" type="submit" color="white"> Submit </UButton>              
              <UButton v-else type="submit" color="white"> Submit </UButton>
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

const { signUp } = useAuth();

const schema = Yup.object().shape({
  password: Yup.string()
    .required('Required')
});

const errorMessage = ref(null);
const loading  = ref(false)
const form = ref();
const state = ref({
  username: undefined,
  password: undefined,
  confPassword:undefined,
  roleId: 2
})

const passwordVisible = ref(false);
const confirmPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;

  const passwordInput = document.querySelector("#password-input");  
  if (passwordInput) {
    passwordInput.type = passwordVisible.value ? "text" : "password";
  }
};

const toggleConfirmPasswordVisibility = () => {
  confirmPasswordVisible.value = !confirmPasswordVisible.value;

  const confirmPasswordInput = document.querySelector("#confirm-password-input"); 
  if (confirmPasswordInput) {
    confirmPasswordInput.type = confirmPasswordVisible.value ? "text" : "password";
  }
};




const submit = async () => {
  loading.value = true;
    await form.value?.validate();
    const { username, password, confPassword, roleId } = state.value;
    if (password !== confPassword) {
      errorMessage.value = "Password and confirm password do not match.";
      return;
    }
    await signUp({ username, password, confPassword, roleId, redirect: true });
    errorMessage.value = null;
    navigateTo("/dashboard");
};

</script>
