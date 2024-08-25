import type Stack from "./stack";
export default interface PortfolioStack {
  attributes: {
    stacks: {
      data: [
        {
          id: number;
          attributes: Stack;
        }
      ]
    }
  };
}