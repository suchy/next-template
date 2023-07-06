import { createClient } from "@vercel/edge-config";
import { env } from "./env.mjs";

export const config = createClient(env.EDGE_CONFIG);
