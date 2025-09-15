export default interface ToolsResponse {
  data: {
    title: {
      children: {
        text: string;
      }[];
    }[];
    subParagraph: string;
    Card: {
      id: number;
      title: string;
      subParagraph: string;
    }[];
  }[];
}
