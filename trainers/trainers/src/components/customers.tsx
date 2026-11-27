
import type { Customer } from "../types";
import { useEffect, useState } from "react";
import { getCustomers} from "../trainerapi";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";



function CustomersListed() {
    const [customers, setCustomers] = useState<Customer[] | null>([]);
    // const [open, setOpen] = useState(false);
    const navigate = useNavigate();

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

            <div>
                <Button variant="contained" onClick={() => navigate("/trainings")}>Trainings</Button>
            </div>
        </>
    );
}

export default CustomersListed;

