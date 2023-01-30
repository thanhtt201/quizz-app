<template>
  <div class="flex justify-center">
    <div>
      <div class="">Chào mừng bạn đến với quizz app</div>
      <div>
        <div>Nhập họ và tên:</div>
        <input type="text" v-model="formData.username" />
        <input
          type="text"
          id="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Doe"
          required
        />
      </div>
      <div>
        <div>Chọn danh mục câu hỏi</div>
        <div>danh mục 1</div>
        <div>danh mục 2</div>
        <div>danh mục 3</div>
      </div>
      <Loading />
      <div>
        <div>Chọn mức độ câu hỏi</div>
        <div>dễ</div>
        <div>trung bình</div>
        <div>khó</div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/common/Loading";

export default {
  name: "HomeView",

  data() {
    return {
      objectTest: {
        answer_a: "ls",
        answer_b: "delete",
        answer_c: "remove",
        answer_d: "rmdir",
        answer_e: null,
        answer_f: null,
      },
      formData: {
        username: "",
        category: "",
        difficulty: "",
      },
    };
  },

  components: {
    Loading,
  },
};
</script>
