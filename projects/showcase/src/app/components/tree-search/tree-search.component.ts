import {Component, OnInit} from '@angular/core';
import {TreeDataFacadeService} from '@natr/the-trees';
import {GenealogistService} from '../../../../../natr/genealogist/src/lib/genealogist.service';

@Component({
  selector: 'app-tree-search',
  templateUrl: './tree-search.component.html',
  styleUrls: ['./tree-search.component.scss']
})
export class TreeSearchComponent implements OnInit {

  constructor(private treeDataFacade: TreeDataFacadeService, private genealogistService: GenealogistService) {
  }

  ngOnInit() {
    console.log('tree changed from remote');
    this.treeDataFacade.dispatchRemoteLoadTree(new URL('http://localhost:4200/assets/tree.json'));
  }

  search() {
    this.genealogistService.dispatchSearch('C');
  }
}
