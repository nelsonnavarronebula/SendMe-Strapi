export default interface BenefitsResponse {
  data: {
    title: {
      children: {
        text: string;
      }[];
    }[];
    subParagraph: string;
    CardsBenefits: {
      id: number;
      title: string;
      subParagraph: string;
    }[];
  }[];
}
