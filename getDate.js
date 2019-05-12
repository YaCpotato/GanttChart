var getDate = new Vue({
  el: '#getDate',
  data: {
    default:moment(),
    DatePickerFormat: 'yyyy/MM/dd',
    StartDate:'',
    EndDate:'',
    Period:0,
    MonthPeriod:0,
    YearPeriod:0,
    Year:[],
    Day:[],
    Daycount:[],
    Month:[]
  },
  methods:{
    DateFormat:function(date){
      return moment(date).format('YYYY/MM/DD')
    },
    MomentFormat:function(date){
      return moment(date)
    },
    PeriodCalc:function(stdate,endate){
      if(this.StartDate!=='' && this.EndDate!==''){
        console.log('Period Calc')
        this.Period = moment(this.EndDate).diff(moment(this.StartDate),'days')
        this.PeriodSet = true
        this.setYear()
        this.setMonth()
        this.setDate()
        writeCalendar.setYear(this.Year)
        writeCalendar.setMonth(this.Month)
        writeCalendar.setDate(this.Day)
        return this.Period
      }
    },
    setYear:function(){
      this.YearPeriod = moment(this.EndDate).diff(moment(this.StartDate),'year')
      for(var i=0;i<=this.YearPeriod;i++){
        this.Year[i] = moment(this.StartDate).add(i,'year').year()
      }
      console.log(this.Year)
      console.log(this.Year.length)
    },
    setMonth:function(){
      this.MonthPeriod = moment(this.EndDate).diff(moment(this.StartDate),'month')
      for(var i=0;i<=this.MonthPeriod;i++){
       this.Month[i] = moment(this.StartDate).add(i,'month').month() + 1
      }
      console.log(this.Month)
      console.log(this.Month.length)
    },
    
    setDate:function(){
      for(var i=0;i<=this.Period;i++){
       this.Day[i] = moment(this.StartDate).add(i,'days').date()
      }
      console.log(this.Day)
      console.log(this.Day.length)
    },
  },
  components: {
    vuejsDatepicker
  }
});
