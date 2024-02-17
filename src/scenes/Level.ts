
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnAwakeScript } from "@phasereditor2d/scripts-core";
import { MoveInSceneActionScript } from "@phasereditor2d/scripts-simple-animations";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

  constructor() {
    super("Level");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {

    // text
    const text = this.add.text(640, 458, "", {});
    text.setOrigin(0.5, 0.5);
    text.text = "Phaser 3 + Phaser Editor 2D\nWebpack + TypeScript";
    text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

    // onAwakeScript
    const onAwakeScript = new OnAwakeScript(text);

    // moveInSceneActionScript
    const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

    // image_1
    const image_1 = this.add.image(603, 424, "bg1");
    image_1.name = "image_1";

    // moveInSceneActionScript (prefab fields)
    moveInSceneActionScript.from = "BOTTOM";

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
