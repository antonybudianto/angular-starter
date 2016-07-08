import { disableDeprecatedForms, provideForms } from '@angular/forms';

export const FORM_PROVIDERS = [
    disableDeprecatedForms(),
    provideForms()
];
