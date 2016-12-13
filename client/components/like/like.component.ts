import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";
import { ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: "fs-likes",
    templateUrl: `client/components/like/like.component.html`
})

export class LikeComponent implements OnInit {

    private likesArray: any = {};

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.refresh();
    }

    addLike() {
        this.route.params.forEach((params: Params) => {
            this.apiService
                .addLikes(params.id)
                .subscribe(
                date => date,
                error => console.log("ADD_LIKE: "+error)
                );
            this.refresh();
        });
    }

    refresh() {
        this.route.params.forEach((params: Params) => {
            this.apiService
                .getLikes(params.id)
                .subscribe(
                date => this.likesArray = date,
                error => console.log("REFRESH_LIKE: "+error)
                );
        });
    }
}
