<template>
  <v-footer color="white" padless outlined class="footer pt-10 pb-16">
    <v-row justify="center" no-gutters class="footer-row">
      <v-col class="footer-logo pt-10 pb-10" cols="12">
        <v-card flat>
          <v-card-title class="text-h5">
            <p class="text-center lc">little cigogne</p>
          </v-card-title>
          <v-card-subtitle>
            <div class="baseline">
              <p class="baseline-text ma-0">
                {{ $t('footer.gettingDressedIsChildsPlay') }}
              </p>
              <div class="sparkles"></div>
            </div>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col class="footer-links" cols="12">
        <app-footer-links />
      </v-col>
      <v-col class="text-center" cols="12">
        @{{ new Date().getFullYear() }} Little Cigogne
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import footerLinks from '~/components/footer/links.vue';

export default {
  components: {
    appFooterLinks: footerLinks
  },
  data: () => ({
    links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
  })
};
</script>

<style lang="scss" scoped>
.footer {
  align-items: center;
  .footer-row {
    border-top: $gray 1px solid;
    .footer-logo {
      border-bottom: $gray 1px solid;
      .lc {
        color: $red;
        font-size: 1.3em;
        font-weight: bold;
        width: 100%;
      }
      .baseline {
        text-align: center;
        .baseline-text {
          color: $black;
          font-size: 1.2em;
          font-weight: 500;
          display: inline-block;
        }
        .sparkles {
          background-image: url(~assets/plus.svg);
          background-size: contain;
          background-repeat: no-repeat;
          width: 10px;
          height: 18px;
          display: inline-block;
        }
      }
    }
  }
}
</style>
