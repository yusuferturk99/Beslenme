<template>
  <div class="m-4">
    <div class="classic">
      <h5 class="mt-3 mb-5">
        Merhaba {{ $store.state.firstName }} ! <br>
        Aşağıda, verdiğin kilo, boy, yaş ve vücut hareketliliğine göre kalori bilgilerini görebilirsin.
      </h5>
      <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
        <b-col>
          <b-input-group class="">
            <label class="">Günlük Kalori İhtiyacınız :</label>
          </b-input-group>
        </b-col>
        <b-col>
          <b-form-input v-model="$store.state.normalKalori" type="number" disabled></b-form-input>
        </b-col>
      </b-row>
      <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
        <b-col>
          <b-input-group class="">
            <label class="">Kilo Verme Başlangıç Kaloriniz :</label>
          </b-input-group>
        </b-col>
        <b-col>
          <b-form-input v-model="$store.state.azKalori" type="number" disabled></b-form-input>
        </b-col>
      </b-row>
      <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
        <b-col>
          <b-input-group class="">
            <label class="">Kilo Alma Baslangıç Kaloriniz :</label>
          </b-input-group>
        </b-col>
        <b-col>
          <b-form-input v-model="$store.state.çokKalori" type="number" disabled></b-form-input>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.classic {
  text-align: center;
  margin-top: 10px;
}
</style>