<template>
  <form @submit.prevent="handleSubmit" class="form-group">
    <h3>更新用戶</h3>
    <label>姓名:</label>
    <input type="text" v-model="name" class="form-control" required />
    <label>信箱:</label>
    <input v-model="email" class="form-control" required />
    <label>電話:</label>
    <input v-model="phone" class="form-control" required />
     <div class="custom-control custom-switch">
      <input
        type="checkbox"
        id="customSwitch1"
        v-model="complete"
        class="custom-control-input"
      />
      <label class="custom-control-label" for="customSwitch1">已完成</label>
    </div>

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
      complete:false,
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
        this.complete = data.complete;
      });
  },
  methods: {
    handleCancel() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.complete = false;
      this.$router.push('/');
    },
    handleSubmit() {
      axios(this.URL, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        data: JSON.stringify({ name: this.name, email: this.email, phone: this.phone,complete:this.complete }),
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
