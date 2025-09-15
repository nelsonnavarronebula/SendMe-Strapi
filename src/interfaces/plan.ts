export default interface PlansResponse {
  data: {
    title: {
      children: {
        text: string;
      }[];
    }[];
    subParagraph: string;
    titleFrequentlyAskedQuestions: string;
    frequentlyAskedQuestions: {
      id: number;
      title: string;
      subParagraph: string;
    }[];
    localizations: any[];
  }[];
}
