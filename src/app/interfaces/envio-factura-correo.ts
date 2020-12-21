export interface EnvioFacturaCorreo {
  totalElements: number; // total length of items in all pages
  number: number; // indexPage number
  size: number; // items per page
  content: ContentFactura[];
}

export interface ContentFactura {
  id: number;
  codigo: string;
  edicion: boolean;
}
