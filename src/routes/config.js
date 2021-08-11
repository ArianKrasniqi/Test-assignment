import Landing from "views/Landing/Landing";
import AddCompany from "views/Company/Add/Add";

export default [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/company/add",
    component: AddCompany,
  },
];
