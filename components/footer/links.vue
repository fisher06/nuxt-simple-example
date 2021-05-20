<template>
  <v-list class="links-list">
    <v-list-item v-for="(item, index) in items" :key="index" class="pa-4 link">
      <v-list-item-title v-text="$t('footer.' + item.title)" />
      <v-list-item-icon>
        <v-icon>keyboard_arrow_right</v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-list-item class="pt-16 link">
      <v-card class="mx-auto" flat>
        <v-card-title class="inspiration-title pa-0">
          {{ $t('footer.lookingForInspiration') }}
        </v-card-title>
        <v-card-actions class="pa-0">
          <v-text-field
            v-model="email"
            :label="$t('search.enterYourEmail')"
            :rules="emailRules"
            append-icon="arrow_forward"
            solo
            flat
            class="ma-0 pa-0"
            clearable
          />
        </v-card-actions>
      </v-card>
    </v-list-item>
    <v-list-item class="pt-10 pb-10 link">
      <v-card class="mx-auto social-media" flat>
        <v-card-text>
          <v-row>
            <v-col v-for="(social, index) in socials" :key="index" cols="6">
              <v-btn
                class="mx-4"
                text
                plain
                :color="social.color"
                :class="social.name"
              >
                <v-icon :color="social.color" size="24px">
                  {{ social.icon }}
                </v-icon>
                {{ social.name }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-list-item>
    <v-list-item class="pt-10 link last">
      <v-card class="mx-auto footer-questions" flat>
        <v-card-title class="inspiration-title pa-0 text-left">
          {{ $t('footer.youHaveQuestions') }}
        </v-card-title>
        <v-card-text class="pl-0 pr-0 pt-8 question">
          <p>{{ $t('footer.consultFAQ') }}</p>
          <p>{{ $t('footer.accessContactForm') }}</p>
          <p>{{ $t('footer.callUsAt') }}</p>
        </v-card-text>
        <v-card-text class="pl-0 pr-0 pt-8 question">
          <p>{{ $t('footer.cgv') }}</p>
          <p>{{ $t('footer.protectionPersonalData') }}</p>
          <p>{{ $t('footer.legalNotice') }}</p>
        </v-card-text>
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script>
import { mdiInstagram, mdiFacebook } from '@mdi/js';

export default {
  data() {
    return {
      items: [
        {
          title: 'discoverUs'
        },
        {
          title: 'ourUniverse'
        }
      ],
      email: '',
      emailRules: [
        v => !!v || this.$t('auth.emailMustBeValid'),
        v =>
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
            v
          ) || this.$t('auth.emailMustBeValid')
      ],
      socials: [
        {
          name: 'instagram',
          icon: mdiInstagram,
          color: 'red'
        },
        {
          name: 'facebook',
          icon: mdiFacebook,
          color: 'blue'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.links-list {
  .link {
    border-bottom: $gray 1px solid;
    .inspiration-title {
      width: 100%;
      font-family: 'Poppins', sans-serif;
      font-size: 1.1em;
      font-weight: bold;
    }
    .social-media {
      width: 100%;
      & ::v-deep .v-btn__content {
        opacity: 1 !important;
      }
      .instagram {
        float: right;
      }
      .facebook {
        float: left;
      }
    }
    .footer-questions {
      width: 100%;
      .question {
        color: $black;
        font-weight: 500;
      }
    }
    &.last {
      border-bottom: none;
    }
  }
}
</style>
