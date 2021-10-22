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
        
        //change the cell's color to colorSelected on click
        cell.onclick = function () {
            cell.style.background = colorSelected;
        }

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
            
            //change the cell's color to colorSelected on click
            cell.onclick = function () {
                cell.style.background = colorSelected;
            }

            tr.appendChild(cell); //add the cell to the row
        }
        table.appendChild(tr); //add the row to the table(grid)
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
    let rows = table.getElementsByTagName("tr"); //rows is a list of elements with the given tagname in order they appear 

    //for each row in the table, add a cell for its column
    for (let i = 0; i < numRows; i++)
    {
        let cell = document.createElement("td"); //table data cell eleemnt 
        //change the cell's color to colorSelected on click
        cell.onclick = function () {
            cell.style.background = colorSelected;
        }
        rows[i].appendChild(cell)
    }
    numCols++; //increment numCols
  }
}

//Remove a row
function removeR() {
  //  alert("Clicked Remove Row")
    let table = document.getElementById("grid"); //the table in the html doc

    //Remove the last row aka the last tr tag or child node of the table
    if(numRows != 0 && numCols != 0)
    {
        //lastElementChild property returns the last child node element of the parent node
        let last_row = table.lastElementChild; 
        table.removeChild(last_row); // removeChild() removes the argument node from the caller parent node
        numRows--;
    }
    //numRows is 0 when the only cell is removed, so both numRows and numCols must be 0. Call reset()() to reset them.
    if (numRows === 0)
    {
        reset()();
    }
}

//Remove a column
function removeC() {
   // alert("Clicked Remove Col")
   let table = document.getElementById("grid"); //table is the grid

//  For each row aka for each <tr> element of the table, remove the last <td> child node. //
    if(numRows != 0 && numCols != 0) //if we don't check then numCols will be decremented even if grid is empty
    {
        //getElementsByTagName returns a list of elements with the given tag within the calling element
        let rows = table.getElementsByTagName("tr"); 

        for (let row of rows) //for each row in the table
        {
            row.removeChild(row.lastElementChild); //remove the last td cell node
        }
        numCols--;
    }

    /** NOTE TO SELF: 
     * If the last remaining column/cell was removed by calling removeC(), then that means all the <td> elements were removed
     * for that column, but the <tr> elements will still remain causing empty columns in the grid when we add new rows or
     * columns. Example:
     *          <tr>  </tr>
     *          <tr>  </tr>
     * Therefore, must remove all the <tr> tags as well from the table if removeC is called on last remaining column. 
     */
    // We can just call reset()() to reset the table grid so that the empty <tr> elements are removed.
    // reset() also resets numRows and numCols to 0
    if(numCols === 0) //numCols === 0 means that the last remaining column was removed
    {
        reset()();
    }

}

//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

//Fill all the cells of the table with same color
function fill(){

    if(colorSelected == null)
    {
        alert("Please select a color")
    }
    let table = document.getElementById("grid"); //table is the grid

    // cells = a list of all the <td> elements or cells in the table inside the tr elements.
    let cells = table.getElementsByTagName("td");

    for (let cell of cells) //iterates through each <td> element (cell) of the table
    {   // and changes the color of each cell to colorSelected
        cell.style.background = colorSelected;
    }

}

//Helper function that resets the table grid back to default settings
function reset(){
  //  alert("Clicked Clear All")
    //Replace everything in the grid tag in the HTML document with empty string to get rid of the table
    document.getElementById("grid").innerHTML = ""
    numRows = 0;
    numCols = 0;
}

//Clear the colors from all the cells and reset their color to no color
function clearAll(){
    let table = document.getElementById("grid"); //table is the grid

    // cells = a list of all the <td> elements or cells in the table inside the tr elements.
    let cells = table.getElementsByTagName("td");

    for (let cell of cells) 
    {   
        cell.style.background = ''; //restore color of the cell to no color
    }
  }

function fillU(){

    if(colorSelected == null)
    {
        alert("Please select a color")
    }
    let table = document.getElementById("grid"); //table is the grid

    // cells = a list of all the <td> elements or cells in the table inside the tr elements.
    let cells = table.getElementsByTagName("td");

    //Iterate through each <td> element (cell) of the table and change the color of each cell 
    // to colorSelected only if their current background color is empty value
    for (let cell of cells) 
    {   
        //Our CSS sheet doesn't provide a value for background for the <td> elements. 
        // Thus, the cells that are uncolored are the ones with empty string for its background property.
        if(cell.style.background === '')
        {
            cell.style.background = colorSelected; //set color of the uncolored cell to colorSelected
        }
    }
}

