import { projects as projectData } from "../../../public/components/data/index.json";

export interface Project {
  imgPath: string;
  code: string;
  demo: string;
  video: string;
  aosDelay?: number
}

export const projects = projectData.map((obj, index) => {
  const aosDelay = index * 200 + 100;
  return { ...obj, aosDelay };
});
