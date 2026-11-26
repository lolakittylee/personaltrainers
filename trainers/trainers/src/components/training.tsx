
import type { Trainings } from "../types";
import { useEffect, useState } from "react";
import { getTrainings } from "../trainerapi";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";



function TrainingsListed() {
    const [trainings, setTrainings] = useState<Trainings[] | null>([]);
    // const [open, setOpen] = useState(false);

    const columns: GridColDef[] = [
        { field: 'activity', headerName: 'First name', width: 200 }
    ]

    const fetchTrainings = () => {
        getTrainings()
            .then(data => setTrainings(data._embedded.customers))
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
        </>
    );
}

export default TrainingsListed;

