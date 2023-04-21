export const officialAPIEndpoint = 'https://api.openai.com/v1/chat/completions';
const customAPIEndpoint =
  import.meta.env.VITE_CUSTOM_API_ENDPOINT || 'https://c857d09db23e6822e3.gradio.live/v1/chat/completions';
export const defaultAPIEndpoint =
  import.meta.env.VITE_DEFAULT_API_ENDPOINT || customAPIEndpoint;

export const availableEndpoints = [officialAPIEndpoint, customAPIEndpoint];
