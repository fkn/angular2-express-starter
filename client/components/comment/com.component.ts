import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";
import { ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: "fs-comments",
    templateUrl: `client/components/comment/com.component.html`
})

export class CommentComponent implements OnInit {

    private commentsArray: String[] = [];

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.refresh();
    }

    sendComment(name: String, comment: String) {
        this.route.params.forEach((params: Params) => {
            this.apiService
                .sendComment(name, comment, params.id)
                .subscribe(
                date => date,
                error => console.log("SEND_COMMENT: "error)
                );
            this.refresh();
        });
    }

    refresh() {
        this.route.params.forEach((params: Params) => {
            this.apiService
                .getComments(params.id)
                .subscribe((data) => { this.commentsArray = data; });
        });
    }
}
