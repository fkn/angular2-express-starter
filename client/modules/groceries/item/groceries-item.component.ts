import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ApiService} from "../../../service/api.service";
import {Location}from '@angular/common';

@Component({
    selector: "form",
    templateUrl: `client/modules/groceries/item/groceries-item.component.html`,

})
export class GroceriesItemComponent implements OnInit {
    private groceries: any = {};
    private files;
    public file_srcs: string = [];


    constructor(private apiService: ApiService,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location,
                private changeDetectorRef: ChangeDetectorRef) {
    }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.apiService
                .getGrocery(params.id)
                .subscribe((data) => {
                    this.groceries = data;
                    this.apiService
                        .getBlobImage(data.ImageId)
                        .subscribe((blobData)=> {
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

    fileChange(input) {
        //console.log(this.file_srcs);
        this.readFiles(input.files);
        this.updateImage(this.file_srcs);
    }

    updateImage(file) {
        this.apiService.updateImage(this.groceries.id, file);
    }

    readFile(file, reader, callback) {
        // Set a callback funtion to fire after the file is fully loaded
        reader.onload = () => {
            // callback with the results
            callback(reader.result);
        };

        // Read the file
        reader.readAsDataURL(file);
        //console.log(file);
    }

    readFiles(files, index = 0) {
        // Create the file reader
        let reader = new FileReader();

        // If there is a file
        if index in files{
            // Start reading this file
            this.readFile(files[index], reader, (result) => {
                // After the callback fires do:
                this.file_srcs.push(result);
                this.readFiles(files, index + 1);// Read the next file;
            });
        } else {
            // When all files are done This forces a change detection
            this.changeDetectorRef.detectChanges();
        }
    }

    showRecipe(id: number) {
        this.router.navigate(['/grocery/recipe', id]);
    }

}


