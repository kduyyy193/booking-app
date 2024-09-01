interface ILinks {
  [key: string]: string;
}

const routerLinks = (name: string) => {
  const links: ILinks = {
    home: "/",
    user: "/user",
    dashboard: "/dashboard",
    login: "/login",
    signup: "/signup",
    bookATable: "/",
    customerInfomation: "/customer-infomation",
    reviewSummary: "/review-summary",
    reservation: "/reservation",
  };

  return links[name];
};

export default routerLinks;
