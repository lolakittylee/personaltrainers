import { Stack, TextField, Typography } from "@mui/material";
import type { Customer } from "../types";
import { useEffect, useState } from "react";
import { getCustomers } from "../trainerapi";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";



function CustomersListed() {
    const [customers, setCustomers] = useState<Customer[] | null>([]);
    // const [open, setOpen] = useState(false);

    const columns: GridColDef[] = [
        { field: 'firstname', headerName: 'First name', width: 200 },
        { field: 'lastname', headerName: 'Last name', width: 200 }
    ]

    const fetchCustomers = () => {
        getCustomers()
            .then(data => setCustomers(data._embedded.customers))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchCustomers()
    }, [])

    return (
        <>
            <div style={{ width: '90%', height: 500, marginTop: 10 }}>
                <DataGrid
                    rows={customers || []}
                    columns={columns}
                    autoPageSize
                    getRowId={row => row._links.self.href}
                />
            </div>
        </>
    );
}

export default CustomersListed;

