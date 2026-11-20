// Get the canvas element from the page
const canvas = document.getElementById('myChart');

// Our data
const places = ['Campusgarten', 'Mühlbach', 'Interactive Media Lab', 'Mensa', "Sonnenpark"];
const votes = [12, 9, 5, 4, 7];

// Create a new chart: new Chart(where, configuration)
new Chart(canvas, {
  type: 'pie',                 // try: 'line', 'pie', 'doughnut'
  data: {
    labels: places,         // labels on the x-axis
    datasets: [{
      label: 'Number of votes',
      data: votes              // values (same order as labels!)
    },
  {
    label:"Number of votes",
    data: votes,
  }
  ]
  },
  options: {
    scales: {
      y: { beginAtZero: true } // y-axis starts at 0
    }
  }
});