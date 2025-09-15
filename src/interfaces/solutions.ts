export default interface SolutionsResponse {
  data: {
    title: {
      children: {
        text: string;
      }[];
    }[];
    subParagraph: string;
    CardSolution: {
      id: number;
      title: string;
      subParagraph: string;
    }[];
  }[];
}
