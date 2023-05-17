import { Component } from '@angular/core';

@Component({
  selector: 'app-border-box',
  templateUrl: './border-box.component.html',
  styleUrls: ['./border-box.component.css']
})
export class BorderBoxComponent {
  // changeColor(border: string): void {
  //   const borderColor = this.getRandomColor();
  //   const borderElement = document.querySelector(`.${border}-border`) as HTMLElement;
  //   borderElement.style.backgroundColor = borderColor;

  boxColor: string = 'black'; // Initial color

  handleClick(): void {
    if (this.boxColor === 'black') {
      this.boxColor = 'red';
    } else {
      this.boxColor = 'black';
    }
  }
}

//   getRandomColor(): string {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

