import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IErrorCodeServer } from '../../services/interfaces';
import { ErrorCodeServer } from '../../services/classes';


// interface DialogData extends IErrorCodeServer {
// }

@Component({
  selector: 'app-server-error-modal-dialog',
  templateUrl: './server-error-modal-dialog.component.html',
  styleUrls: ['./server-error-modal-dialog.component.scss']
})
export class SignUpModalDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SignUpModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
