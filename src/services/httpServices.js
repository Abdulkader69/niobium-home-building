import axios from "axios";

const fetchData = async (url) => {
    try {
        const {data: fetchData } = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${url}`);
        return fetchData;
    } catch (err) {
        return false;
    }
}

export const getProjects = async () => {
    const projects = await fetchData('project?_embed&per_page=4');
    return projects;
};

export const getProjectBySlug = async (slug) => {
    try {
      const project = await fetchData(`project?slug=${slug}&_embed`);
      if (project[0]) {
        return project[0];
      }
      return null;
    } catch (err) {
      // console.log(err);
      return null;
    }
};

export const getPageDataBySlug = async (slug) => {
    try {
      const page = await fetchData(`pages?slug=${slug}`);
      if (page[0]) {
        return page[0];
      }
      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
};