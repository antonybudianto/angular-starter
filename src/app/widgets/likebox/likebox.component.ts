import {Component, Input, Output, EventEmitter} from 'angular2/angular2';

@Component({
	selector: 'likebox',
	templateUrl: 'app/widgets/likebox/likebox.html',
	styleUrls: ['app/widgets/likebox/likebox.css']
})
export class LikeboxComponent {
	@Input() count:number;
	@Output() like:EventEmitter<any>;

	constructor() {
		this.like = new EventEmitter();
	}

	addLike() {
		this.count++;
		this.like.next(this.count);
	}
}