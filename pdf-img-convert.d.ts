type ConversionConfig = {
    /** Width of the output image in pixels */
    width?: number;
    /** Height of the output image in pixels */
    height?: number;
    /** A list of page numbers to render (default is all pages) */
    page_numbers?: number[];
    /** Whether to output the image in base64 format */
    base64?: boolean;
    /** Scaling ratio for the PDF page viewport */
    scale?: number;
};

type PDFData = string | Uint8Array | Buffer;

declare function convert(
    pdf: PDFData, 
    conversion_config: {base64: true} & ConversionConfig
): Promise<string[]>;

declare function convert(
    pdf: PDFData, 
    conversion_config?: {base64?: false} & ConversionConfig
): Promise<Uint8Array[]>;

declare function convert(
    pdf: PDFData,
    conversion_config?: ConversionConfig
): Promise<string[] | Uint8Array[]>;

export {convert};
