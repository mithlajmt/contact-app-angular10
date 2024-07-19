import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent {
  contact: Contact = { id: 0, name: '', number: '' };

  constructor(private contactService: ContactService, private router: Router) { }

  addContact(): void {
    this.contactService.addContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }
}
