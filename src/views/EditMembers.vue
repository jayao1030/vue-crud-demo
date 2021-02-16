<template>
  <form @submit.prevent="handleSubmit" class="form-group">
    <h3>更新用戶</h3>
    <label>姓名:</label>
    <input type="text" v-model="name" class="form-control" required />
    <label>信箱:</label>
    <input v-model="email" class="form-control" required />
    <label>電話:</label>
    <input v-model="phone" class="form-control" required />

    <button class="btn btn-success add-btn ">更新</button>
    <button class="btn btn-secondary cancel-btn" @click="handleCancel">取消</button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  props: ['id'],
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      URL: 'http://localhost:3000/members/' + this.id,
    };
  },

  mounted() {
    axios(this.URL)
      .then(res => res.data)
      .then(data => {
        this.name = data.name;
        this.email = data.email;
        this.phone = data.phone;
      });
  },
  methods: {
    handleCancel() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.$router.push('/');
    },
    handleSubmit() {
      axios(this.URL, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ name: this.name, email: this.email, phone: this.phone }),
      })
        .then(() => {
          this.$router.push('/');
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
