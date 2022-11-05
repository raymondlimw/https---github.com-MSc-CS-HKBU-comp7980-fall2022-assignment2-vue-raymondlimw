<template>
  <div class="container" id="app">
    <div class="jumbotron">
    <h1>Please vote!!</h1>
         
    </div>
 <div class="row">
    <label class="col-sm-4">Favourite Team</label>
          <select  class="col-sm-2" id="team"  >
             
              <option value="Avengers">Avengers</option>
              <option value="JLA">Justice League</option>
          </select>
    </div>
    <br>
    <div class="row">
         <label class="col-sm-4">Favourite Car</label>
          <select  class="col-sm-2" id="car"  >
              
              <option value="Tesla">Tesla</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
          </select>
    </div>
    <br>
    <div class="row">

           <label class="col-sm-4">Favourite Subject</label>
          <select  class="col-sm-2" id="subject"  >
            
              <option value="7105">7015</option>
              <option value="7980">7980</option>
               <option value="7745">7745</option>
                <option value="7880">7880</option>
          </select>
         
          <label id="test1"></label>
    </div>
    <br>


 <div  class="row">
  <label class="col-sm-4"></label>
       <button class="btn btn-primary col-sm-2" @click="submitform">submit</button>
    </div>

    
    
        <div id ="d1" class="menu-item"><router-link to="/bar">Bar Chart (Team)</router-link></div>
        <div id ="d2"  class="menu-item"><router-link to="/donut">Donut Chart (Car)</router-link></div>
        <div id ="d3"  class="menu-item"><router-link to="/area">Area Chart (Subject) </router-link></div>
         
    

   

    <router-view></router-view>

    
         
  </div>


     

</template>



<script>


export default {
  name: 'app',
  
  methods: {
   async submitform() {

   var data = new FormData();
  var team= document.getElementById("team").value;
 var car =  document.getElementById("car").value;
 var subject= document.getElementById("subject").value;
/*
 fetch("api/submit?car="+car+"&team="+team+"&subject="+subject)
    .then((response) => {
      var data =  response.json();
      document.getElementById('test1').innerHTML = data.id;
      //return response.json();
    })  
      .catch(error => {
        document.getElementById('test1').innerHTML = `Error: ${error}`;
        console.error('There was an error!', error);
    });
    */
/*
  var response = await fetch("http://localhost:3000/api/survey/submit?car="+car+"&team="+team+"&subject="+subject, {
  mode: 'no-cors'
});
if(response.ok)
{
  alert();
  var heroes =  response.json();
  document.getElementById('test1').innerHTML =heroes;
}
*/
    var response = await fetch("api/submit?car="+car+"&team="+team+"&subject="+subject);
   
    if (response.ok) {
        var heroes = await response.json();
        //alert(heroes.id);
       //document.getElementById('test1').innerHTML ="sssss";
       document.getElementById("updatebtn").click();
    }

      }
    }
   
      }

</script>

<style>
a {
  display: inline-block;
  margin: 5px;
  border: 1px solid #ddd;
  background: #eee;
  box-shadow: 2px 3px 4px -3px #ccc;
  color: #222;
  padding: 4px 10px;
  text-decoration: none;
}

.router-link-active {
  color: #fff;
  background: #419EF7;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.apexcharts-canvas {
  margin: 0 auto;
}
</style>

