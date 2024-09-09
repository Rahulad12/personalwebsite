import { apiSlice } from "./apliSlices";

import {
  PROJECT_URL,
  ACHIEVEMENT_URL,
  CERTIFICATE_URL,
  CONTATCT_URL,
  EXPERIENCE_URL,
  ADMIN_URL,
} from "../constant";


const SystemApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    adminLogin: builder.mutation({
      query: (body) => ({
        url: `${ADMIN_URL}/login`,
        method: "POST",
        body,
      }),
    }),

    getProject: builder.query({
      query: (body) => ({
        url: PROJECT_URL,
        method: "GET",
        body,
      }),
    }),
    getProjectById: builder.query({
      query: (id) => ({
        url: `${PROJECT_URL}/${id}`,
        method: "GET",
      }),
    }),
    getAchievement: builder.query({
      query: (body) => ({
        url: ACHIEVEMENT_URL,
        method: "GET",
        body,
      }),
    }),
    getCertificate: builder.query({
      query: (body) => ({
        url: CERTIFICATE_URL,
        method: "GET",
        body,
      }),
    }),

    getExperience: builder.query({
      query: (body) => ({
        url: EXPERIENCE_URL,
        method: "GET",
        body,
      }),
    }),

    sendContact: builder.mutation({
      query: (body) => ({
        url: CONTATCT_URL,
        method: "POST",
        body,
      }),
    }),

    DeletContact: builder.mutation({
      query: (id) => ({
        url: `${CONTATCT_URL}/${id}`,
        method: "DELETE",
      }),
    }),

    setStatus: builder.mutation({
      query: (data) => ({
        url: `${CONTATCT_URL}/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useAdminLoginMutation,
  useGetProjectQuery,
  useGetProjectByIdQuery,
  useGetAchievementQuery,
  useGetCertificateQuery,
  useGetExperienceQuery,
  useSendContactMutation,
  useDeletContactMutation,
  useSetStatusMutation,
} = SystemApiSlice;
