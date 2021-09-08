export interface Technologie {
  id: number | null; // L'id il faut le mettre en nombre ou null si il y a un export vers la base de donnée
  technoname: string;
  category: string;
  details: string;
}
