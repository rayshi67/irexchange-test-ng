import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'irexchange-test';

  numberOfChildren: number;
  numberOfCount: number;

  winningChild: any;
  removalList = [];

  setNumberOfChildren(numChildren : number) {
    this.numberOfChildren = numChildren;
  }

  setNumberOfCount(numCount : number) {
    this.numberOfCount = numCount - 1;
  }

  process() {
    console.info("numChildren:" + this.numberOfChildren + ",numCount:" + this.numberOfCount);

    var childrenList = [],
        removalList = [];

    // initialize
    for (var i = 0; i < this.numberOfChildren; i++) {
      childrenList[i] = i;
    }

    var pos = 0,
        len = childrenList.length;
    while (len = childrenList.length) {
      pos = (pos + this.numberOfCount) % len;
      removalList.push(childrenList[pos]);
      childrenList.splice(pos, 1);
    }

    this.winningChild = removalList.splice(removalList.length - 1, 1);
    this.removalList = removalList;
  }
}
