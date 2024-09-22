import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, viewChild } from '@angular/core';
import Chart from "chart.js/auto";

@Component({
  selector: 'app-sales-history',
  standalone: true,
  imports: [],
  templateUrl: './sales-history.component.html',
  styleUrl: './sales-history.component.css'
})
export class SalesHistoryComponent {
  chart = viewChild.required<ElementRef>('chart');
  chart2 = viewChild.required<ElementRef>('chart2');

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(){
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
      this.createChart2();
    }
  }

  createChart(){
    new Chart(this.chart().nativeElement, {
      type: "line",
      data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dev', 'Jan'],
        datasets: [
          {
            label: 'Ventas',
            data: [100, 102, 105, 110, 115, 120],
            borderColor: 'rgb(255,99,132)',
            backgroundColor: 'rgb(255,99,132, 0.5)',
            fill: 'start'
          }
        ]
      },
      options:{
        maintainAspectRatio: false,
        elements :{
          line: {
            tension: 0.4
          }
        }
      }
    });
  }

  createChart2(){
    new Chart(this.chart2().nativeElement,{
      type: 'bar',
      data:{
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dev', 'Jan', 'Dev', 'Jan'],
      datasets: [{
        label: 'Ventas por mes',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
     }]},
     options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
    });
  }

}
