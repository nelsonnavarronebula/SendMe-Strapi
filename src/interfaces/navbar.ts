export default interface NavbarResponse {
  data: {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    Navbar: {
      id: number;
      solutions: string;
      buttonPath: string;
    }[];
    Languages: {
      id: number;
      textButton: string;
      buttonPath: string;
      country: {
        id: number;
        documentId: string;
        url: string;
      };
    }[];
    localizations: any[];
  }[];
}
