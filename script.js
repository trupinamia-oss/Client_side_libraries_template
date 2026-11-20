// Get the canvas element from the page
const canvas = document.getElementById('myChart');

// Our data
const places = ['Campusgarten', 'Mühlbach', 'Interactive Media Lab', 'Mensa', 'Sonnenpark'];
const votes = [12, 9, 5, 4, 7];
const votesLastYear = [8, 11, 3, 6, 5];   // NEU: eigene Werte, auch 5 Stück

// Create a new chart: new Chart(where, configuration)
new Chart(canvas, {
  type: 'bar',                 // 'bar', damit man beide Jahre vergleichen kann
  data: {
    labels: places,
    datasets: [
      {
        label: 'Number of votes',
        data: votes
      },
      {
        label: 'Votes last year',   // NEU: anderes Label
        data: votesLastYear         // NEU: andere Daten
      }
    ]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});