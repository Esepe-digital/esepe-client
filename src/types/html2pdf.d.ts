declare module 'html2pdf.js' {
  interface Html2PdfOptions {
    margin?: number | [number, number, number, number];
    filename?: string;
    image?: {
      type?: string;
      quality?: number;
    };
    enableLinks?: boolean;
    html2canvas?: {
      scale?: number;
      useCORS?: boolean;
      [key: string]: unknown;
    };
    jsPDF?: {
      orientation?: 'portrait' | 'landscape';
      unit?: 'mm' | 'cm' | 'in' | 'px' | 'pt';
      format?: string | [number, number];
      [key: string]: unknown;
    };
    [key: string]: unknown;
  }

  interface Html2PdfInstance {
    set(options: Partial<Html2PdfOptions>): Html2PdfInstance;
    from(element: HTMLElement | string): Html2PdfInstance;
    save(filename?: string): Promise<void>;
    outputPdf(type?: string, options?: Record<string, unknown>): unknown;
    outputImg(type?: string, options?: Record<string, unknown>): unknown;
    output(type?: string, options?: Record<string, unknown>): unknown;
    toPdf(): Html2PdfInstance;
    toImg(): Html2PdfInstance;
    toCanvas(): Html2PdfInstance;
    then(callback: (result: unknown) => void): Html2PdfInstance;
    catch(callback: (error: Error) => void): Html2PdfInstance;
    [key: string]: unknown;
  }

  function html2pdf(): Html2PdfInstance;
  function html2pdf(
    element: HTMLElement | string,
    options?: Html2PdfOptions
  ): Html2PdfInstance;

  export = html2pdf;
}
