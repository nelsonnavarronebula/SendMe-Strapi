export default interface Hero {
  data: {
    description: string;
    Buttons: {
      textButton: string;
      buttonPath: string;
      isPrimary: boolean;
    }[];
    localizations: any[];
  }[];
}
