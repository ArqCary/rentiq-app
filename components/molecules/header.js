export const Header = ({ company = "", nav = "", buttons = "" } = {}) => {
  return `
    ${company}
    ${nav}
    ${buttons}
    `;
};
