<template>
  <div class="flex justify-between mt-5 px-10">
    <!-- <RouterLink
      to="/"
      class="p-5 text-yellow-400 border border-yellow-400 rounded-3xl"
      >Trang chủ</RouterLink
    >
    <RouterLink
      to="/login"
      class="p-5 text-yellow-400 border border-yellow-400 rounded-3xl"
      >Đăng nhập</RouterLink
    > -->
  </div>
  <RouterView />
</template>

<script>
export default {
  name: "HomePage",
};
</script>
