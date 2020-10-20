import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() person: Person;

  constructor(
    private chanDetectorRef : ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  public check(){
    console.log("CHILD refreshing");
  }

  public reassign(){
    this.chanDetectorRef.detectChanges();
  }

}
