export default interface FunctionsResponse {
  data: {
    title: {
      type: string;
      children: {
        text: string;
        type: string;
      }[];
    }[];
    subParagraph: string;
    textCopy: string;
    Button: {
      id: number;
      textButton: string;
      buttonPath: string;
      isPrimary: boolean;
    };
    CardFunction: {
      id: number;
      title: string;
      subParagraph: string;
    }[];
  }[];
}
