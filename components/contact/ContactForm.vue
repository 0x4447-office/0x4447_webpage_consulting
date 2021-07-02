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
            id="contact_first_name"
            v-model="formData.firstName"
            type="text"
            name="contact_first_name"
            minlength="1"
            required
            class="form-control"
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
            id="contact_last_name"
            v-model="formData.lastName"
            type="text"
            name="contact_last_name"
            minlength="1"
            required
            class="form-control"
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
          <label for="contact_email"> Email </label>

          <!-- Input -->
          <input
            id="contact_email"
            v-model="formData.email"
            type="email"
            name="contact_email"
            required
            class="form-control"
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
          <label for="contact_company_name"> Company Name </label>

          <!-- Input -->
          <input
            id="contact_company_name"
            v-model="formData.companyName"
            type="text"
            name="companyName"
            required
            class="form-control"
            placeholder="Example, LLC"
          />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="form-group mb-5">
          <!-- Label -->
          <label for="contact_job_title"> Job Title </label>

          <!-- Input -->
          <input
            id="contact_job_title"
            v-model="formData.jobTitle"
            type="text"
            name="jobTitle"
            required
            class="form-control"
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
          <label for="states">Industry</label>
          <div class="shame__selectpicker">
            <select
              id="states"
              v-model="formData.industry"
              class="selectpicker show-tick show-menu-arrow"
              name="statePicker"
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
          <label for="tags"> AWS Services </label>
          <!-- Input -->
          <div class="shame__selectpicker">
            <select
              id="tags"
              v-model="formData.awsServices"
              class="selectpicker show-tick show-menu-arrow"
              name="contactTags"
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
          <label for="contact_message"> What can we help you with? </label>

          <!-- Input -->
          <textarea
            id="contact_message"
            v-model="formData.message"
            class="form-control"
            required
            minlength="10"
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

        <button id="submit_button" type="submit" class="btn btn-primary lift">
          {{ buttonText }}
        </button>
      </div>
    </div>
    <!-- / .row -->
    <div id="alert" class="mt-5 alert alert-light" role="alert" hidden>
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
    jQuery('.selectpicker').selectpicker()
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

      const json = {
        subject: 'Email from Consulting page.',
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
