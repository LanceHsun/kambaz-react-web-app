import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [] as any[],
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
        addAssignment: (state, action) => {
            state.assignments = [...state.assignments, action.payload];
        },
        deleteAssignment: (state, { payload: { assignment } }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignment._id
            );
        },
        updateAssignment: (state, { payload: { assignment } }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? { ...a, ...assignment } : a
            );
        },
        editAssignmentId: (state, { payload: { assignment } }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? { ...a, ...assignment, _id: "A" + assignment._id } : a
            );
        },
    },
});

export const { 
    setAssignments, 
    addAssignment, 
    deleteAssignment, 
    updateAssignment, 
    editAssignmentId 
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;