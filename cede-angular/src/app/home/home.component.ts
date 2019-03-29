import {Component} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl:'./home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent{
    textString: string="Víctor Martínez";
    textNumber: number=27;
    textBoolean: boolean=false;
    textArray: string[]=["Juan","Luis", "Andrés"];
    people: Person[];

    constructor(){
        this.fillPeople();
    }
    fillPeople(){
        this.people=[];
        this.people.push({ Name:'Andrés', Age:30 });
        this.people.push({ Name:'Juan', Age:23 });
        this.people.push({ Name:'Víctor', Age:12 });
        this.people.push({ Name:'Luis', Age:32 });
        this.people.push({ Name:'Pedo', Age:18 });
        this.people.push({ Name:'Miguel', Age:22 });
        this.people.push({ Name:'Ana', Age:21 });
    }
    changeValue(event){
        this.textString=event;
    }
    showAlert(){
        alert(this.textString);
    }

}

export interface Person {
    Name: string,
    Age?: number
}