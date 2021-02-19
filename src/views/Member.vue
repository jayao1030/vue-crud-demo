<template>
  <main role="main">
    <div class="d-flex justify-content-around  pt-3 pb-2 mb-3 ">
      <input type="text" v-model="filterInput" class="form-control w-50" placeholder="Search" />
      <router-link class="btn btn-info" :to="{ name: 'AddMembers' }">新增</router-link>
    </div>

    <div class="table-responsive ">
      <table class="table  table-bordered table-striped text-center ">
        <thead class="bg-light">
          <tr>
            <th>序號</th>
            <th>名稱</th>
            <th>信箱</th>
            <th>電話</th>
            <th>狀態</th>
            <th>設定</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in filterMember(members, filterInput)" :key="index">
            <td>{{ member.id }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.email }}</td>
            <td>{{ member.phone }}</td>
            <td @complete="complete">{{ member.complete ?'完成':'未完成'}}</td>
            <td>
              <router-link :to="{ name: 'EditMembers', params: { id: member.id } }">
                <span class="btn btn-success mr-3">編輯</span>
              </router-link>

              <span @click="handDeleteMember(index)" class="btn btn-danger">
                刪除
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Member',
  data() {
    return {
      members: [],
      filterInput: '',
    };
  },

  mounted() {
    axios
      .get('http://localhost:3000/members')
      .then(res => res.data)
      .then(data => (this.members = data))
      .catch(err => console.log(err.message));
  },
  methods: {
    //刪除資料
    handDeleteMember(index) {
      let target = this.members[index];
      if (confirm(`請確認是否要刪除 ${target.name}?`))
        axios
          .delete('http://localhost:3000/members/' + target.id)
          .then(res => {
            this.members.splice(index, 1);
          })
          .catch(err => console.log(err));
    },
    //搜尋姓名
    filterMember(members, value) {
      return members.filter(function(member) {
        return member.name.match(value);
      });
    },
  },
};
</script>
<style>


</style>
