import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button-md',
  standalone: true,
  imports: [],
  templateUrl: './primary-button-md.component.html',
  styleUrl: './primary-button-md.component.css'
})
export class PrimaryButtonMdComponent {
  @Input() buttonText: string = 'Button Text';
}