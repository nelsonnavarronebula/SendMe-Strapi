export default interface BannerResponse {
  data: {
    title: string;
    textCopy: string;
    Button: {
      id: number;
      textButton: string;
      buttonPath: string;
      isPrimary: boolean;
    };
    localizations: any[];
  }[];
}
