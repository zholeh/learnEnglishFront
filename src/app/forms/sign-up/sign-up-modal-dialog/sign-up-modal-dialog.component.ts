import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


interface DialogData {
  text: string;
}

@Component({
  selector: 'app-sign-up-modal-dialog',
  templateUrl: './sign-up-modal-dialog.component.html',
  styleUrls: ['./sign-up-modal-dialog.component.scss']
})
export class SignUpModalDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SignUpModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
