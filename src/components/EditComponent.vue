<template>
  <div class="event_app">
    <div class="container">
      <div class="before_calendar events_align">
        <div class="row first_row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="month_name_and_year event_day">
              <h2>{{date}}</h2>
            </div>
          </div>
        </div>
        <form @submit.prevent="save">
          <div class="form_element">
            <label for="title">Title</label>
            <br>
            <input v-model="event.title" type="text" id="title" name="title" placeholder="Title">
          </div>
          <div class="form_element">
            <label for="description">Description</label>
            <br>
            <textarea v-model="event.description" name="description" id="description"  placeholder="Description"></textarea>
          </div>
          <div class="form_element">
            <label for="date">Date</label>
            <br>
            <input v-model="fullDate" type="text" id="date" name="date" disabled>
          </div>
          <div class="form_element">
            <label for="Time">Time</label>
            <br>
            <input v-model="event.time" type="text" id="Time" name="Time" placeholder="Time">
          </div>
          <div class="form_buttons">
            <button @submit.prevent="save" type="submit">Save</button>
            <button @submit.prevent="cancel" class="gray_button">Cancel</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    name: 'Edit',
    data () {
      return {
        event: this.$route.params.event,
        id:this.$route.params.id,
        fullMonth:this.$route.params.fullMonth,
        numericMonthAndYear:this.$route.params.numericMonthAndYear,
        fullDate:this.$route.params.fullDate,
        index:this.$route.params.index,
        date:this.$route.params.date
      }
    },
    methods: {
        save(){
          this.fullMonth[this.id].events[this.index]={
            description:this.event.description,
            id:this.event.id,
            time:this.event.time,
            title:this.event.title
          };
          localStorage.setItem(this.numericMonthAndYear, JSON.stringify(this.fullMonth));
          this.$router.push({ name: 'CalendarComponent'});
        },
        cancel(){
          this.$router.push({ name: 'CalendarComponent'});


        }
      },
      computed: {


      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
