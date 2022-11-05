<template>
  <div class="example">
    <label class="col-sm-4">Favourite Team</label>
          <select @change="updateChart" id="team2"  >
             
              <option value="Avengers">Avengers</option>
              <option value="JLA">Justice League</option>
          </select>
    <apexchart width="500" height="350" type="area" :options="chartOptions" :series="series"></apexchart>
    <div>
       <button style="display:none;" id="updatebtn" @click="updateChart">Update!</button>
    </div>
  </div>
  
</template>

<script>

export default {
  async mounted() {
  

        var response = await fetch("api/getsurveysubject");
        if (response.ok) {
        var heroes = await response.json();
      //  console.log(heroes);
      // document.getElementById('test1').innerHTML ="sssss";
       var mapping = heroes.map(a => a.count);
      // console.log(mapping);
        //options.name = { labels: heroes.map(a => a._id) };
    }

       
    this.series = [{
    data: mapping
   }]

    },
  name: 'AreaExample',
  data: function() {
    return {
      chartOptions: {
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ["7015", "7980", "7745", "7880"],
        },
        tooltip: {
            fixed: {
                enabled: false,
                position: 'topRight'
            }
        }
      }
      ,
      series: [{
          name: 'series1',
          data: [0, 0, 0, 0]
      }]
    }
  },
  methods: {
    
    async updateChart() {
       // const max = 90;
       // const min = 20;
        var team= document.getElementById("team2").value;
       // alert(team);
        var response = await fetch("api/getsurveysubject?team="+team);
        if (response.ok) {
        var heroes = await response.json();
       // console.log(heroes);
      // document.getElementById('test1').innerHTML ="sssss";
       var mapping = heroes.map(a => a.count);
      // console.log(mapping);
        //options.name = { labels: heroes.map(a => a._id) };
    }

       
    this.series = [{
    data: mapping
   }]
      }
  }
}
</script>
