import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../../service/api.service";
import {Router} from "@angular/router";

@Component({
    selector: "measure",
    templateUrl: `client/modules/measure/all/measure-all.component.html`
})
export class MeasureAllComponent implements OnInit {
    private measuresArray: any[];
    private measures: any = {};
    private typesArray: String[] = ['weight', 'volume'];
    private result = 0;
    private powerFirst: number;
    private powerSecond: number;

    constructor(private apiService: ApiService, private rout: Router) { }
    ngOnInit() {
        this.apiService
            .getMeasures()
            .subscribe((data) => { this.measuresArray = data; });
    }

    delete(id: number) {
        this.refresh();
        this.apiService
            .deleteMeasure(id)
            .subscribe(
            date => JSON.stringify(date),
            error => alert(error)
            );
    }

    createMeasure(measures: any, type: String) {
        this.refresh();
        this
            .apiService
            .postCreateMeasure(measures, type)
            .subscribe(
            date => console.log(date),
            error => alert(error)
            );
    }
    refresh() { 
        this.apiService
            .getMeasures()
            .subscribe((data) => { this.measuresArray = data; });
    }
    goMeasureId(id: number) {
        this.rout.navigate(['/measure', id]);
    }

    convertMeasure(firstValue: number, firstName: String, secondName: String) {

        for (let i = 0; i < this.measuresArray.length; i++) {
            if (this.measuresArray[i].name === firstName) {
                this.powerFirst = this.measuresArray[i].power;
            }
            if (this.measuresArray[i].name === secondName) {
                this.powerSecond = this.measuresArray[i].power;
            }
        }
        this.result = (firstValue * this.powerFirst) / this.powerSecond;
    }




}