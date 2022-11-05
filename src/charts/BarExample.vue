<template>
  <div class="example">
    <apexchart ref="donut" width="350" type="bar" :options="chartOptions" :series="series"></apexchart>
    <div>
      <button style="display:none;" id="updatebtn" @click="updateChart">Update!</button>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    

        var response = await fetch("api/getsurveyteam");
        if (response.ok) {
        var heroes = await response.json();
      //  console.log(heroes);
      // document.getElementById('test1').innerHTML ="sssss";
       var mapping = heroes.map(a => a.count);
       //console.log(mapping);
        //options.name = { labels: heroes.map(a => a._id) };
    }

       
    this.series = [{
    data: mapping
   }]

    },
  name: 'DonutExample',
 
  data: function() {
    
    return {
      chartOptions: {
        labels: ["Avengers", "Justice League"],
      },
      series: [{
        name: 'series-1',
        data: [0, 0]
      }]
    }
  },
  methods: {
    
    async updateChart() {
       

        var response = await fetch("api/getsurveyteam");
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
