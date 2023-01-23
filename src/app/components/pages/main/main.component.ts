import { Chat } from 'src/app/modules/core/models/chat.model';

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	public chat: Chat = {
		details: {
			avatar: 'https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg',
			lastTimeOnline: new Date(),
			name: 'Alicia Torreaux',
		},
	};

	constructor() {}

	ngOnInit(): void {}
}
