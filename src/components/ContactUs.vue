<template>
    <div class="contactUsContainer">
        <b-col class="contactUsContainerLeftSide">
            <b-row>
                <h2>Contact</h2>
            </b-row>
            <b-row>
                <p>Questions or concerns? 
                    Just fill out the form below and our support 
                    team will get back to you within 24 hours</p>
            </b-row>
        </b-col>
        <b-col class="contactUsContainerRightSide">
                    <div>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <!-- <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
                ></b-form-input>
            </b-form-group> -->

        <b-form-group id="input-group-1" label="" label-for="input-2">
                <b-form-input size="lg" prepend="Large"
                id="input-2"
                v-model="form.firstname"
                required
                placeholder="First Name"
                ></b-form-input>
            </b-form-group>
        <b-form-group id="input-group-2" label="" label-for="input-2">
                <b-form-input size="lg" prepend="Large"
                id="input-2"
                v-model="form.lastname"
                required
                placeholder="Last Name"
                ></b-form-input>
            </b-form-group>


           <b-form-group id="input-group-3" label="" label-for="input-2">
                <b-form-input size="lg" prepend="Large"
                id="input-2"
                v-model="form.phone"
                required
                placeholder="Phone Number"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="" label-for="input-3">
                <b-form-select size="lg" prepend="Large"
                id="input-3"
                v-model="form.services"
                :options="services"
                required
                ></b-form-select>
            </b-form-group>
            <b-button id="contactSubmitBtn" type="submit" variant="primary">Submit Now</b-button>
            </b-form>
            <!-- <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
            </b-card> -->
        </div>
        </b-col>
    </div>
</template>

<script>
 export default {
    data() {
      return {
        form: {
          firstname: '',
          lastname: '',
          phone: '+62',
          services: null,
          checked: []
        },
        services: [{ text: 'Select Service', value: null }, 'Currencies and Cards', 'Manage Expense', 'Cloud Budget'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.firstname = ''
        this.form.lastname = ''
        this.form.phone = ''
        this.form.services = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
.contactUsContainerLeftSide {
   position: absolute;
    width: 1440px;
    height: 500px;
    left: 0px;
    top: 2942px;

background: #FFFFFF;
}

.contactUsContainerLeftSide h2{
    position: absolute;
    width: 445px;
    height: 107px;
    left: 165px;
    top: 117px;

    font-weight: 600;
    font-size: 36px;
    line-height: 43px;

    color: #000000;
}

.contactUsContainerLeftSide p {
    position: absolute;
    width: 434px;
    height: 64px;
    left: 165px;
    top: 213px;

    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    /* or 20px */

    text-align: justify;

    color: #000000;
}

.contactUsContainerRightSide {
    position: absolute;
    width: 255px;
    height: 60px;
    left: 0;
    top: 3059px;
}

.contactUsContainerRightSide #input-group-1, #input-group-2, #input-group-3, #input-group-4 {
    position: absolute;
    border: 1px solid #333333;
    box-sizing: border-box;
    border-radius: 6px;
}

.contactUsContainerRightSide #input-group-1 {
    left: 735px;
    width: 255px;
}

.contactUsContainerRightSide #input-group-2 {
    left: 1020px;
    width: 255px;
}

.contactUsContainerRightSide #input-group-3 {
    left: 735px;
    top: 90px;
    width: 540px;
    /* height: 60px; Gray 1 */
    border: 1px solid #333333;
    box-sizing: border-box;
    border-radius: 6px;
}

.contactUsContainerRightSide #input-group-4 {
    width: 540px;
    /* height: 60px; */
    left: 735px;
    top: 184px; /* Gray 1 */
    border: 1px solid #333333;
    box-sizing: border-box;
    border-radius: 6px;
}

.contactUsContainerRightSide #contactSubmitBtn {
    position: absolute;
    width: 160px;
    height: 50px;
    left: 735px;
    top: 274px;
    text-transform: uppercase;
    background: #ED4C5C;
    border: 1.5px solid #ED4C5C;
    box-sizing: border-box;
    border-radius: 6px;
}
</style>