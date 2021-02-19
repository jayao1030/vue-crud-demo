<template>
  <form @submit.prevent="handleSubmit" class="form-group">
    <h3 class="">新增用戶</h3>
    <label>姓名:</label>
    <input type="text" v-model.trim="name" class="form-control" required />
    <label>信箱:</label>
    <input v-model.trim="email" class="form-control" required />
    <label>電話:</label>
    <input v-model.trim="phone" class="form-control" required />
    <label>狀態:</label>
    <div class="custom-control custom-switch">
      <input
        type="checkbox"
        id="customSwitch1"
        v-model="complete"
        class="custom-control-input"
      />
      <label class="custom-control-label" for="customSwitch1">已完成</label>
    </div>

    <button class="btn btn-success add-btn">新增</button>
    <button class="btn btn-secondary cancel-btn" @click="handleCancel">
      取消
    </button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      complete:false
    };
  },
  methods: {
    handleCancel() {
      this.name = "";
      this.email = "";
      this.phone = "";
      this.complete = false,
      this.$router.push("/");
    },
    handleSubmit() {
      let member = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        complete:this.complete
      };
      axios
        .post("http://localhost:3000/members", member)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.form-group {
  background: white;
  width: 600px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
label {
  display: block;
  font-size: 16px;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}

.add-btn,
.cancel-btn {
  display: inline-block;
  margin: 20px auto;
  margin-right: 5px;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
}
</style>
