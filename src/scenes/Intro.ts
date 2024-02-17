
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { SpriteScript } from "@phasereditor2d/scripts-core";
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
    bg1.scaleX = 2.3;
    bg1.scaleY = 2.3;
    bg1.setOrigin(0, 0);

    // bg2
    const bg2 = this.add.tileSprite(0, 0, 576, 324, "bg2");
    bg2.scaleX = 2.3;
    bg2.scaleY = 2.3;
    bg2.setOrigin(0, 0);
    bg2.tilePositionX = -100;

    // spriteScript
    new SpriteScript(bg2);

    // bg_4
    const bg_4 = this.add.image(0, 0, "bg_4");
    bg_4.scaleX = 2.3;
    bg_4.scaleY = 2.3;
    bg_4.setOrigin(0, 0);

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
