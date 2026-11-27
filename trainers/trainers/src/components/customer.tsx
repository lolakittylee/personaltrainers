
import type { Customer } from "../types";
import { useEffect, useState } from "react";
import { getCustomerById, getCustomers, getTrainingById } from "../trainerapi";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";



function CustomerIndividual() {
    const { id } = useParams();
    const [customer, setCustomer] = useState<Customer | null>(null);
    // const [customers, setCustomers] = useState<Customer[] | null>([]);
    // const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) return;
        getCustomerById(id)
            .then(customerData => setCustomer(customerData))
            .catch(error => console.error(error))
        // getTrainingById(id)
        //     .then(trainingList => setTrainings(trainingList))
        //     .catch(error => console.error(error))

    }, [id]);

    const columns: GridColDef[] = [
        { field: 'lastname', headerName: 'Last name', width: 200 },
        { field: 'firstname', headerName: 'First name', width: 200 },
        { field: 'streetaddress', headerName: 'Street address', width: 200 },
        { field: 'postcode', headerName: 'Post code', width: 200 },
        { field: 'city', headerName: 'City', width: 200 },
        { field: 'email', headerName: 'Email address', width: 200 },
        { field: 'phone', headerName: 'Phone number', width: 200 },

    ]


    return (
        <>
            <div style={{ width: '90%', height: 500, marginTop: 10 }}>
                <div>
                    <h1>{customer?.firstname} {customer?.lastname}</h1>
                    <ol className="CustomerInfo">
                        {customer?.map(question => (
                            <li key={question.id}>
                                {question.question}
                                <br />
                                <TextField
                                    multiline
                                    className="vastauslaatikko"
                                    value={answers[question.id] ?? ""}
                                    onChange={event => handleAnswerChange(question.id, event.target.value)}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
                <h3>Customer's personal details</h3>
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

export default CustomerIndividual;

