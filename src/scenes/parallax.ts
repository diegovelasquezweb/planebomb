
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { DestroyActionScript } from "@phasereditor2d/scripts-core";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class parallax extends Phaser.GameObjects.TileSprite {

  constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number, texture?: string, frame?: number | string) {
    super(scene, x ?? 0, y ?? 0, width ?? 720, height ?? 340, texture || "bg_4", frame);

    this.setOrigin(0, 0);
    this.tilePositionX = 200;

    // destroyActionScript
    new DestroyActionScript(this);

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
