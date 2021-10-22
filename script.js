let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
  //  alert("Clicked Add Row")

    let table = document.getElementById("grid"); //table is the grid
    let tr = document.createElement("tr"); //create a row
   //if the grid is empty meaning no rows or columns, just add a cell and increment row
   if (numRows === 0)
   {
        let cell = document.createElement("td"); //create a table data cell element
        tr.appendChild(cell); //add the cell to the row
        table.appendChild(tr); //add the row to the table(grid)
        numRows++;
        numCols++; //increment numCols too since we will get 1x1 grid
    }
   else //row is not 0
   {
        //for the row, make sure the row has numCols number of cells for its columns
        for (let i = 0; i < numCols; i++)
        {
            //creates a td cell element and adds it to the row at tag tr numCols times 
            let cell = document.createElement("td"); //create a table data cell element 
            tr.appendChild(cell); 
        }
        table.appendChild(tr); //append the row to the table(grid)
        numRows++; //increment the number of rows
   }
}
//Add a column
function addC() {
  //  alert("Clicked Add Col")
  let table = document.getElementById("grid");
  let tr = document.createElement("tr"); //table row element

  //if the grid is empty meaning no rows or columns, just add a cell and increment row
  if (numRows === 0)
  {
    addR(); //call addR function to add a row and column. Gives 1X1 grid
  }
  else //row is not 0
  {
    let rows = document.getElementsByTagName("tr"); //rows is a list of elements with the given tagname in order they appear 
    console.log(rows)

    //for each row in the table, add an cell for its column
    for (let i = 0; i < numRows; i++)
    {
        let td = document.createElement("td"); //table data cell eleemnt 
        rows[i].appendChild(td)
    }
    numCols++; //increment numCols
  }
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
