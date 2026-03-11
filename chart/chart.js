import { LightningElement, api } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import chartjs from '@salesforce/resourceUrl/ChartJs';

export default class Chart extends LightningElement {
    chart;
    chartJsInitialized = false;

    @api chartType = 'bar';
    @api labels = ['Web', 'Email', 'Phone', 'Social Media', 'Other'];
    @api data = [12, 19, 3, 5, 2];
    @api title = 'My Chart';

    //using this to load chart js and initialize chart according to the chart type
    renderedCallback() {
        if (this.chartJsInitialized) {
            return;
        }
        this.chartJsInitialized = true;

        Promise.all([
            loadScript(this, chartjs + '/ResizeObserver.js'),
            loadScript(this, chartjs + '/chart.umd.min.js')
        ]).then(() => {
            if(this.chartType == 'pie') {
                this.initializePieChart();
            } else if(this.chartType == 'bar') {
                this.initializeBarChart();
            } else if(this.chartType == 'doughnut') {
                this.initializeDoughnutChart();
            } else if(this.chartType == 'line') {
                this.initializeLineChart();
            } else if(this.chartType == 'polarArea') {
                this.initializePolarAreaChart();
            }
        }).catch(error => {
            console.error('Error loading Chart.js', error);
        });
    }

    //Initialize the bar chart configuration
    initializeBarChart() {
        const ctx = this.template.querySelector('canvas.chart').getContext('2d');
        this.chart = new window.Chart(ctx, {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: [{
                    label: this.title,
                    data: this.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: "Lead Sources"
                    }
                }
            }
        });
    }

    //Initialize the pie chart configuration
    initializePieChart() {
        const ctx = this.template.querySelector('canvas.chart').getContext('2d');
        new window.Chart(ctx, {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: [{
                    label: this.title,
                    data: this.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: "Lead Sources",
                        position : 'right'
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }
            },
        });
    }

    //Initialize the Doughnut chart configuration
    initializeDoughnutChart() {
        const ctx = this.template.querySelector('canvas.chart').getContext('2d');
        new window.Chart(ctx, {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: [{
                    label: this.title,
                    data: this.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)',
                        'rgba(255, 159, 64, 0.5)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: "Lead Sources",
                        position : 'right'
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }
            },
        });
    }

    //Initialize the Line chart configuration
    initializeLineChart() {
        const ctx = this.template.querySelector('canvas.chart').getContext('2d');
        new window.Chart(ctx, {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: [{
                    label: this.title,
                    data: this.data,
                    backgroundColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: "Lead Sources",
                        position : 'right'
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }
            },
        });
    }

    //Initialize the PolarArea chart configuration
    initializePolarAreaChart() {
        const ctx = this.template.querySelector('canvas.chart').getContext('2d');
        new window.Chart(ctx, {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: [{
                    label: this.title,
                    data: this.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(153, 102, 255, 0.5)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: "Lead Sources",
                        position : 'right'
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }
            },
        });
    }
}