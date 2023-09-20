<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <div class="w-[75%] md:w-[25%]">
      <div>
        <div class="text-center text-2xl">Sign In</div>
        <div>
          <UForm
            :validate="validate"
            :state="state"
            @submit="submit"
            :schema="schema"
          >
            <UFormGroup label="Username" name="username" class="p-1">
              <UInput
                v-model="state.username"
                placeholder="Username..."
              />
            </UFormGroup>
            <UFormGroup label="Password" name="password" class="p-1">
              <UInput
                id="password-input"
                v-model="state.password"
                type="password"
                placeholder="Password..."
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

const schema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
});



const state = ref({
  username: 'admin',
  password: 'admin123'
})

const validate = (state) => {
  const errors = [];
  if (!state.username) errors.push({ path: 'username', message: 'Required' });
  if (!state.password) errors.push({ path: 'password', message: 'Required' });
  return errors;
};


async function submit(event) {
  console.log(event.data);
}

const passwordVisible = ref(false);

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
  const passwordInput = document.querySelector("#password-input"); // Gantilah "password-input" dengan id input password Anda.
  if (passwordInput) {
    passwordInput.type = passwordVisible.value ? "text" : "password";
  }
};
</script>

