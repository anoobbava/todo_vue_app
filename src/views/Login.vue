<template>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-tooltip bottom>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>

                <v-form>
                  <!-- text field login -->
                  <v-text-field
                    label="Login"
                    name="login"
                    type="text"
                    v-model="email"
                  ></v-text-field>

                  <!-- text field password -->
                  <v-text-field
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>

              </v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="primary"
                @click="validateLogin"
                >Login</v-btn>
                <v-btn
                  color="error"
                  @click="resetForm"
                  class="reset">
                  Reset Form
                </v-btn>
              </v-card-actions>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import SweetAlert from '@/services/SweetAlert'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['loginAction']),
    // will reset the email and password
    resetForm () {
      this.email = ''
      this.password = ''
    },
    // will call the API and return the result
    validateLogin () {
      const userDetails = {
        email: this.email,
        password: this.password
      }
      this.loginAction(userDetails)
        .then(() => {
          this.$router.push('/')
          this.resetForm()
          SweetAlert.successfulLogin()
        })
        .catch(() => {
          this.$router.push('/login')
          this.resetForm()
          SweetAlert.failureLogin()
        })
    }
  }
}
</script>
