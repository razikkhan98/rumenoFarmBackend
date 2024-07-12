import { Permission } from "../model/user/permission";
import { Role } from "../model/user/role";

const permissions = [
  { name: "Ticket Read", alias: "ticket_read" },
  { name: "Organizer Read", alias: "organizer_read" },
];

const superAdminPermissions = [
  { name: "Super Admin Dashboard", alias: "spr_admn" },
  { name: "Super Admin Impersonate", alias: "spr_admn_impersonate" },
];

let roles = [{ roleName: "Organizer", permissions: [] }];

let adminUser = {
  firstName: "Super",
  lastName: "Admin",
  email: "superAdmin@mailinator.com",
  password: "V1t1nf0$$",
};

const seed = async () => {
  console.log("Seeding started.....");
  const permission = await Permission?.create(permissions);
  const role = await Role?.create(roles);
};

export { seed };
