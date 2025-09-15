export default interface IntegrationsResponse {
  data: {
    title: {
      children: {
        text: string;
      }[];
    }[];
    subParagraph: string;
    CardIntegration: {
      id: number;
      title: string;
      subParagraph: string;
    }[];
    localizations: any[];
  }[];
}
