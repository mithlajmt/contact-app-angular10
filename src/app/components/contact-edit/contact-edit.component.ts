import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact: Contact;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    alert(id)
    this.contactService.getContact(id).subscribe({
      next:(res)=>{
        console.log(res)
        this.contact = res;
      },
      error:(Err)=>{
        console.log(Err)
      }
    })
  }

  updateContact(): void {
    this.contactService.updateContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }
}
