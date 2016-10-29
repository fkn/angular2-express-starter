import {Component, OnInit,NgModule} from "@angular/core";
import {Pipe, PipeTransform } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ApiService } from "../../../service/api.service";
import { Location }from '@angular/common';




@Component({
    selector: "form",
    templateUrl: `client/modules/groceries/item/groceries-item.component.html`,

})
@NgModule({

    declarations: [KeysPipe]
})
export class GroceriesItemComponent implements OnInit {
    private groceries: any = {};


    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private location: Location) {}


    ngOnInit() {
        this.route.params.forEach( (params: Params) => {
            this.apiService
                .getGrocery(params.id)
                .subscribe( (data) => { this.groceries = data; } );
        });

    }
    goBack(): void {
        this.location.back();
    }

}

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
    transform(value: any, args?: any[]): Object[] {
        let keyArr: any[] = Object.keys(value),
            dataArr = [],
            keyName = args[0];

        keyArr.forEach((key: any) => {
            value[key][keyName] = key;
            dataArr.push(value[key])
        });

        if(args[1]) {
            dataArr.sort((a: Object, b: Object): number => {
                return a[keyName] > b[keyName] ? 1 : -1;
            });
        }

        return dataArr;
    }
}

