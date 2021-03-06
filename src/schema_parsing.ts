import {JsonldSchemaFrameParser} from "./schema_parsing/jsonld_schema_frame_parser";


/**
 * API for the schema_parsing module, it accepts a JSON-LD Schema
 * and generates a JSON-LD frame that can be used to select
 * nodes in the RDF graph as JSON-LD documents to validate.
 * @param jsonldschema
 */
export async function jsonldSchemaToFrame(jsonldschema: any): Promise<any> {
    return new JsonldSchemaFrameParser().parse(jsonldschema);
}