import { Component, Input ,Output, EventEmitter, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { wishItem } from '../../shared/models/wishItem';

const filters = [
  (item : wishItem) => item,
  (item : wishItem) => item.isDone,
  (item : wishItem) => !item.isDone]
  
@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  

  filteredValue : string = '0';

  @Input() filter : any;
  @Output() filterChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateFilter(0);
  }

  updateFilter(value : any){
    this.filter = filters[value]
    this.filterChange.emit(filters[value]);
  }

  
}
