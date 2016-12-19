import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {ApiService} from "../../../service/api.service";
import {Location}from '@angular/common';
import {getFileBlobs} from "image-blobber";

@Component({
    selector: "form",
    templateUrl: `client/modules/groceries/item/groceries-item.component.html`,

})
export class GroceriesItemComponent implements OnInit {
    private groceries: any = {};
    private files;


    constructor(private apiService: ApiService,
                private route: ActivatedRoute,
                private location: Location) {
    }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.apiService
                .getGrocery(params.id)
                .subscribe((data) => {
                    this.groceries = data;
                    this.apiService
                        .getBlobImage(data.ImageId)
                        .subscribe((blobData)=>{
                            this.files = blobData.file;
                        });
                });
        });
    }

    goBack(): void {
        this.location.back();
    }

    updateGrocery(groceries: any) {
        this.apiService.updateGrocery(groceries).subscribe(this.groceries = groceries);
    }

    updateImage(fileInput: any) {

        /*var files = fileInput.srcElement.files;
        console.log(files);
        this.apiService.updateImage(this.groceries.id, files[0]);*/
    }

}


