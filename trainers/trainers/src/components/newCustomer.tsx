import { useState } from "react";
import type { Customer } from "../types";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Button } from "@mui/material";

function NewCustomer() {
    const [customer, setNewCustomer] = useState<Customer>({
        id: "",
        name: "",
        details: ""
    });

    const [customers, setCustomers] = useState<Customer[]>([]);

    const columns: GridColDef[] = [
        {field: "name", headerName: " Name "}
        {field: "details", headerName: "Details about customer"}
        {field: "id", headerName: "",
            sortable:false
        }
    ]
// testi et toimiiiks tää nyt vai eiiii

}

export default NewCustomer;