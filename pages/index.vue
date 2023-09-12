<template>
  <div>
    <h1>Üye Ol</h1>
    <form>
      <div>
        <label for="username">Kullanıcı Adı:</label>
        <input type="text" id="username" v-model="formData.username" required />
      </div>
      <div>
        <label for="password">Parola:</label>
        <input type="password" id="password" v-model="formData.password" required />
      </div>
      <div>
        <label for="email">E-posta:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div>
        <label for="firstName">Ad:</label>
        <input type="text" id="firstName" v-model="formData.firstName" required />
      </div>
      <div>
        <label for="lastName">Soyad:</label>
        <input type="text" id="lastName" v-model="formData.lastName" required />
      </div>
      <div>
        <label for="birthDate">Doğum Tarihi:</label>
        <input type="date" id="birthDate" v-model="formData.birthDate" required />
      </div>
      <div>
        <label for="phoneNumber">Telefon Numarası:</label>
        <input type="tel" id="phoneNumber" v-model="formData.phoneNumber" required />
      </div>
      <div>
        <button @click="signUpUser">Kaydol</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from '../composables/auth';
import { ref } from 'vue';

const formData = ref({
  username: '',
  password: '',
  email: '',
  firstName: '',
  lastName: '',
  birthDate: '',
  phoneNumber: '',
});

const { user, SignUpUser } = useAuth()

const signUpUser = async () => {
  // formData içindeki verileri kullanarak SignUpUser işlemini çağırın
  const signUpData = {
    username: formData.value.username,
    password: formData.value.password,
    email: formData.value.email,
    firstName: formData.value.firstName,
    lastName: formData.value.lastName,
    birthDate: formData.value.birthDate,
    phoneNumber: formData.value.phoneNumber,
  };

  const response = await SignUpUser(signUpData); // Auth komponentindeki SignUpUser işlemini çağırın

  if (response != null) {
    console.log('Kayıt başarıyla tamamlandı:', response);
  } else {
    console.log('Kayıt başarısız oldu.');
  }
};

</script>



<style></style>
