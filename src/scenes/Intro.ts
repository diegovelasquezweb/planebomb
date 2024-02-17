
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { DestroyActionScript } from "@phasereditor2d/scripts-core";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Intro extends Phaser.Scene {

  constructor() {
    super("Intro");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {

    // bg1
    const bg1 = this.add.image(0, 0, "bg1");
    bg1.scaleX = 1.246599166599618;
    bg1.scaleY = 1.0437517906329075;
    bg1.setOrigin(0, 0);

    // bg2
    const bg2 = this.add.tileSprite(0, 0, 720, 340, "bg2");
    bg2.setOrigin(0, 0);

    // bg_4
    const bg_4 = this.add.tileSprite(0, 0, 720, 340, "bg_4");
    bg_4.setOrigin(0, 0);

    // destroyActionScript
    new DestroyActionScript(bg_4);

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
