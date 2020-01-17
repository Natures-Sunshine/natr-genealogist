import {Component, OnInit} from '@angular/core';
import {TreeDataFacadeService} from '@natr/the-trees';
import {GenealogistService} from '../../../../../natr/genealogist/src/lib/genealogist.service';
import {MatDialog} from '@angular/material';
import {UsrInfoDialogComponent} from '../usr-info-dialog/usr-info-dialog.component';

@Component({
  selector: 'app-tree-search',
  templateUrl: './tree-search.component.html',
  styleUrls: ['./tree-search.component.scss']
})
export class TreeSearchComponent implements OnInit {
  searchTerm: string;


  constructor(
    private treeDataFacade: TreeDataFacadeService,
    private genealogistService: GenealogistService,
    private dialog: MatDialog
  ) {
  }

  private static searchCallback(searchObject, treeData) {
    console.log(`${TreeSearchComponent.searchCallback.name} callback treeData`, treeData);
    console.log(`${TreeSearchComponent.searchCallback.name} callback searchObject`, searchObject);
    return treeData;
  }

  ngOnInit() {
    console.log('tree changed from remote');
    this.treeDataFacade.dispatchRemoteLoadTree(new URL('http://localhost:4200/assets/tree.json'));
  }

  search() {
    if (this.searchTerm) {
      this.genealogistService.dispatchSearch(this.searchTerm);
    } else {
      this.treeDataFacade.dispatchRemoteLoadTree(new URL('http://localhost:4200/assets/tree.json'));
    }
  }

  callbackSearch() {
    this.genealogistService.dispatchCallbackSearch('C', TreeSearchComponent.searchCallback);
  }

  nodeClicked(node) {
    console.log(`${TreeSearchComponent.name}.nodeClicked node`, node);
    this.openDialog();
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(UsrInfoDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
