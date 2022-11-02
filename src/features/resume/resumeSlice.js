import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
	name: 'resume',
	initialState: {
		resumeData: {
			firstName: '',
			lastName: '',
			email: '',
			socialWebsite: '',
			education: [],
			bio: '',
			linkedin: '',
			location: '',
			title: '',
			phone: '',
			company: '',
			startWorkDate1: '', 
			endWorkDate1: '',
			jobTitle1: '',
			workDescription1: ''
		},
		template: '',
	},
	reducers: {
		changeEducation: (state, action) => {
			const { id } = action.payload;
			const educationFound = state.resumeData.education.find((education) => education.id === id);
			if (!educationFound) {
				state.resumeData.education.push(action.payload);
			}
		},
		pickTemplate: (state, action) => {
			state.template = action.payload;
		},
		setResume: (state, action) => {
			state.resumeData[action.payload.name] = action.payload.inputVal
		}
	},
});

export const {
	changeEducation,
	pickTemplate,
	setResume
} = resumeSlice.actions;
export default resumeSlice.reducer;
