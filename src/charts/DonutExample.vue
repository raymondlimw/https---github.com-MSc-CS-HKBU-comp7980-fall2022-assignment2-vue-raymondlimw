<template>
  <div class="example">
    <apexchart ref="donut" width="350" type="donut" :options="chartOptions" :series="series"></apexchart>
    <div>
      <button style="display:none;" id="updatebtn" @click="updateChart">Update!</button>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    var response = await fetch("api/getsurveycar");
        if (response.ok) {
        var heroes = await response.json();
     //   console.log(heroes);
      // document.getElementById('test1').innerHTML ="sssss";
       var mapping = heroes.map(a => a.count);
      // console.log(mapping);
        //options.name = { labels: heroes.map(a => a._id) };
    }

       
    this.series = mapping

    },
  name: 'DonutExample',
  data: function() {
    return {
      chartOptions: {
        labels: ["Tesla", "Toyota", "Honda"],
      },
      series: [0, 0, 0],
    }
  },
  methods: {
   
        
    async updateChart() {
       

        var response = await fetch("api/getsurveycar");
        if (response.ok) {
        var heroes = await response.json();
      //  console.log(heroes);
      // document.getElementById('test1').innerHTML ="sssss";
       var mapping = heroes.map(a => a.count);
      // console.log(mapping);
        //options.name = { labels: heroes.map(a => a._id) };
    }

       
    this.series = mapping
   
      }
  }
}
</script>
