import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() transmitter = new EventEmitter<string>();
  term: string = '';

  onFormSubmit(event: any){

    event.preventDefault();

    console.log(this.term);
    
    this.transmitter.emit(this.term)
  }
}
