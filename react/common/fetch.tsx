export const fetchPath = {
  getDocuments: "/returns/getDocuments/",
  getProfile: "/no-cache/profileSystem/getProfile",
  saveDocuments: "/returns/saveDocuments/",
  updateDocuments: "/returns/updateDocuments/",
  getCategories: "/returns/getCategories",
  getSchema: "/returns/getSchema/",
  generateSchema: "/returns/generateSchema/",
  createCoupon: "/returns/createCoupon/",
  createPromotion: "/returns/createPromotion/",
  getOrders: "/api/oms/user/orders",
  renderTemplates: "/api/template-render/pvt/templates"
};

export const fetchMethod = {
  get: "GET",
  post: "POST",
  put: "PUT"
};

export const fetchHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};