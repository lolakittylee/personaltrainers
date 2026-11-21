import { useState } from "react";
import type { Customer } from "../types";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Button, Stack, TextField } from "@mui/material";

function NewCustomer() {
    const [customer, setNewCustomer] = useState<Customer>({
        id: "",
        name: "",
        details: ""
    });

    const [customers, setCustomers] = useState<Customer[]>([]);

    const columns: GridColDef[] = [
        { field: "name", headerName: " Name " },
        { field: "details", headerName: "Details about customer" },
        {
            field: "id", headerName: "",
            sortable: false
        }
    ];

    const handleAdd = () => {
        setCustomers([
            { ...customer }, ...customers]);

        setNewCustomer({
            id: "",
            name: "",
            details: ""
        });
    }

    return (
        <>
            <div id="inputs">
                <Stack
                >
                    <TextField
                        label="Name"
                        value={customer.name}
                        onChange={event =>
                            setNewCustomer({ ...customer, name: event.target.value })}
                    />
                </Stack>
            </div>
        </>
    )

}

export default NewCustomer;