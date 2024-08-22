export default interface Resume {
  id: number;
  attributes: {
    joinDate: string;
    leaveDate: string;
    institution: string;
    position: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
}