import { bootstrapApplication } from '@angular/platform-browser';
import { BaseComponent } from './components/base/base.component';

bootstrapApplication(BaseComponent)
  .catch(err => console.error(err));
