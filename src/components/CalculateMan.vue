<template>
  <div class="m-4">
    <h3 class="mb-4 text-center">Erkekler için Kalori Hesaplama bölümüne hoş geldiniz! Aşağıdaki bilgileri doldurarak almanız gereken kaloriyi hesaplayabilirsiniz!</h3>
    <p>
      Yag Orani Hesaplama : Kalorinizi hesaplamadan önce yag oraninizi hesaplamamiz gerekiyor.
      Aşağıdaki araçtan yağ oranınızı basitçe hesaplayabilirsiniz.
    </p>
    <br />
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
      <b-col>
        <b-input-group class="">
          <label class="">Yaş</label>
        </b-input-group>
      </b-col>
      <b-col>
        <b-form-input type="number" v-model="age"></b-form-input>
      </b-col>
    </b-row>
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
      <b-col>
        <b-input-group class="">
          <label class="">Kilo</label>
        </b-input-group>
      </b-col>
      <b-col>
        <b-form-input type="number" v-model="weight"></b-form-input>
      </b-col>
    </b-row>
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
      <b-col>
        <b-input-group class="">
          <label class="">Boy (cm)*</label>
        </b-input-group>
      </b-col>
      <b-col>
        <b-form-input type="number" v-model="height"></b-form-input>
      </b-col>
    </b-row>
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
        <b-col>
          <b-input-group class="">
            <label class="">Yag Orani (%)</label>
          </b-input-group>
        </b-col>
        <b-col>
          <b-form-input type="number" v-model="showYag" disabled></b-form-input>
        </b-col>
    </b-row>
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mt-3 mb-3">
        <b-col>
          <b-input-group class="">
            <label class="">Kilonuz</label>
          </b-input-group>
        </b-col>
        <b-col>
          <b-form-input type="number" ></b-form-input>
        </b-col>
    </b-row>
    <br>
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
        <b-col>
          <b-input-group class="">
            <label class="">Yag Oraniniz (%)</label>
          </b-input-group>
        </b-col>
        <b-col>
          <b-form-input type="number" v-model="showYag" disabled></b-form-input>
        </b-col>
    </b-row>
    <br />
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
      <b-col>
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
        >Hareketsiz is, Haftada 3-4 gün antrenman</b-form-radio
      >
      <b-form-radio
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="Ortalamais"
        v-model="Durum"
        >Ortalama is, Haftada 5-7 gün antrenman</b-form-radio
      >
      <b-form-radio
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="Profesyonel"
        v-model="Durum"
        >Yogun is, Profesyonel Seviyede Antrenman</b-form-radio
      >
    </b-form-group>
    </b-col>
    </b-row>
    <br /><br />
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
        <b-col>
          <b-input-group class="">
            <label class="">BMR (Asla uzun süre bu miktarin altinda kalmayin!)</label>
          </b-input-group>
        </b-col>
        <b-col>
          <b-form-input v-model="showBMR" disabled></b-form-input>
        </b-col>
    </b-row>
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
        <b-col>
          <b-input-group class="">
            <label class="">Günlük Kalori Ihtiyaciniz (Bu miktar kilonuzu korur, amaciniza göre
        artirip azaltabilirsiniz)</label>
          </b-input-group>
        </b-col>
        <b-col>
          <b-form-input v-model="showNormal" disabled></b-form-input>
        </b-col>
    </b-row>
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
        <b-col>
          <b-input-group class="">
            <label class="">Kilo Verme Baslangic Kalori</label>
          </b-input-group>
        </b-col>
        <b-col>
          <b-form-input v-model="showDefinasyon" disabled></b-form-input>
        </b-col>
    </b-row>
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
        <b-col>
          <b-input-group class="">
            <label class="">Kilo Alma Baslangic Kalori</label>
          </b-input-group>
        </b-col>
        <b-col>
          <b-form-input v-model="showBulk" disabled></b-form-input>
        </b-col>
    </b-row>
    <br><br>
    <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="3" class="mb-4">
        <b-col>
          <b-input-group class="">
            <label class="">Sayın Kullanıcımız, size tavsiye öğünümüz şu şekildedir : </label>
          </b-input-group>
        </b-col>
        <b-col>
          <b-form-input v-model="showOgun" disabled></b-form-input>
        </b-col>
    </b-row>
    <span v-if="$store.state.loggedIn = false"></span>
    <h5 v-else>Tavsiye öğün için bilgi almak istiyorsanız <router-link to="/kayitol">kayıt olun</router-link> veya <router-link to="/girisyap">giriş yapın</router-link></h5>
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
  computed: {
    showYag(){
      return ((1.20 * (Number(this.weight) / ((Number(this.height)/100) * (Number(this.height)/100)))) + (0.23 * Number(this.age))) - 16.2
      },
    showLBM () {
      return ((100 - this.showYag) / 100) * Number(this.weight)
    },
    showBMR () {
      return 370 + (21.6 * this.showLBM)
    },
    showNormal () {
      if (this.Durum == "Seçilmedi") {
        return this.showBMR
      } else if (this.Durum == "Hareketsiz") {
        return this.showBMR * 1.20
      } else if (this.Durum == "Seçilmedi") {
        return this.showBMR
      } else if (this.Durum == "Biraz") {
        return this.showBMR * 1.35
      } else if (this.Durum == "Seçilmedi") {
        return this.showBMR
      } else if (this.Durum == "HareketsizAntrenman") {
        return this.showBMR * 1.55
      } else if (this.Durum == "Seçilmedi") {
        return this.showBMR
      } else if (this.Durum == "Ortalamais") {
        return this.showBMR * 1.72
      } else if (this.Durum == "Seçilmedi") {
        return this.showBMR
      } else if (this.Durum == "Profesyonel") {
        return this.showBMR * 1.90
      } else {
        return ""
      }
    },
    showBulk () {
      if (this.Durum == "Seçilmedi") {
        return this.showNormal
      } else if (this.Durum == "Hareketsiz") {
        return this.showNormal * 1.10
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal
      } else if (this.Durum == "Biraz") {
        return this.showNormal * 1.10
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal
      } else if (this.Durum == "HareketsizAntrenman") {
        return this.showNormal * 1.10
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal
      } else if (this.Durum == "Ortalamais") {
        return this.showNormal * 1.10
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal
      } else if (this.Durum == "Profesyonel") {
        return this.showNormal * 1.10
      } else {
        return ""
      }
    },
    showDefinasyon () {
      if (this.Durum == "Seçilmedi") {
        return this.showNormal
      } else if (this.Durum == "Hareketsiz") {
        return this.showNormal / 1.20
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal
      } else if (this.Durum == "Biraz") {
        return this.showNormal / 1.20
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal
      } else if (this.Durum == "HareketsizAntrenman") {
        return this.showNormal / 1.20
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal
      } else if (this.Durum == "Ortalamais") {
        return this.showNormal / 1.20
      } else if (this.Durum == "Seçilmedi") {
        return this.showNormal
      } else if (this.Durum == "Profesyonel") {
        return this.showNormal / 1.20
      } else {
        return ""
      }
    },
    showOgun () {
      if (this.age > 18 && this.age < 20 && this.showYag > 2.0 && this.showYag < 6.1 ) {
        return "Vücut yağ oranınız düşük. Yağ oranınızı arttırmak için kalorisi yüksek besinler almaya başlayın. Bunun için kırmızı et, yulaf ezmesi, fındık, fıstık, yulaf barı gibi besinler tüketebilirsiniz."
      } else if (this.age > 18 && this.age < 20 && this.showYag >= 6.1 && this.showYag < 14.2 ) {
        return "Vücut yağ oranınız ideal. Beslenmenize normal bir şekilde devam edebilirsiniz."
      } else if (this.age > 18 && this.age < 20 && this.showYag >= 14.3 && this.showYag < 20.1 ) {
        return "Vücut yağ oranınız ortalama. Beslenmenize normal bir şekilde devam edebilirsiniz ancak kalorisi yüksek besin tüketiminden kaçının. Aksi takdirde ortalamanın üstü kısmına girebilirsiniz. Bunun için öğünlerinizdeki yüksek kalorili besinleri salata veya bulgur ile değiştirebilirsiniz."
      } else if (this.age > 18 && this.age < 20 && this.showYag >= 20.2) {
        return "Vücut yağ oranınız ortalamanın üstünde. Öğünlerinizdeki yüksek kalorili besinleri salata veya bulgur ile değiştirmeniz gerek."
      } else if (this.age > 21 && this.age < 25 && this.showYag > 2.5 && this.showYag < 7.2 ) {
        return "Vücut yağ oranınız düşük. Yağ oranınızı arttırmak için kalorisi yüksek besinler almaya başlayın. Bunun için kırmızı et, yulaf ezmesi, fındık, fıstık, yulaf barı gibi besinler tüketebilirsiniz."
      } else if (this.age > 21 && this.age < 25 && this.showYag >= 7.3 && this.showYag < 15.3 ) {
        return "Vücut yağ oranınız ideal. Beslenmenize normal bir şekilde devam edebilirsiniz."
      } else if (this.age > 21 && this.age < 25 && this.showYag >= 15.4 && this.showYag < 22.2 ) {
        return "Vücut yağ oranınız ortalama. Beslenmenize normal bir şekilde devam edebilirsiniz ancak kalorisi yüksek besin tüketiminden kaçının. Aksi takdirde ortalamanın üstü kısmına girebilirsiniz. Bunun için öğünlerinizdeki yüksek kalorili besinleri salata veya bulgur ile değiştirebilirsiniz."
      } else if (this.age > 21 && this.age < 25 && this.showYag >= 22.3) {
        return "Vücut yağ oranınız ortalamanın üstünde. Öğünlerinizdeki yüksek kalorili besinleri salata veya bulgur ile değiştirmeniz gerek."
      } else if (this.age > 26 && this.age < 30 && this.showYag >= 3.5 && this.showYag < 10.5 ) {
        return "Vücut yağ oranınız düşük. Yağ oranınızı arttırmak için kalorisi yüksek besinler almaya başlayın. Bunun için kırmızı et, yulaf ezmesi, fındık, fıstık, yulaf barı gibi besinler tüketebilirsiniz."
      } else  {
        return "Hesaplanıyor..."
      }
    }
    },
  }
</script>

<style scoped>

</style>