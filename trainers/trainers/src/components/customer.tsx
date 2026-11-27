
import type { Customer } from "../types";
import { useEffect, useState } from "react";
import { getCustomerById} from "../trainerapi";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";



function CustomerIndividual() {
    const { id } = useParams();
    // const [customer, setCustomer] = useState<Customer | null>(null);
    const [customerInfo, setCustomerInfos] = useState<Customer[]>([]);
    // const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;

        getCustomerById(id)
            .then(customer => setCustomerInfos([customer]))
            .catch(err => console.error(err));

    }, [id]);

    const columns: GridColDef[] = [
        { field: 'lastname', headerName: 'Last name', width: 150 },
        { field: 'firstname', headerName: 'First name', width: 150 },
        { field: 'streetaddress', headerName: 'Street address', width: 200 },
        { field: 'postcode', headerName: 'Post code', width: 100 },
        { field: 'city', headerName: 'City', width: 100 },
        { field: 'email', headerName: 'Email address', width: 200 },
        { field: 'phone', headerName: 'Phone number', width: 150 },

    ]


    return (
        <>
            <div style={{ width: '110%', height: 500, marginTop: 10 }}>

                <h3>Customer's personal details</h3>
                <DataGrid
                    rows={customerInfo || []}
                    columns={columns}
                    autoPageSize
                    getRowId={row => row._links.self.href}
                />
            </div>

            <div>
                <Button variant="contained" onClick={() => navigate("/")}>Back</Button>
            </div>
        </>
    );
}

export default CustomerIndividual;

