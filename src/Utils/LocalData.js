import { HiOutlineViewGridAdd } from "react-icons/hi";
import { RiFileSettingsLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsTruck } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiMessageSquareAdd } from "react-icons/bi";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdLogout, MdOutlineAdminPanelSettings } from "react-icons/md";

export const divisions = [
  "dhaka",
  "sylhet",
  "barishal",
  "chattogram",
  "rajshahi",
  "khulna",
  "mymensingh",
  "rangpur",
];

export const footerLinks = [
  [
    {
      name: "search",
      path: "/search",
    },
    {
      name: "Terms of Service",
      path: "/terms-of-service",
    },
    {
      name: "Return & Warranty Policy",
      path: "/return-warranty-policy",
    },
    {
      name: "privacy policy",
      path: "/privacy-policy",
    },
  ],
  [
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "License & Certificates",
      path: "/license-certificates",
    },
  ],
  [
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ],
];

export const categories = [
  { id: 1, name: "home", value: "home" },
  { id: 2, name: "table", value: "table" },
  { id: 3, name: "storage", value: "storage" },
  { id: 4, name: "steel furniture", value: "steelFurniture" },
  { id: 5, name: "chair", value: "chair" },
  { id: 6, name: "sofa", value: "sofa" },
  { id: 7, name: "work station", value: "workStation" },
  { id: 8, name: "garments", value: "garments" },
  { id: 9, name: "interior", value: "interior" },
];

export const subCategories = [
  { id: 1, name: "bed", value: "bed" },
  { id: 1, name: "dressing table", value: "dressingTable" },
  { id: 1, name: "cup board", value: "cupBoard" },
  { id: 1, name: "Wardrobe", value: "Wardrobe" },
  { id: 1, name: "TV Trolley", value: "tvTrolley" },
  { id: 1, name: "Book Shelf", value: "bookShelf" },
  { id: 1, name: "Showcase & Corner Shelf", value: "showcaseCornerShelf" },
  { id: 1, name: "Dinner Wagon", value: "dinnerWagon" },
  { id: 1, name: "Dinning Table & Chair", value: "dinningTableChair" },
  { id: 2, name: "Director Table", value: "directorTable" },
  { id: 2, name: "Executive Table", value: "executiveTable" },
  { id: 2, name: "Manager Table", value: "managerTable" },
  { id: 2, name: "Computer Table", value: "computerTable" },
  { id: 3, name: "Drawer", value: "drawer" },
  { id: 3, name: "Side Cabinet", value: "sideCabinet" },
  { id: 3, name: "File Cabinet", value: "fileCabinet" },
  { id: 3, name: "Multipurpose Shelf", value: "multipurposeShelf" },
  { id: 3, name: "Shoe Rack", value: "shoeRack" },
  { id: 4, name: "Almirah", value: "almirah" },
  { id: 4, name: "4 Drawer", value: "4drawer" },
  { id: 4, name: "3 Drawer", value: "3drawer" },
  { id: 4, name: "Drawer Cum File Cabinet", value: "drawerCumFileCabinet" },
  { id: 4, name: "Slotted Angle Rack", value: "slottedAngleRack" },
  { id: 4, name: "Heavy Duty Rack", value: "heavyDutyRack" },
  { id: 5, name: "High Back", value: "highBack" },
  { id: 5, name: "Medium Back", value: "mediumBack" },
  { id: 5, name: "Low Back", value: "lowBack" },
  { id: 5, name: "Fixed/Visitor", value: "fixedVisitor" },
  { id: 5, name: "Tool", value: "tool" },
  { id: 5, name: "Auditorium Chair", value: "auditoriumChair" },
  { id: 5, name: "Group Chair", value: "groupChair" },
  { id: 6, name: "Sofa", value: "sofa" },
  { id: 6, name: "Center Table", value: "centerTable" },
  { id: 6, name: "Divan", value: "divan" },
  { id: 7, name: "Fabric", value: "fabric" },
  { id: 7, name: "Metal", value: "metal" },
  { id: 7, name: "Others", value: "others" },
  { id: 8, name: "QC Table", value: "qcTable" },
  {
    id: 8,
    name: "Center/Cutting/Packing Table",
    value: "centerCuttingPackingTable",
  },
  { id: 8, name: "Input/Loading Table", value: "inputLoadingTable" },
  { id: 8, name: "Tagging Poly Table", value: "taggingPolyTable" },
  {
    id: 8,
    name: "Cut Part Inspection Table",
    value: "cutPartInspectionTable",
  },
  {
    id: 8,
    name: "Fabric Relaxing Multi Level Rack",
    value: "fabricRelaxingMultiLevelRack",
  },
  { id: 8, name: "Inspection Table", value: "inspectionTable" },
  { id: 8, name: "Measurement Table", value: "measurementTable" },
  { id: 8, name: "Iron Table", value: "ironTable" },
  { id: 8, name: "Worker Chair", value: "workerChair" },
  { id: 9, name: "Living", value: "living" },
  { id: 9, name: "Kitchen", value: "kitchen" },
  { id: 9, name: "Office", value: "office" },
  { id: 9, name: "Restaurant", value: "restaurant" },
  { id: 9, name: "Others", value: "others" },
];

export const userSidebarMenus = [
  {
    name: "profile",
    path: "/account",
    icon: CgProfile,
  },
  {
    name: "my orders",
    path: "/account/orders",
    icon: BsTruck,
    margin: true,
  },
  {
    name: "back to home",
    path: "/",
    icon: AiOutlineHome,
    margin: true,
  },
];

export const adminSidebarMenus = [
  {
    name: "dashboard",
    path: "/dashboard",
    icon: HiOutlineViewGridAdd,
  },
  {
    name: "manage orders",
    path: "/dashboard/manage-orders",
    icon: SlLocationPin,
  },
  {
    name: "add products",
    path: "/dashboard/add-products",
    icon: BiMessageSquareAdd,
  },
  {
    name: "manage products",
    path: "/dashboard/manage-products",
    icon: RiFileSettingsLine,
    margin: true,
  },
  {
    name: "users",
    path: "/dashboard/users",
    icon: FaUsers,
  },
  {
    name: "settings",
    path: "/dashboard/settings",
    icon: AiOutlineSetting,
    margin: true,
  },
  {
    name: "back to home",
    path: "/",
    icon: AiOutlineHome,
    margin: true,
  },
];

export const forAllCollectionFilterData = [
  {
    name: "home",
    value: "home",
  },
  {
    name: "table",
    value: "table",
  },
  {
    name: "storage",
    value: "storage",
  },
  {
    name: "steel Furniture",
    value: "steelFurniture",
  },
  {
    name: "chair",
    value: "chair",
  },
  {
    name: "sofa",
    value: "sofa",
  },
  {
    name: "work Station",
    value: "workStation",
  },
  {
    name: "Garments",
    value: "Garments",
  },
  {
    name: "interior",
    value: "interior",
  },
];
export const forHomeFilterData = [
  {
    name: "bed",
    value: "bed",
  },
  {
    name: "Dressing Table",
    value: "dressingTable",
  },
  {
    name: "cup Board",
    value: "cupBoard",
  },
  {
    name: "wardrobe",
    value: "wardrobe",
  },
  {
    name: "reading table",
    value: "readingTable",
  },
  {
    name: "TV trolley",
    value: "tvTrolley",
  },
  {
    name: "book shelf",
    value: "bookShelf",
  },
  {
    name: "Showcase & Corner Shelf",
    value: "showcaseCornerShelf",
  },
  {
    name: "dinner wagon",
    value: "dinnerWagon",
  },
  {
    name: "Dinning Table & Chair",
    value: "dinningTableChair",
  },
];
export const forTableFilterData = [
  {
    name: "director Table",
    value: "directorTable",
  },
  {
    name: "executive Table",
    value: "executiveTable",
  },
  {
    name: "manager Table",
    value: "managerTable",
  },
  {
    name: "computer Table",
    value: "computerTable",
  },
];
export const forStorageFilterData = [
  {
    name: "drawer",
    value: "drawer",
  },
  {
    name: "side Cabinet",
    value: "sideCabinet",
  },
  {
    name: "file Cabinet",
    value: "fileCabinet",
  },
  {
    name: "multipurpose shelf",
    value: "multipurposeShelf",
  },
  {
    name: "shoe Rack",
    value: "shoeRack",
  },
];
export const forSteelFurnitureFilterData = [
  {
    name: "almirah",
    value: "almirah",
  },
  {
    name: "4 Drawer",
    value: "fourDrawer",
  },
  {
    name: "3 Drawer",
    value: "threeDrawer",
  },
  {
    name: "drawer cum file cabinet",
    value: "drawerCumFileCabinet",
  },
  {
    name: "slotted angle rack",
    value: "slottedAngelRack",
  },
  {
    name: "heavy duty rack",
    value: "heavyDutyRack",
  },
];
export const forChairFilterData = [
  {
    name: "high Back",
    value: "highBack",
  },
  {
    name: "medium Back",
    value: "mediumBack",
  },
  {
    name: "low Back",
    value: "lowBack",
  },
  {
    name: "fixed/Visitor",
    value: "fixedVisitor",
  },
  {
    name: "tool",
    value: "tool",
  },
  {
    name: "auditorium chair",
    value: "auditoriumChair",
  },
  {
    name: "group chair",
    value: "groupChair",
  },
];
export const forSofaFilterData = [
  {
    name: "sofa",
    value: "sofa",
  },
  {
    name: "center Table",
    value: "centerTable",
  },
  {
    name: "divan",
    value: "divan",
  },
];
export const forWorkStationFilterData = [
  {
    name: "fabric",
    value: "fabric",
  },
  {
    name: "metal",
    value: "metal",
  },
  {
    name: "others",
    value: "others",
  },
];
export const forGarmentsFilterData = [
  {
    name: "QC table",
    value: "qcTable",
  },
  {
    name: "center/Cutting/Packing/ Table",
    value: "centerCuttingPackingTable",
  },
  {
    name: "input/Loading Table",
    value: "inputLoadingTable",
  },
  {
    name: "tagging poly table",
    value: "taggingPolyTable",
  },
  {
    name: "cut part inspection table",
    value: "cutPartInspectionTable",
  },
  {
    name: "fabric Relaxing Multi Level Rack",
    value: "fabricRelaxingMultiLevelRack",
  },
  {
    name: "inspection Table",
    value: "inspectionTable",
  },
  {
    name: "measurement Table",
    value: "measurementTable",
  },
  {
    name: "iron table",
    value: "ironTable",
  },
  {
    name: "worker Chair",
    value: "workerChair",
  },
];
export const forInteriorFilterData = [
  {
    name: "living",
    value: "living",
  },
  {
    name: "kitchen",
    value: "kitchen",
  },
  {
    name: "office",
    value: "office",
  },
  {
    name: "restaurant",
    value: "restaurant",
  },
  {
    name: "others",
    value: "others",
  },
];
