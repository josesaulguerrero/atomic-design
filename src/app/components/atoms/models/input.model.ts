import { FormControl } from '@angular/forms';

export interface AtomicInput {
	control: FormControl<any>;
	placeholder: string;
	required: boolean;
}
