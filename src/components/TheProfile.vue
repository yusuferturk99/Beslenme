<template>
  <div class="m-4" id="center">
      <h5 class="mt-3 mb-5">
        Merhaba {{ $store.state.firstName }} ! <br>
        Aşağıda, verdiğin kilo, boy, yaş ve vücut hareketliliğine göre kalori bilgilerini görebilirsin.
      </h5>
      <form @submit.prevent="onSubmit">
            <b-row>
              <b-col>
            <label class="">Günlük Kalori İhtiyacınız :</label>
              </b-col>
              <b-col>
            <b-form-input v-model="$store.state.normalKalori" type="number" class="b-form mx-auto"></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
            <label class="">Kilo Verme Başlangıç Kaloriniz :</label>
              </b-col>
              <b-col>
            <b-form-input v-model="$store.state.azKalori" type="number" class="b-form mx-auto"></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
            <label class="">Kilo Alma Baslangıç Kaloriniz :</label>
              </b-col>
              <b-col>
            <b-form-input v-model="$store.state.çokKalori" type="number" class="b-form mx-auto"></b-form-input>
              </b-col>
            </b-row>
      </form>
      <br>
      <b-button pill variant="outline-primary" v-on:click.prevent="post">Bilgilerimi Gönder</b-button>
      <br><br><br><br>
      <form @submit.prevent="onSubmit">
            <b-row>
              <b-col>
            <label class="">Günlük Kalori İhtiyacınız :</label>
              </b-col>
              <b-col>
            <b-form-input type="number" disabled class="b-form mx-auto"></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
            <label class="">Kilo Verme Başlangıç Kaloriniz :</label>
              </b-col>
              <b-col>
            <b-form-input type="number" disabled class="b-form mx-auto"></b-form-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
            <label class="">Kilo Alma Baslangıç Kaloriniz :</label>
              </b-col>
              <b-col>
            <b-form-input type="number" disabled class="b-form mx-auto"></b-form-input>
              </b-col>
            </b-row>
      </form>
      <br>
      <b-button pill variant="outline-success" v-on:click.prevent="get">Bilgilerimi Getir</b-button>
  </div>
</template>

<script>
export default {
  computed: {
    KaloriData(){
      return this.$store.getters.SET_KALORI
    }
  },
  methods: {
    onSubmit () {
      const Kalori = this.KaloriData;
      console.log(Kalori);
    },
    post () {
      const Kalori = this.KaloriData;
      this.$http.post('https://beslenme-70322-default-rtdb.firebaseio.com/users.json', Kalori).then(function(data){
        console.log(data);
      })
    },
    get () {
        const Kalori = this.KaloriData;
        this.$http.get('https://beslenme-70322-default-rtdb.firebaseio.com/users/.json', Kalori).then(function(data){
            console.log(data);
            return data.json()
          // }).then(function(data){
          //   console.log(data);
          // var datas = [];
          // for (let key in data){
          //   data[key].id = key
          //   datas.push(data[key])
          // }
        });
    },
  },
};
</script>

<style scoped>
.b-form{
  width: 50%
}
.row{
  text-right: right !important;
  margin-bottom: 10px;
}
@media screen and (min-width: 100px) and (max-width: 500px) {
  #center{
  padding-left: 3%;
  padding-right: 3%;
  text-align: center;
}
}
@media screen and (min-width: 501px) and (max-width: 1000px) {
  #center{
  padding-left: 6%;
  padding-right: 6%;
  text-align: center;
}
}
@media screen and (min-width: 1001px) and (max-width: 2000px) {
  #center{
  padding-left: 15%;
  padding-right: 15%;
  text-align: center;
}
}
</style>