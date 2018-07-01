import { Component, OnChanges, Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector: "pm-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class starComponent implements OnChanges {
  @Input()  rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges():void{
        this.starWidth = this.rating*86/4.85;
    }
    OnClick():void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}