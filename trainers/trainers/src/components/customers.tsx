
import type { Customer } from "../types";
import { useEffect, useState } from "react";
import { getCustomers } from "../trainerapi";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";



function CustomersListed() {
    const { id } = useParams();
    const [customers, setCustomers] = useState<Customer[] | null>([]);
    // const [open, setOpen] = useState(false);
    const navigate = useNavigate();



    const columns: GridColDef[] = [
        { field: 'lastname', headerName: 'Last name', width: 200 },
        { field: 'firstname', headerName: 'First name', width: 200 },
        {
            field: '', headerName: '', flex: 1,
            renderCell: (params) =>
                <>
                    <Button variant="text" onClick={() => navigate(`/customers/${params.row.id}`)}>Details</Button>
                </>
        }

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

