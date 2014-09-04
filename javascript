//main-menu//
//=========//

//a main menu script for unity no licence please just leave me in the credits//

var isQuit=false;

function OnMouseEnter(){
	//change text color
	renderer.material.color=Color.red;
}

function OnMouseExit(){
	//change text color
	renderer.material.color=Color.white;
}

function OnMouseUp(){
	//is this quit
	if (isQuit==true) {
		//quit the game
		Application.Quit();
	}
	else {
		//load level
		Application.LoadLevel("level name");
	}
}

function Update(){
	//quit game if escape key is pressed
	if (Input.GetKey(KeyCode.Escape)) {
    		Application.Quit();
	}
}
