import { apiSlice } from "./apliSlices";

const AdminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (body) => ({
        url: "/api/projects",
        method: "POST",
        body,
      }),
    }),

    createAchievement: builder.mutation({
      query: (body) => ({
        url: "/api/achievements",
        method: "POST",
        body,
      }),
    }),

    createCertificate: builder.mutation({
      query: (body) => ({
        url: "/api/certificate",
        method: "POST",
        body,
      }),
    }),

    createExperience: builder.mutation({
      query: (body) => ({
        url: "/api/experience",
        method: "POST",
        body,
      }),
    }),

    getContactdetails: builder.query({
      query: (body) => ({
        url: "/api/contact",
        method: "GET",
        body,
      }),
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useCreateAchievementMutation,
  useCreateCertificateMutation,
  useCreateExperienceMutation,
  useGetContactdetailsQuery,
} = AdminApiSlice;
