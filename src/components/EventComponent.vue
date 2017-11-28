<template>
  <div class="event_app">
    <div class="container">
      <div class="before_calendar events_align">
        <div class="row first_row">
          <div class="col-lg-12 col-md-12 col-sm-12">
             <div class="month_name_and_year event_day">
               <button @click="routeToCalendar" class="pull-left">Go Back!</button>

               <h2>{{ date }}</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="events_list" v-for="(event,index) in events">
            <div class="col-lg-3 col-md-3 col-sm-3" >
              <h2 v-model="event.time">{{ event.time }}</h2>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <h3 v-model="event.title">{{ event.title }}</h3>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
              <a href="#" @click="editRoute(index)"><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i></a>
              <a href="#" @click="deleteEvent(index)"><i class="fa fa-trash-o fa-2x" aria-hidden="true"></i></a>


            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Event',
    data () {
      return {
        date:this.$route.params.date,
        id:this.$route.params.numericDate,
       events:this.$route.params.events,
        fullMonth:this.$route.params.fullMonth,
        numericMonthAndYear:this.$route.params.numericMonthAndYear,
        fullDate:this.$route.params.date
      }
    },
    created(){

    },
    methods: {
      deleteEvent(index){
        this.events.splice(index, 1);
        this.fullMonth[this.id].events.splice(index, 1);
        localStorage.setItem(this.numericMonthAndYear, JSON.stringify(this.fullMonth));
      },
      editRoute(index){
        this.$router.push({ name: 'Edit', params: {
          event: this.events[index],
          id:this.id,
          fullMonth:this.fullMonth,
          fullDate:this.fullDate,
          numericMonthAndYear:this.numericMonthAndYear,
          index:index
        }});
      },
      routeToCalendar(){
        this.$router.push('/');
      }
    }}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
