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
        {field: 'date', headerName: 'Date', width: 300},
        { field: 'activity', headerName: 'Activity', width: 200 }
    ]

    const fetchTrainings = () => {
        getTrainings()
            .then(data => setTrainings(data._embedded.trainings))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchTrainings()
    }, [])

    return (
        <>
            <div style={{ width: '90%', height: 500, marginTop: 10 }}>
                <DataGrid
                    rows={trainings || []}
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

export default TrainingsListed;

