import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserDataService} from '../../service/user-data.service';

class DialogData {
}

@Component({
  selector: 'app-usr-info-dialog',
  templateUrl: './usr-info-dialog.component.html',
  styleUrls: ['./usr-info-dialog.component.scss']
})
export class UsrInfoDialogComponent implements OnInit {
  userData: any;

  constructor(
    public dialogRef: MatDialogRef<UsrInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.userDataService.getUserInfo().subscribe(
      userData => this.userData = userData
    );
  }

  close() {
    this.dialogRef.close();
  }
}
