import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

const initialState: { enrollments: Enrollment[] } = {
    enrollments: [],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
        unenroll: (state, { payload: { user, course } }) => {
            state.enrollments = state.enrollments.filter((e) =>
                !(e.course === course._id && e.user === user._id)
            );
        },
        enroll: (state, { payload: { user, course } }) => {
            const newEnrollment = {
                _id: uuidv4(),
                user: user._id,
                course: course._id
            };
            state.enrollments = [...state.enrollments, newEnrollment];
        },
    },
});

export const { setEnrollments, unenroll, enroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;