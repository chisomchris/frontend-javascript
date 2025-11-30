/// <reference path="./crud.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

// Create a RowElement object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert a new row and store the returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with the new age field
const updatedRow: RowElement = {
  ...row,
  age: 23
};

// Call updateRow and deleteRow
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
