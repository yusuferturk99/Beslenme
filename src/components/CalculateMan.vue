<template>
  <div class="m-4" id="center">
    <h3 class="mb-4">
      Erkekler için Kalori Hesaplama bölümüne hoş geldiniz! Aşağıdaki bilgileri
      doldurarak almanız gereken kaloriyi hesaplayabilirsiniz!
    </h3>
    <p>
      Yag Orani Hesaplama : Kalorinizi hesaplamadan önce yag oraninizi
      hesaplamamiz gerekiyor. Aşağıdaki araçtan yağ oranınızı basitçe
      hesaplayabilirsiniz.
    </p>
    <br />
    <b-row>
      <b-col>
          <label class="">Yaşınız</label>
        </b-col>
      <b-col>
        <b-form-input type="number" v-model="age"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
          <label class="">Kilonuz</label>
      </b-col>
      <b-col>
        <b-form-input type="number" v-model="weight"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
          <label class="">Boyunuz (cm)*</label>
      </b-col>
      <b-col>
        <b-form-input type="number" v-model="height"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
        <b-col>
            <label class="">Yağ Oranınız (%)</label>
        </b-col>
          <b-col>
            <b-form-input type="number" v-model="calculateFat" disabled></b-form-input>
          </b-col>
    </b-row>
    <p>Eğer ki yağ oranınızı biliyorsanız direkt kilo ve yağ oranı bilgilerinizi girerek işleminize devam edebilirsiniz.</p>
    <b-row>
        <b-col>
          <label class="">Kilonuz</label>
        </b-col>
        <b-col>
        <b-form-input type="number"></b-form-input>
        </b-col>
    </b-row>
        <b-row>
          <b-col>
          <label class="">Yağ Oranınız (%)</label>
        </b-col>
        <b-col>
        <b-form-input type="number" v-model="calculateFat"></b-form-input>
        </b-col>
        </b-row>
    <br />
        <b-form-group
          label="Lütfen Durumunuza Uyan Seçeneği İşaretleyin : "
          v-slot="{ ariaDescribedby }"
          class="b-form-group"
        >
          <b-form-radio
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Hareketsiz"
            v-model="Durum"
            >Hareketsiz</b-form-radio
          >
          <b-form-radio
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Biraz"
            v-model="Durum"
            >Biraz Aktif</b-form-radio
          >
          <b-form-radio
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="HareketsizAntrenman"
            v-model="Durum"
            >Haftada 3-4 gün antrenman</b-form-radio
          >
          <b-form-radio
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Ortalamais"
            v-model="Durum"
            >Haftada 5-7 gün antrenman</b-form-radio
          >
          <b-form-radio
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="Profesyonel"
            v-model="Durum"
            >Profesyonel Seviyede Antrenman</b-form-radio
          >
        </b-form-group>
    <br /><br />
        <b-row>
          <b-col>
            <label class="">BMR (Asla uzun süre bu miktarın altında kalmayın!)</label>
            </b-col>
            <b-col>
            <b-form-input v-model="calculateBMR" disabled></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
          <label class="">Günlük Kalori İhtiyacınız (Bu miktar kilonuzu korur, amacınıza göre artırıp azaltabilirsiniz)</label>
          </b-col>
          <b-col>
            <b-form-input v-model="showNormal" disabled></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <label class="">Kilo Verme Baslangıç Kalori</label>
          </b-col>
          <b-col>
            <b-form-input v-model="showDefinasyon" disabled></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
          <label class="">Kilo Alma Baslangıç Kalori</label>
          </b-col>
          <b-col>
        <b-form-input v-model="showBulk" disabled></b-form-input>
        </b-col>
        </b-row>
    <br /><br />
    <b-row>
      <b-col>
        <label class="">Sayın Kullanıcımız, size tavsiye öğünümüz şu şekildedir :</label>
      </b-col>
      <b-col>
        <b-form-input style="" v-model="showMeal" disabled></b-form-input>
      </b-col>
    </b-row>
    <div v-if="($store.state.loggedIn = true)">
      <p>Kalori ihtiyacı bilgilerinizi göndererek bilgilerinizi saklayabilir ve
        profilinizde görüntüleyebilirsiniz :</p>
      <b-button pill variant="outline-success" v-on:click.prevent="post"
      >Gönder</b-button>
    </div>
    <div v-else>
      <h5>
        Tavsiye öğün için bilgi almak istiyorsanız
        <router-link to="/kayitol">kayıt olun</router-link> veya
        <router-link to="/girisyap">giriş yapın</router-link>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
      weight: 0,
      age: 0,
      Durum: "Seçilmedi",
    };
  },
  methods: {
    post() {
      const Kalori = {
        showNormal: this.showNormal,
        showDefinasyon: this.showDefinasyon,
        showBulk: this.showBulk,
        showMeal: this.showMeal,
      }
      this.$http
        .post(
          "https://beslenme-70322-default-rtdb.firebaseio.com/users.json",
          Kalori
        )
        .then(function (data) {
          console.log(data);
        });
    },
  },
  computed: {
    // KaloriData () {
    //   return this.$store.getters.SET_KALORI
    // },
    calculateFat() {
      return (
        1.2 *
          (Number(this.weight) /
            ((Number(this.height) / 100) * (Number(this.height) / 100))) +
        0.23 * Number(this.age) -
        16.2
      );
    },
    calculateLBM() {
      return ((100 - this.calculateFat) / 100) * Number(this.weight);
    },
    calculateBMR() {
      return 370 + 21.6 * this.calculateLBM;
    },
    showNormal() {
      if (this.Durum == "Seçilmedi") {
        return this.calculateBMR;
      } else if (this.Durum == "Hareketsiz") {
        return this.calculateBMR * 1.2;
      } else if (this.Durum == "Seçilmedi") {
        return this.calculateBMR;
      } else if (this.Durum == "Biraz") {
        return this.calculateBMR * 1.35;
      } else if (this.Durum == "Seçilmedi") {
        return this.calculateBMR;
      } else if (this.Durum == "HareketsizAntrenman") {
        return this.calculateBMR * 1.55;
      } else if (this.Durum == "Seçilmedi") {
        return this.calculateBMR;
      } else if (this.Durum == "Ortalamais") {
        return this.calculateBMR * 1.72;
      } else if (this.Durum == "Seçilmedi") {
        return this.calculateBMR;
      } else if (this.Durum == "Profesyonel") {
        return this.calculateBMR * 1.9;
      } else {
        return "";
      }
    },
    showBulk() {
      if (this.Durum == "Seçilmedi") {
        return this.showNormal;
      } else if (this.Durum == "Hareketsiz") {
        return this.showNormal * 1.1;
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal;
      } else if (this.Durum == "Biraz") {
        return this.showNormal * 1.1;
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal;
      } else if (this.Durum == "HareketsizAntrenman") {
        return this.showNormal * 1.1;
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal;
      } else if (this.Durum == "Ortalamais") {
        return this.showNormal * 1.1;
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal;
      } else if (this.Durum == "Profesyonel") {
        return this.showNormal * 1.1;
      } else {
        return "";
      }
    },
    showDefinasyon() {
      if (this.Durum == "Seçilmedi") {
        return this.showNormal;
      } else if (this.Durum == "Hareketsiz") {
        return this.showNormal / 1.2;
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal;
      } else if (this.Durum == "Biraz") {
        return this.showNormal / 1.2;
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal;
      } else if (this.Durum == "HareketsizAntrenman") {
        return this.showNormal / 1.2;
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal;
      } else if (this.Durum == "Ortalamais") {
        return this.showNormal / 1.2;
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal;
      } else if (this.Durum == "Profesyonel") {
        return this.showNormal / 1.2;
      } else {
        return "";
      }
    },
    showMeal() {
      if (
        this.age > 18 &&
        this.age < 20 &&
        this.calculateFat > 2.0 &&
        this.calculateFat < 6.1
      ) {
        return "Vücut yağ oranınız düşük. Yağ oranınızı arttırmak için kalorisi yüksek besinler almaya başlayın. Bunun için kırmızı et, yulaf ezmesi, fındık, fıstık, yulaf barı gibi besinler tüketebilirsiniz.";
      } else if (
        this.age > 18 &&
        this.age < 20 &&
        this.calculateFat >= 6.1 &&
        this.calculateFat < 14.2
      ) {
        return "Vücut yağ oranınız ideal. Beslenmenize normal bir şekilde devam edebilirsiniz.";
      } else if (
        this.age > 18 &&
        this.age < 20 &&
        this.calculateFat >= 14.3 &&
        this.calculateFat < 20.1
      ) {
        return "Vücut yağ oranınız ortalama. Beslenmenize normal bir şekilde devam edebilirsiniz ancak kalorisi yüksek besin tüketiminden kaçının. Aksi takdirde ortalamanın üstü kısmına girebilirsiniz. Bunun için öğünlerinizdeki yüksek kalorili besinleri salata veya bulgur ile değiştirebilirsiniz.";
      } else if (this.age > 18 && this.age < 20 && this.calculateFat >= 20.2) {
        return "Vücut yağ oranınız ortalamanın üstünde. Öğünlerinizdeki yüksek kalorili besinleri salata veya bulgur ile değiştirmeniz gerek.";
      } else if (
        this.age > 21 &&
        this.age < 25 &&
        this.calculateFat > 2.5 &&
        this.calculateFat < 7.2
      ) {
        return "Vücut yağ oranınız düşük. Yağ oranınızı arttırmak için kalorisi yüksek besinler almaya başlayın. Bunun için kırmızı et, yulaf ezmesi, fındık, fıstık, yulaf barı gibi besinler tüketebilirsiniz.";
      } else if (
        this.age > 21 &&
        this.age < 25 &&
        this.calculateFat >= 7.3 &&
        this.calculateFat < 15.3
      ) {
        return "Vücut yağ oranınız ideal. Beslenmenize normal bir şekilde devam edebilirsiniz.";
      } else if (
        this.age > 21 &&
        this.age < 25 &&
        this.calculateFat >= 15.4 &&
        this.calculateFat < 22.2
      ) {
        return "Vücut yağ oranınız ortalama. Beslenmenize normal bir şekilde devam edebilirsiniz ancak kalorisi yüksek besin tüketiminden kaçının. Aksi takdirde ortalamanın üstü kısmına girebilirsiniz. Bunun için öğünlerinizdeki yüksek kalorili besinleri salata veya bulgur ile değiştirebilirsiniz.";
      } else if (this.age > 21 && this.age < 25 && this.calculateFat >= 22.3) {
        return "Vücut yağ oranınız ortalamanın üstünde. Öğünlerinizdeki yüksek kalorili besinleri salata veya bulgur ile değiştirmeniz gerek.";
      } else if (
        this.age > 26 &&
        this.age < 30 &&
        this.calculateFat >= 3.5 &&
        this.calculateFat < 10.5
      ) {
        return "Vücut yağ oranınız düşük. Yağ oranınızı arttırmak için kalorisi yüksek besinler almaya başlayın. Bunun için kırmızı et, yulaf ezmesi, fındık, fıstık, yulaf barı gibi besinler tüketebilirsiniz.";
      } else {
        return "Hesaplanıyor...";
      }
    },
  },
};
</script>

<style scoped>
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
@media screen and (min-width: 0px) and (max-width: 501px) {
  .row{
  text-center: center;
  margin-bottom: 10px;
  }
}
@media screen and (min-width: 501px) and (max-width: 2000px) {
  .form-control{
  width: 50%;
  }
  .row{
  text-center: center;
  margin-bottom: 10px;
  }
}
</style>