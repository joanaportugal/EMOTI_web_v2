<template>
  <header
    class="d-flex align-items-center"
    style="border-bottom: 1px solid #707070; background-color: #fdfdf3"
  >
    <b-input-group class="col-10">
      <template #prepend>
        <div
          class="d-flex flex-row justify-content-center align-items-center mx-3"
        >
          <span class="material-icons-round" style="font-size: 32px"
            >search</span
          >
        </div>
      </template>
      <b-form-input
        placeholder="Pesquisa alguma coisa..."
        style="
          background-color: #fdfdf3;
          border: none;
          color: #2b4141;
          height: 10vh;
          font-size: 25px;
        "
      ></b-form-input>
    </b-input-group>
    <div class="col-2 d-flex flex-row justify-content-end pr-5">
      <b-button
        class="d-flex flex-row justify content-center align-items-center shadow-sm rounded-circle p-2"
        style="background-color: #e87461; border: none"
      >
        <span class="material-icons-round" style="font-size: 30px"
          >notifications</span
        >
      </b-button>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppSearch",
};
</script>
