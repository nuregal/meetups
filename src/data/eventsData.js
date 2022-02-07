const events = [
  { id: 1, name: "First meetup", date: "2022/02/25", time: "15:00",attend:true,review: "" },
  { id: 2, name: "Second meetup", date: "2022/02/5", time: "21:00",attend:false,review: "" },
  { id: 3, name: "Third meetup", date: "2022/02/5", time: "09:30",attend:false,review: "" },
  { id: 4, name: "Fourth meetup", date: "2022/02/5", time: "19:00",attend:false,review: "" },
  { id: 5, name: "Fifth meetup", date: "2022/02/5", time: "22:00",attend:false,review: "" },
  { id: 6, name: "Sixth meetup", date: "2022/02/5", time: "01:00",attend:false,review: "" },
];

export const handleLocalStorage =  {
  load: function() {
    let meetups = JSON.parse(localStorage.getItem('meetups') || "[]");
    return meetups
  },
   save: function(meetups){
    localStorage.setItem("meetups",JSON.stringify(meetups));
  },

  clear: function() {
    localStorage.removeItem("meetups")
  }

}

export default events;
