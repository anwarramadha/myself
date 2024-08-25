export default interface Social {
  id: number;
  attributes: {
    name: string;
    text: string;
    url: string;
    icon: string;
  };
}