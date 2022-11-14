export interface IExpData {
  icon: string;
  year: string;
  period: string;
  company: string;
  title: string;
  description: string[];
  skills: {
    devicon: [
      {
        tooltip: string;
        icon: string;
      }
    ];
    img: [
      {
        tooltip: string;
        icon: string;
      }
    ];
  };
}
