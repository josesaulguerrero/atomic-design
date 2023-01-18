import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
	@Input()
	public src = '/assets/images/broken-link.png';

	@Input()
	public altText = 'Custom Icon';

	@Input()
	public width? = 50;

	@Input()
	public height? = 50;

	public constructor() {}
}
