export default interface TestimonialsResponse {
  data: {
    title: {
      children: {
        text: string;
      }[];
    }[];
    subParagraph: string;
    CardTestimonials: {
      qualification: number; 
      opinion: string;
    }[];
    localizations: any[];
  }[];
}
