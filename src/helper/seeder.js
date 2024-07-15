import { Permission } from "../model/user/permission.js";
import { Role } from "../model/user/role.js";

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

  // console.log("Permissions created!");

  const role = await Role?.create(roles);
  // console.log("Roles created!");

  // roles.find((r) => r.roleName === "Super Admin").permissions = permission.map(
  //   (p) => p._id
  // );

  // const sAdmin = role.find((r) => r.roleName === "Super Admin");
  // adminUser.role = sAdmin._id;

  // await User.create(adminUser);
  // console.log("Super Admin created!");

  // await Country.insertMany(COUNTRIES);
  // console.log("Countries created!");
};

export { seed };
