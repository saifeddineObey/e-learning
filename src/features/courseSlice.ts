import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type CourseType = {
  id: number;
  image: string;
  parts: {
    title: string;
    duration: string;
    terminationDate: string;
    progress: number;
  }[];
};

type CourseState = {
  courses: CourseType[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  searchQuery: string;
  sortCriteria: string | null;
};

//api simulation
export const fetchCourses = createAsyncThunk<CourseType[], void>(
  'course/fetchCourses',
  async () => {
    try {
      const response = await fetch('courses-api.json');
      if (!response.ok) {
        throw new Error('Error fetching JSON data');
      }
      const data = await response.json();

      return data;
    } catch (error) {
      console.log('Error fetching JSON data:', error);
      return [];
    }
  }
);

const initialState: CourseState = {
  courses: [],
  status: 'idle',
  error: null,
  searchQuery: '',
  sortCriteria: null,
};

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortCriteria: (state, action: PayloadAction<string | null>) => {
      state.sortCriteria = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null; // Provide a default value of null
      });
  },
});

export const selectCourses = (state: { course: CourseState }) => state.course.courses;
export const selectStatus = (state: { course: CourseState }) => state.course.status;
export const selectError = (state: { course: CourseState }) => state.course.error;

export default courseSlice.reducer;
