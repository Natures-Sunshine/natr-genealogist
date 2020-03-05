import {Injectable} from '@angular/core';
import {selectTreeData} from '@natr/the-trees';
import {Store} from '@ngrx/store';
import {doCallbackSearch, doSearch, SearchCallbackFunctionType} from './+state/search/actions/search.actions';
import {TreeModel} from '@natr/the-trees/lib/models/tree.model';
import {Edge, Node} from '@swimlane/ngx-graph';
import {sprintf} from 'sprintf-js';
import {HistorianService, Logging} from '@natr/historian';

class NodeMap extends Map<string, Node> {
}

class EdgeMap extends Map<string, Edge> {
}

class FamilyTreeMap extends Map<string, FamilyTreeNode> {
}

interface FamilyTreeNode extends Node {
  children?: FamilyTreeNode[];
  parent?: FamilyTreeNode;
}

// parent.child
const keyFormat = '%s.%s';

@Logging
@Injectable({
  providedIn: 'root'
})
export class GenealogistService {
  private logger: HistorianService;

  constructor(private treeStore: Store<any>) {
    this.treeStore.select(selectTreeData)
      .subscribe(state => console.log(`${GenealogistService.name}.${selectTreeData.name} state is`, state));
  }

  static buildFamilyTree(treeData: TreeModel): FamilyTreeMap {
    const nodes = new FamilyTreeMap();
    let familyTreeNode: FamilyTreeNode;
    /*
     a function returning a function that can be used in Array.find. So we can pass the search key
    */
    const findFunction = searchId => item => item.id === searchId;
    treeData.edges.forEach(
      edge => {
        // const node = nodeMap.get(edge.source);
        const node = treeData.nodes.find(findFunction(edge.source));
        if (!nodes.has(node.id)) {
          familyTreeNode = {...node} as FamilyTreeNode;
          nodes.set(familyTreeNode.id, familyTreeNode);
        } else {
          familyTreeNode = nodes.get(node.id);
        }

        if (!familyTreeNode.children) {
          familyTreeNode.children = [];
        }

        const childNode = treeData.nodes.find(findFunction(edge.target));
        if (!childNode) {
          throw new Error(`Poorly formatted TreeModel. Target ${edge.target} not found in node list`);
        }
        let childFamilyTreeNode: FamilyTreeNode;
        if (!nodes.has(childNode.id)) {
          childFamilyTreeNode = {...childNode} as FamilyTreeNode;
          nodes.set(childNode.id, childFamilyTreeNode);
        } else {
          childFamilyTreeNode = nodes.get(childNode.id);
        }

        childFamilyTreeNode.parent = familyTreeNode;
        familyTreeNode.children.push(childFamilyTreeNode);
      }
    );

    return nodes;
  }

  static buildNodeMap(nodes: Node[]): NodeMap {
    const nodeMap = new NodeMap();
    nodes.forEach(
      node => nodeMap.set(node.id, node)
    );
    return nodeMap;
  }

  static buildEdgeMap(edges: Edge[]): EdgeMap {
    const edgeMap = new EdgeMap();
    edges.forEach(
      edge => edgeMap.set(sprintf(keyFormat, edge.source, edge.target), edge)
    );
    return edgeMap;
  }

  static buildFlatTree(
    root: Node,
    treeData: TreeModel,
    // newTreeData: TreeModel = null,
    nodeMap = GenealogistService.buildNodeMap(treeData.nodes),
    edgeMap = GenealogistService.buildEdgeMap(treeData.edges),
    familyTreeMap = GenealogistService.buildFamilyTree(treeData)
  ): TreeModel {

    const newTreeData = {
      nodes: [],
      edges: []
    };

    const familyTreeRootNode = familyTreeMap.get(root.id);
    if (!familyTreeRootNode) {
      throw new Error(`Root node ${root.id} not found in treeData`);
    }

    newTreeData.nodes.push(nodeMap.get(familyTreeRootNode.id));

    if (familyTreeRootNode.children) {
      familyTreeRootNode.children.forEach(
        child => {
          newTreeData.edges.push(edgeMap.get(sprintf(keyFormat, child.parent.id, child.id)));
          const subTreeData = GenealogistService.buildFlatTree(child, treeData, nodeMap, edgeMap, familyTreeMap);
          newTreeData.nodes.push(...subTreeData.nodes);
          newTreeData.edges.push(...subTreeData.edges);
        }
      );
    }

    return newTreeData;
  }

  search(search, treeData: TreeModel): TreeModel {
    const root = treeData.nodes.find(node => node.label.includes(search));
    this.logger.debug(`root`, root);
    if (!root) {
      this.logger.debug('node not found, returning null');
      return null;
    }

    return GenealogistService.buildFlatTree(root, treeData);
  }

  dispatchSearch(searchString: string) {
    this.treeStore.dispatch(doSearch({searchObject: searchString}));
  }

  dispatchCallbackSearch(searchString: string, callback: SearchCallbackFunctionType) {
    this.treeStore.dispatch(doCallbackSearch({searchObject: searchString, callback}));
  }
}
