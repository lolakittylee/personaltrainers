import type { Training } from "../types";
import { useEffect, useState } from "react";
import { getTrainings } from "../trainerapi";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";



function TrainingsListed() {
    const [trainings, setTrainings] = useState<Training[] | null>([]);
    // const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const columns: GridColDef[] = [
        { field: 'customerName', headerName: 'Customer', width: 200,
            valueGetter: (_value, row: Training) =>
                `${row.customer.firstname} ${row.customer.lastname}`
         },
        { field: 'activity', headerName: 'Activity', width: 200 },
        { field: 'date', headerName: 'Date', width: 300,
            valueFormatter: (value) => {
                if(!value) {
                    return ' ';
                }
                return new Date(value).toLocaleString('en-GB');
            } 
        }
    ]

    const fetchTrainings = () => {
        getTrainings()
            .then(data => setTrainings(data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchTrainings()
    }, [])

    return (
        <>
            <div style={{ width: '100%', height: 500, marginTop: 10 }}>
                <DataGrid
                    rows={trainings || []}
                    columns={columns}
                    autoPageSize
                    getRowId={row => row.id}
                />
            </div>
            
            <div>
                <Button variant="contained" onClick={() => navigate("/")}>Back</Button>
            </div>
        </>
    );
}

export default TrainingsListed;

