import { http } from "./config";

export const skillService = {
  getSkill: () => {
    return http.get(`/skill`);
  },
};
