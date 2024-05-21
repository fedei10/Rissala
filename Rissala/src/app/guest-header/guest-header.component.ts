import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthloginService } from '../services/authlogin.service';

@Component({
  selector: 'app-guest-header',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,NgIf],  templateUrl: './guest-header.component.html',
  styleUrl: './guest-header.component.scss'
})
export class GuestHeaderComponent {

}
