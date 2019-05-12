var writeCalendar = new Vue({
  el:'#calendar',
  data:{
    Year:[],
    Month:[],
    Day:[],
  },
  methods:{
    setYear:function(year){
      this.Year = year
      console.log('set')
    },
    setMonth:function(month){
      this.Month = month
      console.log('set')
    },
    setDate:function(day){
      this.Day = day
      console.log('set')
      this.setCss()
    },
    setCss:function(){
    var client_w = document.getElementById('all').clientWidth;
      console.log(client_w)
      console.log(this.Year.length)
      //console.log(parseInt(client_w) / parseInt(this.year.length))
      $('#headyear').css({
        "width": 100//client_w / this.Year.length
      })
      $('#headmonth').css({
        
      })
      $('#headday').css({
        
      })
    }
  }
})
