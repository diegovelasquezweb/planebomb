
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class One extends Phaser.Scene {

  constructor() {
    super("Scene1");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {

    // background
    const background = this.add.image(0, 0, "1");
    background.name = "background";
    background.setOrigin(0, 0);

    // 2
    this.add.image(539, 446, "2");

    // 3
    this.add.image(827, 415, "3");

    // 4
    this.add.image(833, 82, "4");

    this.events.emit("scene-awake");
  }

  /* START-USER-CODE */

  // Write your code here

  create() {

    this.editorCreate();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
