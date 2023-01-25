import Swal, { SweetAlertOptions } from 'sweetalert2';

import { Injectable } from '@angular/core';

import { OrganismsModule } from '../organisms.module';

export interface IPopupService extends SweetAlertOptions {}

@Injectable({
	providedIn: OrganismsModule,
})
export class PopupService {
	public constructor() {}

	public openRequestPopup(options: IPopupService): void {
		Swal.fire({ ...options });
	}
}
