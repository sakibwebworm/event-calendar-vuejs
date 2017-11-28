
<template>
  <div class="container">
    <div class="event_app">
      <!-- Before Calendar -->
      <div class="before_calendar">

        <div class="row first_row">
          <div class="col-lg-2 col-md-2 col-sm-2">
            <div class="month_name_and_year" v-model="headermonthsAndYear.yearName">
              <h2>{{ headermonthsAndYear.yearName }}</h2>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 position_relative">
            <div class="add_event_button">
              <button class="medium-button" @click="showFormOrhide()">Add Event</button>
            </div>
            <div class="absolute" v-bind:class="{ active: isActive }">
              <div class="traingle">

              </div>
              <div class="form" @submit.prevent="addEvent">
                <form>
                  <button class="pull-right" @click="showFormOrhide">X</button>
                  <div class="form_element">
                    <label for="title">Title</label>
                    <br>
                    <input type="text" v-model="formAdd.title" id="title" name="title" placeholder="Title">
                  </div>
                  <div class="form_element">
                    <label for="description">Description</label>
                    <br>
                    <textarea v-validate="'required:true'" name="description" id="description"v-model="formAdd.description"  placeholder="Description" required></textarea>
                  </div>
                  <div class="form_element">
                    <label for="date">Date</label>
                    <br>
                    <input type="text"   v-model="formAdd.formDate" disabled>
                  </div>
                  <div class="form_element">
                    <label for="Time">Time</label>
                    <br>
                    <input type="text" id="Time" name="Time" placeholder="Time" v-model="formAdd.formTime">
                  </div>
                  <div class="form_buttons">
                    <button type="submit" @submit.prevent="addEvent">Save</button>
                    <button class="gray_button" @click="showFormOrhide">Cancel</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
          <div class="col-lg-5 col-md-5 col-sm-5 position_relative">
            <div class="search">
              <input type="text" class="fa fa-search" id="search" name="search" placeholder="Search Events Here....">
            </div>
            <div class="absolute">
              <div class="traingle">

              </div>
              <div class="search_result">
                <div class="search_result_block selected_block">
                  <div class="search_result_date">
                    14 Oct
                  </div>
                  <div class="search_result_text">
                    <h3>Meeting About UI</h3>
                    <p>"This is by far the best beginner JavaScript book on the market today. I'm a JavaScript instructor and this is my new classroom book.</p>
                  </div>
                  <div class="search_result_time">
                    14.30
                  </div>
                </div>
                <div class="search_result_block">
                  <div class="search_result_date">
                    14 Oct
                  </div>
                  <div class="search_result_text">
                    <h3>Meeting About UI</h3>
                    <p>"This is by far the best beginner JavaScript book on the market today. I'm a JavaScript instructor and this is my new classroom book.</p>
                  </div>
                  <div class="search_result_time">
                    14.30
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3 pull-right">
            <div class="month-navigator">
              <button class="small-button" @click="setCurrentMonth(1)"><</button>
              <span class="month_name" v-model="headermonthsAndYear.monthName">{{ headermonthsAndYear.monthName }}</span>
              <button class="small-button" @click="setCurrentMonth(-1)">></button>
            </div>
          </div>
        </div>

        <div class="days">
          <ul>
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
        </div>
      </div>
      <!-- Calendar -->
      <div class="calendar">
        <ul>
          <li v-for="day in daysInMonth"> <div class="date_cell">
            <div class="date" v-model="day.date">
              <span>{{ day.date }}</span>
            </div>
            <div v-if="day.events.length>0">
              <h4>
                {{ day.events[0]["title"] }}
              </h4>
              <p v-if="day.events.length>0">{{ day.events[0]["description"]}}</p>
              <div class="event_time">
                14.50
              </div>
              <div v-if="day.events.length>1" class="event_more">+{{ day.events.length }}</div>
            </div>

            <div class="overlay">
              <a href="#" @click="populateForm(day, $event)"><i class="fa fa-plus fa-3x" aria-hidden="true"></i></a>
              <a href="#" v-if="day.events.length>0" @click="eventRoute(day, $event)"><i class="fa fa-pencil-square-o fa-3x" aria-hidden="true"></i></a>
            </div>
          </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from 'moment';
  export default {
    name: 'CalendarComponent',
    data () {
      return {
        currentMonth:0,
        daysInMonth:[],
        formAdd:{
          id:moment().date(),
          title:'',
          description:'',
          date:'',
          formDate:moment().format("MM.DD.YYYY"),
          formTime:moment().format("HH:mm")
        },
        headermonthsAndYear:{
          yearName:'',
          monthName:'',
          monthAndYearvalue:''
        },
        isActive:false

      }
    },
    created(){
      this.setCurrentMonthAndYear();
      this.getDaysArrayByMonth();
    },
    methods:{
      getDaysArrayByMonth() {
        this.daysInMonth=[];
        var firstDay=moment().subtract(this.currentMonth, 'months').date(1).dayOfYear();
        var lastDay=moment().subtract(this.currentMonth, 'months').date(moment().daysInMonth()).dayOfYear();
        var today =moment().dayOfYear(firstDay);
        var sunday = today.day("Sunday").dayOfYear()-1;
        var LastcalendarDay=(lastDay+42)-(lastDay-sunday);
        var arrDays = [];
        var id=41;
        while(LastcalendarDay!=sunday) {
          var current = moment().dayOfYear(LastcalendarDay);

          arrDays.push(this.setCalendarValue(current,id));
          id--;
          LastcalendarDay--;
        }
        this.daysInMonth=arrDays.reverse() ;
      },
      setCalendarValue(current,id){
        return {
          id:id,
          date:current.date(),
          events:this.setEvents(id),
          fullDate:current.format("MM.DD.YYYY"),
          time:moment().format("HH:mm")
        }
      },
      setCurrentMonth(value){
        this.currentMonth=this.currentMonth + value;
        this.setCurrentMonthAndYear();
        this.getDaysArrayByMonth();
      },
      setEvents(id){
        var allEvents=JSON.parse(localStorage.getItem(this.headermonthsAndYear["monthAndYearValue"]));
        if(allEvents !==null){
          return allEvents[id]["events"];
        }
        else {
          return [];
        }
      },
      setCurrentMonthAndYear(){

        this.headermonthsAndYear={
          yearName: moment().subtract(this.currentMonth, 'months').format("MMMM YYYY"),
          monthName: moment().subtract(this.currentMonth, 'months').format("MMMM"),
          monthAndYearValue:moment().subtract(this.currentMonth, 'months').format("MMYYYY")
        };
      },
      showFormOrhide(){
        (this.isActive)? this.isActive=false: this.isActive=true;
      },
      grabEventsFromMonth(){
        return this.daysInMonth.filter(function(day){
          return day.events.length>0;
        });
      },
      addEvent(){
        this.daysInMonth[this.formAdd.id].events.push({
          title: this.formAdd.title,
          description: this.formAdd.description,
          time: this.formAdd.formTime,
          id: this.formAdd.id
        });
        this.showFormOrhide();
        console.log(this.grabEventsFromMonth());
        localStorage.setItem(this.headermonthsAndYear["monthAndYearValue"], JSON.stringify(this.daysInMonth));
      }
      ,
      populateForm(day,event){
        this.formAdd={
          id:day.id,
          title:'',
          date:day.date,
          description:'',
          formDate:day.fullDate,
          formTime:day.time,
          fullDate:day.fullDate
        }
        this.showFormOrhide();
      },
      eventRoute(day,event){
        this.$router.push({ name: 'Event', params: {
          events: day.events,
          date:day.fullDate,
          fullMonth:this.daysInMonth,
          numericDate:day.id,
          numericMonthAndYear:this.headermonthsAndYear["monthAndYearValue"]
        }})
      }
    },
    watch: {
      currentMonth: function () {
        this.setCurrentMonthAndYear();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .active{
    display:block;
  }
</style>
