const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Weekly Sales',
            data: [120, 190, 300, 500, 200, 300, 450],
            borderColor: '#ff5722',
            fill: false,
            tension: 0.5
        }]
    }
});

const customerCtx = document.getElementById('customerChart').getContext('2d');
const customerChart = new Chart(customerCtx, {
    type: 'bar',
    data: {
        labels: ['Morning', 'Afternoon', 'Evening'],
        datasets: [{
            label: 'Customers by Time of Day',
            data: [150, 300, 200],
            backgroundColor: ['#ff8a65', '#ff7043', '#d84315']
        }]
    }
});
