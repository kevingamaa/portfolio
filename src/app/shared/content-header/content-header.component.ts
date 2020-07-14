import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  @Input() public defaultButtons: boolean = true;
  @Input() public addRoute: any;

  @Output() public onAddClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onSearch: EventEmitter<any> = new EventEmitter<any>();

  public openSearch: boolean;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addPage() {
    if(this.addRoute) {
      this.router.navigate(this.addRoute)
    }
    this.onAddClick.emit();
  }




  search({value}) {
    this.onSearch.emit(value)
  }
}
