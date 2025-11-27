export const INBOX_SORT_OPTIONS = [
  {
    title: "Starred",
    field: "isStarred",
    order: "desc",
  },
];

export const PRODUCTS_SORTING_OPTIONS = [
  {
    title: "Price High to Low",
    field: "price",
    order: "desc",
  },
  {
    title: "Price Low to High",
    field: "price",
    order: "asc",
  },
  {
    title: "Stock High to Low",
    field: "stock",
    order: "desc",
  },
  {
    title: "Stock Low to High",
    field: "stock",
    order: "asc",
  },
  {
    title: "Last Created",
    field: "createdAt",
    order: "asc",
  },
];

export const USERS_SORTING_OPTIONS = [
  {
    title: "A to Z",
    field: "profile.fullName",
    order: "desc",
  },
  {
    title: "Z to A",
    field: "profile.fullName",
    order: "asc",
  },
  {
    title: "Verified",
    field: "isVerified",
    order: "desc",
  },
  {
    title: "Active",
    field: "isActive",
    order: "desc",
  },
];

export const ORDERS_SORTING_OPTIONS = [
  {
    title: "Total High to Low",
    field: "totalAmount",
    order: "desc",
  },
  {
    title: "Total Low to High",
    field: "totalAmount",
    order: "asc",
  },
  {
    title: "Latest Created ",
    field: "createdAt",
    order: "desc",
  },
  {
    title: "Latest Updated",
    field: "UpdatedAt",
    order: "asc",
  },
];
