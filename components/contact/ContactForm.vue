<template>
  <!-- Form -->
  <form @submit.prevent="onSubmit">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form-group mb-5">
          <!-- Label -->
          <label for="contact_first_name"> First Name </label>

          <!-- Input -->
          <input
            v-model="formData.firstName"
            type="text"
            name="contact_first_name"
            minlength="1"
            required
            class="form-control"
            id="contact_first_name"
            placeholder="John"
          />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="form-group mb-5">
          <!-- Label -->
          <label for="contact_last_name"> Last Name </label>

          <!-- Input -->
          <input
            v-model="formData.lastName"
            type="text"
            name="contact_last_name"
            minlength="1"
            required
            class="form-control"
            id="contact_last_name"
            placeholder="Doe"
          />
        </div>
      </div>
    </div>
    <!-- / .row -->
    <div class="row">
      <div class="col-12">
        <div class="form-group mb-5">
          <!-- Label -->
          <label for="contactEmail"> Email </label>

          <!-- Input -->
          <input
            v-model="formData.email"
            type="email"
            name="contactEmail"
            required
            class="form-control"
            id="contact_email"
            placeholder="john.doe@example.com"
          />
        </div>
      </div>
    </div>
    <!-- / .row -->
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form-group mb-5">
          <!-- Label -->
          <label for="companyName"> Company Name </label>

          <!-- Input -->
          <input
            v-model="formData.companyName"
            type="text"
            name="companyName"
            required
            class="form-control"
            id="contact_company_name"
            placeholder="Example, LLC"
          />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="form-group mb-5">
          <!-- Label -->
          <label for="jobTitle"> Job Title </label>

          <!-- Input -->
          <input
            v-model="formData.jobTitle"
            type="text"
            name="jobTitle"
            required
            class="form-control"
            id="contact_job_title"
            placeholder="CEO, CTO, VP of ..."
          />
        </div>
      </div>
    </div>
    <!-- / .row -->
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form-group mb-5">
          <!-- select state or industry -->
          <!-- Label -->
          <label for="statePicker">Industry</label>
          <div class="shame__selectpicker">
            <select
              v-model="formData.industry"
              class="selectpicker show-tick show-menu-arrow"
              name="statePicker"
              id="states"
              title="Select "
              data-live-search="true"
              data-size="12"
              data-style="btn-light"
            >
              <option
                v-for="(industry, index) in industries"
                :key="index"
                :value="industry.value"
              >
                {{ industry.value }}
              </option>
            </select>
            <!-- end select-->
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="form-group mb-7 mb-md-9">
          <!-- Label -->
          <label for="contactTags"> AWS Services </label>
          <!-- Input -->
          <div class="shame__selectpicker">
            <select
              v-model="formData.awsServices"
              class="selectpicker show-tick show-menu-arrow"
              name="contactTags"
              id="tags"
              title="Select an AWS Service"
              required
              multiple
              data-live-search="true"
              data-size="12"
              data-style="btn-light"
            >
              <option
                v-for="(service, index) in awsServicesOptions"
                :key="index"
                :value="service"
              >
                {{ service }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- / .row -->
    <div class="row textarea_row">
      <div class="col-12">
        <div class="form-group mb-7 mb-md-9">
          <!-- Label -->
          <label for="contactMessage"> What can we help you with? </label>

          <!-- Input -->
          <textarea
            v-model="formData.message"
            class="form-control"
            required
            minlength="10"
            id="contact_message"
            rows="5"
            placeholder="Tell us what we can help you with!"
          ></textarea>
        </div>
      </div>
    </div>
    <!-- / .row -->
    <div class="row justify-content-center">
      <div class="col-auto">
        <!-- Submit -->

        <button type="submit" id="submit_button" class="btn btn-primary lift">
          {{ buttonText }}
        </button>
      </div>
    </div>
    <!-- / .row -->
    <div class="mt-5 alert alert-light" id="alert" role="alert" hidden>
      Your message has been sent successfully!
    </div>
  </form>
</template>

<script>
import AWS from 'aws-sdk'
import awsServices from '~/assets/content/helpers/aws-services.json'
import industries from '~/assets/content/helpers/industries.json'
export default {
  name: 'ContactForm',
  data() {
    return {
      awsServices,
      industries,
      s3: null,
      loading: false,
      formData: {
        firstName: '',
        lastName: '',
        companyName: '',
        jobTitle: '',
        email: '',
        message: '',
        awsServices: [],
        industry: '',
      },
    }
  },
  computed: {
    buttonText() {
      return this.loading ? 'Sending...' : 'Send message'
    },
    awsServicesOptions() {
      return [].concat
        .apply([], Object.values(this.awsServices))
        .map((item) => item.name)
    },
  },
  mounted() {
    this.initContactForm()
  },
  methods: {
    initContactForm() {
      AWS.config.update({
        region: 'us-east-1',
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: process.env.IDENTITY_POOL_ID,
        }),
      })
      this.s3 = new AWS.S3({
        apiVersion: '2006-03-01',
      })
    },
    onSubmit() {
      this.loading = true
      //
      //  Get the time zone the browser is in.
      //
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      //
      //  This array is used to format the body of the message.
      //
      const bodyRaw = [
        this.formData.message,
        '\n',
        '- Company Name: ' + this.formData.companyName,
        '- Job Title: ' + this.formData.jobTitle,
        '- State: ' + this.formData.industry,
        '- Time zone: ' + tz,
        '- Tags: ' + this.formData.awsServices,
      ]
      //
      //  Once we have the body formated how we want we join the array
      //      in to a single string, which is going to be the body of the message.
      //
      const body = bodyRaw.join('\n')
      console.log(body)
      const json = {
        subject: 'Email from Home page.',
        body,
        emails: {
          to: {
            name: 'David Gatti',
            email: 'david@0x4447.com',
          },
          reply_to: {
            name: this.formData.firstName + ' ' + this.formData.lastName,
            email: this.formData.email,
          },
        },
      }
      //
      //  Stringify JSON
      //
      const data = JSON.stringify(json)
      //
      //  Convert string to an ArrayBuffer
      //
      const encoder = new TextEncoder()
      const arrayBuffer = encoder.encode(data)
      //
      //  Prepare parameters for putObject function
      //
      const params = {
        Body: arrayBuffer,
        Bucket: '0x4447-web-us-east-1-smtp',
        Key: Math.round(new Date().getTime() / 1000) + '.json',
      }
      //
      //  Call putObject to send json to S3 Bucket
      //
      this.s3.putObject(params, (error, data) => {
        this.loading = false
        if (error) {
          console.info(params)
          return console.error(error)
        }
        this.$router.push({ name: 'contact-thankyou' })
      })
    },
  },
}
</script>
